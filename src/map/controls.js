import {geojson_data} from '../utils/lang.js';
import {borders_style, territories_style, danger_style, danger_unknown_style, wildlife_style} from '../utils/data.js';
import {Sidebar} from '../sidebar/sidebar_init.js';
import {getCentroid2, getLineCenter, is_mobile_browser, dateline, checkURLExists} from '../utils/tech.js';

let _sidebar;

let dangerIcon = L.icon({
	iconUrl: './images/exc_marker_red_filled.svg',
	iconSize: [30, 30],
	iconAnchor: [30, 15]
});
let wildlifeIcon = L.icon({
	iconUrl: './images/exc_marker_green_filled.svg',
	iconSize: [30, 30],
	iconAnchor: [30, 15]
});


//=================================//
// class for adding geojson layers //
export class LayerManipulations {
	constructor(_properties, type, _style, languageParam) {
		this.lang = languageParam;
		this.p = _properties;
		this.code = this.p.code;
		this.style = _style;
		this.cacheBypass = new Date().getTime();

		switch(type) {
			case 'border':
				this.addition = 'borders_all';
				break;
			case 'territory':
				this.addition = 'territories';
				break;
			case 'danger':
				this.addition = 'danger';
				break;
			case 'wildlife':
				this.addition = 'wildlife';
				break;
		}
	}

	initLayer() {
		let pane = this.addition;
		try {
			let layer = L.geoJson.ajax(`data/${this.code}/${this.code}_${this.addition}.geojson?v=${this.cacheBypass}`, {
				pane: pane,
				style: this.style,
				coordsToLatLng: dateline,
				onEachFeature: function(feature, layer) {
					if (pane == 'territories') {
						let tooltip_text = feature.properties.part_name;
						if (this.lang == 'en') tooltip_text = feature.properties.part_name_en;

						layer.bindTooltip(tooltip_text, {sticky: true});
					}
					// if (pane == 'wildlife') {
					// 	let tooltip_text = feature.properties.part_name;
					// 	if (this.lang == 'en') tooltip_text = feature.properties.part_name_en;

					// 	layer.bindTooltip(tooltip_text, {sticky: true});
					// }
				}.bind(this)
			});
			this.layer = layer;
			return layer;
		} catch (e) {
			console.log(e);
		}
	}

	addDangerLayers(map, dangers) {
		try {
			for (let el of dangers) {
				if (el.danger_unknown) this.style = danger_unknown_style;
				L.geoJson.ajax(`data/${this.code}/${this.code}_${this.addition}_${el['danger_name']}.geojson?v=${this.cacheBypass}`, {
					pane: this.addition,
					style: this.style,
					onEachFeature: function(feature, layer) {
						let coords_array = feature.geometry.coordinates;
						let _center;

						let dangerObject, dangerMarker;
						// try and use maptext fields if present, if not use the danger_header property
						let dangerTooltip = (feature.properties.maptext) ? feature.properties[`maptext${(this.lang == "en")?'_en':''}`] : el[`danger_header_${this.lang}`];

						if (feature.geometry.type === "Point") {
							// if we have a point
							var tempLng = coords_array[0];
							var tempLat = coords_array[1];
								tempLng = (tempLng < 0) ? tempLng + 360 : tempLng;

							_center = [tempLat, tempLng];

							dangerObject = L.marker(_center, {icon: dangerIcon, pane: 'markers', id: el.danger_id});
						} else {
							// get centroid if it's not a point
							let centroid = turf.centroid(feature);
							let centroidCoords = centroid.geometry.coordinates;
							let markerCenter = [centroidCoords[1], centroidCoords[0]];

							// if we don't know where exactly the marker should be
							if (el.danger_unknown) markerCenter = getLineCenter(coords_array);

							// add a marker
							dangerMarker = L.marker(markerCenter, {icon: dangerIcon, pane: 'markers', id: el.danger_id});
							dangerMarker.bindTooltip(dangerTooltip);
							dangerMarker.addTo(map);

							dangerMarker.on('click', function(e) {
								_sidebar.goTo(e.target.options.id);
								showSidebar();
							});

							// Bring markers to the top - dynamically change z-index
							dangerMarker.setZIndexOffset(100 - map.latLngToLayerPoint(dangerMarker.getLatLng()).round());

							// add a polygon
							dangerObject = L.geoJSON(feature, {style: danger_style, pane: 'markers', id: el.danger_id});
						}

						dangerObject.bindTooltip(dangerTooltip);
						dangerObject.addTo(map);
						dangerObject.on('click', function(e) {
							_sidebar.goTo(e.target.options.id);
							showSidebar();
						});
						
						// Bring markers to the top - dynamically change z-index
						dangerObject.setZIndexOffset(100 - map.latLngToLayerPoint(dangerMarker.getLatLng()).round());
					}.bind(this)
				})//.addTo(map);
			}
		} catch (e) {console.log(e);}
	}

