(function(factory, window) {
	"use strict";
	if (typeof define === 'function' && define.amd) {
		define(['leaflet'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('leaflet'));
	}
	if (typeof window !== 'undefined' && window.L) {
		window.L.Ruler = factory(L);
	}
}(function (L) {
	"use strict";
	L.Control.Ruler = L.Control.extend({
		options: {
			position: 'topright',
			circleMarker: {
				color: 'red',
				radius: 2
			},
			lineStyle: {
				color: 'red',
				dashArray: '1,6'
			},
			lengthUnits: {
				label: ' ',
				conversions: [
					{
						display: 'km',
						decimal: 2,
						factor: 6371,
						max: null
					}
				]
			},
			angleUnit: {
				display: '&deg;',
				decimal: 2,
				factor: null,
				label: 'Bearing:'
			}
		},
		onAdd: function(map) {
			this._map = map;
			this._container = L.DomUtil.create('div', 'leaflet-bar');
			this._container.classList.add('leaflet-ruler');
			L.DomEvent.disableClickPropagation(this._container);
			
			// Initialize the click event that toggles ruling.
			//L.DomEvent.on(this._container, 'click touchstart touchend', this._toggleMeasure, this);
			L.DomEvent.on(this._container, 'click', this._toggleMeasure, this);

			// Flag to keep track of ruling state.
			this._choice = false;

			this._defaultCursor = this._map._container.style.cursor;
			this._allLayers = L.layerGroup();

			return this._container;
		},
		onRemove: function() {
			L.DomEvent.off(this._container, 'click', this._toggleMeasure, this);
		},
		_toggleMeasure: function(e) {

			// Update flag that keeps track of ruling state.
			this._choice = !this._choice;

			// Initialize.
			this._clickedLatLong = null;
			this._clickedPoints = [];
			this._totalLengths = [];
			this._totalLengths.toFixed = function(decimals) {
				return parseFloat(this.toString()).toFixed(decimals);
			}

			for (var i = 0; i < this.options.lengthUnits.conversions.length; i++) {
				this._totalLengths[i] = 0;
			}

			// If we're ruling...
			if (this._choice) {
				this._map.doubleClickZoom.disable();

				// Ways to stop ruling.
				L.DomEvent.on(this._map._container, 'keydown', this._escape, this);
				L.DomEvent.on(this._map._container, 'dblclick', this._closePath, this);

				this._container.classList.add('leaflet-ruler-clicked');
				this._clickCount = 0;
				this._tempLine = L.featureGroup().addTo(this._allLayers);
				this._tempPoint = L.featureGroup().addTo(this._allLayers);
				this._pointLayer = L.featureGroup().addTo(this._allLayers);
				this._polylineLayer = L.featureGroup().addTo(this._allLayers);
				this._allLayers.addTo(this._map);
				this._map._container.style.cursor = 'crosshair';

				// Initialize events in the ruling state.
				this._map.on('click', this._clicked, this);
				this._map.on('mousemove', this._moving, this);
			}

			// If we stopped ruling...
			else {

				// Reset.
				this._map.doubleClickZoom.enable();
				L.DomEvent.off(this._map._container, 'keydown', this._escape, this);
				L.DomEvent.off(this._map._container, 'dblclick', this._closePath, this);
				this._container.classList.remove('leaflet-ruler-clicked');
				this._map.removeLayer(this._allLayers);
				this._allLayers = L.layerGroup();
				this._map._container.style.cursor = this._defaultCursor;
				this._map.off('click', this._clicked, this);
				this._map.off('mousemove', this._moving, this);
				this._map.removeLayer(this._tempLine);
				this._map.removeLayer(this._tempPoint);
			}
		},
		_clicked: function(e) {
			this._clickedLatLong = e.latlng;
			this._clickedPoints.push(this._clickedLatLong);
			L.circleMarker(this._clickedLatLong, this.options.circleMarker).addTo(this._pointLayer);

			// If this is not the first initial starting point click (i.e., an ending click)...
			if (this._clickCount > 0 && !e.latlng.equals(this._clickedPoints[this._clickedPoints.length - 2])) {

				if (this._movingLatLong) {
					L.polyline([this._clickedPoints[this._clickCount-1], this._movingLatLong], this.options.lineStyle).addTo(this._polylineLayer);
				}

				var text = '<table>';

				// Distances.
				text += '<tr valign="top">'
				text += '<td class="ruler-labels">' + this.options.lengthUnits.label + '</td>';
				text += '<td class="ruler-values">';

				for (var i = 0; i < this.options.lengthUnits.conversions.length; i++) {

					if (this._clickCount > 1) {
						this._totalLengths[i] += this._result.Distances[i];

						// max check.
						if (this.options.lengthUnits.conversions[i].max && this._addedLengths[i] > this.options.lengthUnits.conversions[i].max) continue;

						text += this._totalLengths[i].toFixed(this.options.lengthUnits.conversions[i].decimal) + '&nbsp;' + this.options.lengthUnits.conversions[i].display + '<br>';
					}
					else {
						this._totalLengths[i] += this._result.Distances[i];

						// max check.
						if (this.options.lengthUnits.conversions[i].max && this._addedLengths[i] > this.options.lengthUnits.conversions[i].max) continue;

						text += this._result.Distances[i].toFixed(this.options.lengthUnits.conversions[i].decimal) + '&nbsp;' + this.options.lengthUnits.conversions[i].display + '<br>';
					}
				}

				text += '</td>';
				text += '</tr>'
				text += '</table>';

				L.circleMarker(this._clickedLatLong, this.options.circleMarker).bindTooltip(text, {permanent: true, className: 'result-tooltip'}).addTo(this._pointLayer).openTooltip();
			}

			this._clickCount++;
		},
		_moving: function(e) {

			// We're only interested in this event when ruling has been activated.
			if (!this._clickedLatLong) return;

			this._movingLatLong = e.latlng;

			if (this._tempLine) {
				this._map.removeLayer(this._tempLine);
				this._map.removeLayer(this._tempPoint);
			}

			var text;
			this._addedLengths = [];
			this._addedLengths.toFixed = function(decimals) {
				return parseFloat(this.toString()).toFixed(decimals);
			}

			for (var i = 0; i < this.options.lengthUnits.conversions.length; i++) {
				this._addedLengths[i] = 0;
			}

			this._calculateBearingAndDistances();

			for (var i = 0; i < this.options.lengthUnits.conversions.length; i++) {
				this._addedLengths[i] = this._result.Distances[i] + this._totalLengths[i];
			}

			// Hack to disable moving updates feature on mobile, as it doesn't work with current mouse-centric event handling implementation.
			if (L.Browser.mobile) return;

			this._tempLine = L.featureGroup();
			this._tempPoint = L.featureGroup();
			this._tempLine.addTo(this._map);
			this._tempPoint.addTo(this._map);

			L.polyline([this._clickedLatLong, this._movingLatLong], this.options.lineStyle).addTo(this._tempLine);

			var text = '<table>';

			// Distances.
			text += '<tr valign="top">'
			text += '<td class="ruler-labels">' + this.options.lengthUnits.label + '</td>';
			text += '<td class="ruler-values">';

			for (var i = 0; i < this.options.lengthUnits.conversions.length; i++) {

				// max check.
				if (this.options.lengthUnits.conversions[i].max && this._addedLengths[i] > this.options.lengthUnits.conversions[i].max) continue;

				if (this._clickCount > 1) {
					text += this._addedLengths[i].toFixed(this.options.lengthUnits.conversions[i].decimal) + '&nbsp;' + this.options.lengthUnits.conversions[i].display + '&nbsp;(+' + this._result.Distances[i].toFixed(this.options.lengthUnits.conversions[i].decimal) + ')<br>';
				}
				else {
					text += this._result.Distances[i].toFixed(this.options.lengthUnits.conversions[i].decimal) + '&nbsp;' + this.options.lengthUnits.conversions[i].display + '<br>';
				}
			}

			text += '</td>';
			text += '</tr>'
			text += '</table>';

			L.circleMarker(this._movingLatLong, this.options.circleMarker).bindTooltip(text, {sticky: true, offset: L.point(0, 0), className: 'moving-tooltip'}).addTo(this._tempPoint).openTooltip();
		},
		_escape: function(e) {

			if (e.keyCode === 27) {

				if (this._clickCount > 0) {
					this._closePath();
				}
				else {
					this._choice = true;
					this._toggleMeasure();
				}
			}
		},
		_calculateBearingAndDistances: function() {
			var f1 = this._clickedLatLong.lat, l1 = this._clickedLatLong.lng, f2 = this._movingLatLong.lat, l2 = this._movingLatLong.lng;
			var toRadian = Math.PI / 180;

			// haversine formula

			// Bearing.
			var y = Math.sin((l2-l1)*toRadian) * Math.cos(f2*toRadian);
			var x = Math.cos(f1*toRadian)*Math.sin(f2*toRadian) - Math.sin(f1*toRadian)*Math.cos(f2*toRadian)*Math.cos((l2-l1)*toRadian);
			var bearing = Math.atan2(y, x)*((this.options.angleUnit.factor ? this.options.angleUnit.factor/2 : 180)/Math.PI);
			bearing += bearing < 0 ? (this.options.angleUnit.factor ? this.options.angleUnit.factor : 360) : 0;

			// Distances.
			var distances = [];

			for (var i = 0; i < this.options.lengthUnits.conversions.length; i++) {
				var R = this.options.lengthUnits.conversions[i].factor;
				var deltaF = (f2 - f1)*toRadian;
				var deltaL = (l2 - l1)*toRadian;
				var a = Math.sin(deltaF/2) * Math.sin(deltaF/2) + Math.cos(f1*toRadian) * Math.cos(f2*toRadian) * Math.sin(deltaL/2) * Math.sin(deltaL/2);
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
				distances[i] = R * c;
			}

			this._result = {
				Bearing: bearing,
				Distances: distances
			};
		},
		_closePath: function() {
			this._map.removeLayer(this._tempLine);
			this._map.removeLayer(this._tempPoint);
			this._choice = false;
			this._toggleMeasure();
		}
	});
	L.control.ruler = function(options) {
		return new L.Control.Ruler(options);
	};
}, window));