	addWildlifeLayer(map) {
		checkURLExists(`data/${this.code}/${this.code}_${this.addition}.geojson?v=${this.cacheBypass}`, (URLexists) => {
			if (URLexists) {
				try {
					L.geoJson.ajax(`data/${this.code}/${this.code}_${this.addition}.geojson?v=${this.cacheBypass}`, {
						pane: this.addition,
						style: this.style,
						//coordsToLatLng: dateline,
						onEachFeature: function(feature, layer) {

							// reverse coordinates
							let coords = [feature.geometry.coordinates[1],feature.geometry.coordinates[0]];

							// add tooltip
							let tooltip = (feature.properties["Species_2"]) ? feature.properties["Species_2"] : "";

							// create marker, bind tooltip, add marker to the map
							let wildlifeObject = L.marker(coords, {icon: wildlifeIcon, pane: 'wildlife'});
							wildlifeObject.bindTooltip(tooltip);
							wildlifeObject.addTo(map);

							// if the species is endangered -> add a red border
							if (feature.properties["endangered"]) {
								if (feature.properties["endangered"] == true) {
									L.DomUtil.addClass(wildlifeObject._icon, 'endangered');
								}
							}
							//L.DomUtil.addClass(wildlifeObject._icon, `${feature.geometry.coordinates[1]}`);
							//L.DomUtil.addClass(wildlifeObject._icon, `${feature.geometry.coordinates[0]}`);
						}.bind(this)
					});
					//this.layer = layer;
					//layer.addTo(map);
					$('.show_wildlife').removeClass('settings_disabled');
				} catch (e) {
					console.log(e);
				}
			} else {
				$('.show_wildlife').addClass('settings_disabled');
			}
		});
	}
};



export function loadLocalData(map, id, languageParam) {
	let properties = geojson_data[id].properties;
	window.props = properties;

	// unset maxbounds and minzoom
	map.setMaxBounds(null);
	map.setMinZoom(null);
	
	// show all the layers
	let borders = new LayerManipulations(properties, 'border', borders_style, languageParam).initLayer();
	borders.on('data:loaded', function() {
		map.once('zoomend moveend', () => {
			// wait 2 seconds and set maxbounds and minzoom // a very dirty fix
			setTimeout(function () {
				let max_bounds = borders.getBounds().pad(1);
				// UNCOMMENT TO TURN THE BOUNDS BACK ON
				map.setMaxBounds(max_bounds);
				map.setMinZoom(map.getBoundsZoom(max_bounds));
				map.on('drag', () => {
					map.panInsideBounds(max_bounds, { animate: false });
				});
			}, 2000);
		});
		map.fitBounds(borders.getBounds());
		
		$('.spinner_wrapper').hide();
	});
	borders.addTo(map);

	let territories = new LayerManipulations(properties, 'territory', territories_style, languageParam).initLayer();
	territories.addTo(map);

	let dangers = new LayerManipulations(properties, 'danger', danger_style, languageParam);
	dangers.addDangerLayers(map, properties.dangers);

	let wildlife = new LayerManipulations(properties, 'wildlife', wildlife_style, languageParam);
	wildlife.addWildlifeLayer(map);

	// hide intro
	$('.intro').slideUp('slow');
	$('.show_intro').addClass('show_intro_logo');
	
	// change data in sidebar
	if (!_sidebar) _sidebar = new Sidebar(languageParam);
	_sidebar.setElements(properties);
	if (is_mobile_browser()) hideSidebar(); // change to showSidebar if people will request
}

// reset all the toggles and buttons to their default values
export function defaultToggles() {
	for (let i = 1; i <= 10; i++) $(`#check-${i}`).lcs_off(); // first disable all the toggles

	// enable these two by default
	$('#check-1').lcs_on();
	$('#check-3').lcs_on();

	// reset button visuals
	$('.btn-success').addClass('btn-outline-success').removeClass('btn-success');

	// remove comparer if needed
	try { slider.removeSlider(); } catch {}
}


export function toggleSidebar() {
	if ($('#global_sidebar_block').hasClass('sidebar_shown')) { // if shown => hide
		hideSidebar();
	} else { // if hidden => show
		showSidebar();
	}
}
function showSidebar() {
	$('#global_sidebar_block').animate({"margin-right": '0'});
	$('#global_sidebar_block').addClass('sidebar_shown');
	$('.sidebar_open_btn').addClass('sidebar_close_btn');
	$('.sidebar_close_btn').removeClass('sidebar_open_btn');
}
function hideSidebar() {
	if (!is_mobile_browser()) {
		$('#global_sidebar_block').animate({"margin-right": '-35%'});
	} else {
		$('#global_sidebar_block').animate({"margin-right": '-100%'}); // TODO: change for mobile
	}
	$('.sidebar_close_btn').addClass('sidebar_open_btn');
	$('.sidebar_open_btn').removeClass('sidebar_close_btn');
	$('#global_sidebar_block').removeClass('sidebar_shown');
}

export function toggleSettings() {
	$('.settings_slider').toggle('slow', function() {
		if ($('.settings_slider').is(':visible')) {
			$('.leaflet-control-layers').addClass('control_on');
			$('.settings_slider').show('');
		} else {
			$('.leaflet-control-layers').removeClass('control_on');
			$('.settings_slider').hide('');
		}
	});
}

export function toggleComparingWindow() {
	$('.compare_slider').toggle('slow', function() {
		if ($('.compare_slider').is(':visible')) {
			$('.leaflet-compare').addClass('control_on');
			$('.compare_slider').show('');
		} else {
			$('.leaflet-compare').removeClass('control_on');
			$('.compare_slider').hide('');
		}
	});
}