import {compareSlider} from './compareSlider.js';
import {loadLocalData, defaultToggles, toggleSidebar, toggleSettings, toggleComparingWindow} from './controls.js?v=0.86';
import {true_color_id, false_color_id, territories_style, apiURL, wmsProxy} from '../utils/data.js';
import {is_mobile_browser} from '../utils/tech.js';

let show_date = true;
let precise_search = false;

export class UnescoMap {
	constructor() {
		this.map = L.map('map', {
			zoomDelta: 0.5,
			zoomSnap: 0
		}).setView([55, 35], 3);

		this.sid = undefined;
		this.shToken = undefined;
		
		// panes
		this.map.createPane('labels');
		this.map.createPane('borders_all');
		this.map.createPane('territories');
		this.map.createPane('danger');
		this.map.createPane('markers');
		this.map.createPane('wildlife');
	
		this.map.getPane('labels').style.zIndex = 200;
		this.map.getPane('labels').style.pointerEvents = 'none';
		this.map.getPane('territories').style.display = 'none';
		this.map.getPane('wildlife').style.display = 'none';
		
		// additional basemaps
		this.osm_basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		});
		
		this.esri_sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri'
		});


		if (!this.sid) {
			fetch(`${apiURL}/`)
			.then(r => r.text())
			.then(data => {
				this.sid = data;
				
				this.s2_latest_mosaic = L.tileLayer.wms(`${wmsProxy}?sid=${this.sid}`, {
					layers: true_color_id,
					format: "image/png",
					transparent: 1,
					attribution: '&copy; <a href="https://sentinel-hub.com/">Sentinel-Hub</a> &copy; <a href="https://www.copernicus.eu/en">Copernicus</a>'
				});
		
				this.s2_latest_mosaic_false = L.tileLayer.wms(`${wmsProxy}?sid=${this.sid}`, {
					layers: false_color_id,
					WARNINGS: 'YES', // in-image warnings, like "No data available for the specified area"
					format: "image/png",
					transparent: 1,
					attribution: '&copy; <a href="https://sentinel-hub.com/">Sentinel-Hub</a> &copy; <a href="https://www.copernicus.eu/en">Copernicus</a>'
				});

				this.initControlElements();
				this.initBtnControls();
			});
		}

		// default basemaps
		addDefaultBasemaps(this.map);
		
		// Update bounding box on move
		this.bbox = "0,0,0,0";

		const onMoveEnd = () => {
			let bounds = this.map.getBounds();
			let bbox = ([bounds._northEast.lng, bounds._southWest.lat, bounds._southWest.lng, bounds._northEast.lat]).join(',');
			//let bbox = ([bounds._southWest.lng, bounds._southWest.lat, bounds._northEast.lng, bounds._northEast.lat]).join(',');
			//this.setBoudingBox(bbox);
			this.bbox = bbox;
			let currentDate = getCurrentDate();
			let currentYear = currentDate[0];
			let currentMonth = currentDate[1];
			this.getGeoJsonData(currentYear, currentMonth, this.bbox, (data) => {
				if (data.features) {
					this.recolorCalendar('.comparison_before', data.features);
					this.recolorCalendar('.comparison_after', data.features);
				}
			});
		}

		this.map.on('dragend zoomend', () => {
			onMoveEnd();
		});

		this.map.on('movestart', () => {
			this.calendarCompareBefore.hide();
			this.calendarCompareAfter.hide();
		});



		// Initialize calendars/datepickers
		this.initCalendars();

	}

	setLanguage(lang) {
		this.lang = lang;
	}
	
	initControlElements() {
		// info button
		let info_button = L.Control.extend({
			options: {
				position: 'topleft' 
			},
			onAdd: function () {
				let button = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-custom-button leaflet-info');
					button.onclick = function() {
						let modal = document.getElementById('modal');
						let close = document.getElementById('modal-close');
						
						modal.style.display = 'block';
						close.onclick = function() {
							modal.style.display = 'none';
						}
						window.onclick = function(event) {
							if (event.target == modal) {
								modal.style.display = 'none';
							}
						}
					}
				return button;
			}
		});

		// basemap toggles
		let layers_control = L.Control.extend({
			options: {
				position: 'topleft' 
			},
			onAdd: function () {
				var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-custom-button leaflet-control-layers ' + (!is_mobile_browser() ? 'control_on' : ''));
					container.onclick = function() {
						toggleSettings();
					}
				return container;
			}
		});

		// panel with comparison slider
		let compare_panel = L.Control.extend({
			options: {
				position: 'topleft' 
			},
			onAdd: function () {
				var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-custom-button leaflet-compare ' + (!is_mobile_browser() ? 'control_on' : ''));
					container.onclick = function() {
						toggleComparingWindow();
					}
				return container;
			}
		});

		// button controls
		this.map.addControl(new info_button);
		this.map.addControl(new layers_control);
		this.map.addControl(new compare_panel);
		
		// ruler
		L.control.ruler({
			position: 'topleft',
			lengthUnit: {
				display: 'km',
				label: '',
				decimal: 2
			}
		}).addTo(this.map);
	}

	initBtnControls() {
		let map = this.map;
		let osm_basemap = this.osm_basemap;
		let esri_sat = this.esri_sat;
		let s2_latest_mosaic = this.s2_latest_mosaic;
		let s2_latest_mosaic_false = this.s2_latest_mosaic_false;

		// on toggle change (on/off)
		$(document).on('lcs-statuschange', '.lcs_check', function() {
			var status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
			var num = $(this).val();
			
			switch(parseInt(num)) {
				case 1: // borders
					if (status == 'checked') {
						map.getPane('borders_all').style.display = 'block';
					} else {
						map.getPane('borders_all').style.display = 'none';
					}
					break;
				case 2: // territories
					if (status == 'checked') {
						map.getPane('territories').style.display = 'block';
					} else {
						map.getPane('territories').style.display = 'none';
					}
					break;
				case 3: // dangers
					if (status == 'checked') {
						map.getPane('danger').style.display = 'block'; // polygons
						map.getPane('markers').style.display = 'block'; // markers
					} else {
						map.getPane('danger').style.display = 'none';
						map.getPane('markers').style.display = 'none';
					}
					break;
				case 4: // osm
					if (status == 'checked') {
						map.addLayer(osm_basemap);
					} else {
						map.removeLayer(osm_basemap);
					}
					break;
				case 5: // esri high-rez
					if (status == 'checked') {
						map.addLayer(esri_sat);
					} else {
						map.removeLayer(esri_sat);
					}
					break;
				case 6: // sentinel 2 latest mosaic (20% cloudy)
					if (status == 'checked') {
						map.addLayer(s2_latest_mosaic);
					} else {
						map.removeLayer(s2_latest_mosaic);
					}
					break;
				case 7: // sentinel 2 latest mosaic false color (20% cloudy)
					console.log('only works on big zooms (>= 9), investigate further');
					if (status == 'checked') {
						map.addLayer(s2_latest_mosaic_false);
					} else {
						map.removeLayer(s2_latest_mosaic_false);
					}
					break;
				case 8: // Red Book species
					if (status == 'checked') {
						map.getPane('wildlife').style.display = 'block';
					} else {
						map.getPane('wildlife').style.display = 'none';
					}
					break;
				case 10: // turn on/off compare slider
					if (status == 'checked') {
						$('.btn_img').removeClass('settings_disabled');
						$('.show_dates').removeClass('settings_disabled');
						$('.show_precise_dates').removeClass('settings_disabled');
						$('.comparison_before').removeClass('settings_disabled');
						$('.comparison_after').removeClass('settings_disabled');
						$('.btn-tc').click();

						// Disable normal basemaps
						$('.settings_all_basemaps .settings_el').addClass('settings_disabled');
						for (let i = 4; i <= 7; i++) $(`#check-${i}`).lcs_off();

						// And remove all the panes
						map.removeLayer(osm_basemap);
						map.removeLayer(esri_sat);
						map.removeLayer(s2_latest_mosaic);
						map.removeLayer(s2_latest_mosaic_false);
					} else {
						try { window.slider.removeSlider(); } catch {}
						$('.btn_img').addClass('settings_disabled');
						$('.show_dates').addClass('settings_disabled');
						$('.show_precise_dates').addClass('settings_disabled');
						$('.comparison_before').addClass('settings_disabled');
						$('.comparison_after').addClass('settings_disabled');
						$('.btn-tc').removeClass('btn-success').addClass('btn-outline-success');
						$('.btn-fc').removeClass('btn-success').addClass('btn-outline-success');

						// enable normal basemaps
						$('.settings_all_basemaps .settings_el').removeClass('settings_disabled');
					}
					break;
				case 11: // turn dates on/off
					if (status == 'checked') {
						show_date = true;
					} else {
						show_date = false;
					}
					$('.btn-success').click();
					break;
				case 12: // turn precise dates on or off
					if (status == 'checked') {
						precise_search = true;
					} else {
						precise_search = false;
					}
					$('.btn-success').click();
					break;
			}
		});


		/* intro categories - button click */
		let languageParam = this.lang;
		let that = this;
		$('.gallery_el').on('click', function() {
			map.eachLayer(function (layer) { // clear all active layers
				map.removeLayer(layer);
			});

			$('.spinner_wrapper').show(); // show loader

			addDefaultBasemaps(map); // add carto basemaps
			defaultToggles(); // set all toggles to default values

			let id = $(this).data().id; // get place id
			loadLocalData(map, id, languageParam); // show local geojson files
			that.updateCalendars(); // set default dates taken from the local geojson files
		});

		$('.sidebar_toggle').on('click', function(){
			toggleSidebar();
		});
		$('.sidebar_close_btn_mobile').on('click', function(){
			toggleSidebar();
		});

		$('.show_intro').on('click', function() {
			$(this).removeClass('show_intro_logo');
			$('.intro').slideDown('slow');
		});

		$('#close_settings_slider').on('click', function(){
			toggleSettings();
		});

		$('#close_compare_slider').on('click', function(){
			toggleComparingWindow();
		});

		$('.btn-tc').on('click', function(){
			// turn off false color | make TC active
			let input_date_range_before = $('#compare-before').val() + '/' + $('#compare-before').val();
			let input_date_range_after = $('#compare-after').val() + '/' + $('#compare-after').val();
			if (precise_search == false) {
				input_date_range_before = $('#compare-before').val();
				input_date_range_after = $('#compare-after').val();
			}
			compareImagery(map, true_color_id + (show_date ? ',DATE' : ''), input_date_range_before, input_date_range_after, window.props.cloud_coverage);
			$('.btn-tc').removeClass('btn-outline-success').addClass('btn-success');
			$('.btn-fc').removeClass('btn-success').addClass('btn-outline-success');
		});
		$('.btn-fc').on('click', function(){
			// turn off true color | make FC active
			let input_date_range_before = $('#compare-before').val() + '/' + $('#compare-before').val();
			let input_date_range_after = $('#compare-after').val() + '/' + $('#compare-after').val();
			if (precise_search == false) {
				input_date_range_before = $('#compare-before').val();
				input_date_range_after = $('#compare-after').val();
			}
			compareImagery(map, false_color_id + (show_date ? ',DATE' : ''), input_date_range_before, input_date_range_after, window.props.cloud_coverage);
			$('.btn-fc').removeClass('btn-outline-success').addClass('btn-success');
			$('.btn-tc').removeClass('btn-success').addClass('btn-outline-success');
		});
	}

	async getGeoJsonData(year, month, bbox, callback) {
		if (!this.shToken) {
			let res = await fetch(`${apiURL}/gettoken`)
			let out = await res.json();
			if (out.success) {
				this.shToken = true;
			}
		}

		let bodyData = {
			year, month, bbox, 
			sid: this.sid,
		};
		let datesRes = await fetch(`${apiURL}/getdates`, {
			method: 'POST',
			body: JSON.stringify(bodyData),
			headers: { "Content-Type": "application/json" }
		})
		let data = await datesRes.json();
		callback(data);
	}

	initCalendars() {
		this.calendarCompareBefore = datepicker('#compare-before', {
			onShow: instance => {
				// Change position
				if (!is_mobile_browser()) {
					let qs_datepicker = $('#'+instance.el.id).next('.qs-datepicker-container');
					let pos_top = qs_datepicker.position().top + (qs_datepicker.height())/2;
					let pos_left = qs_datepicker.position().left + $('#'+instance.el.id).outerWidth();
					qs_datepicker.css('top', pos_top);
					qs_datepicker.css('left', pos_left);
				}
				// Recolor calendar
				this.getGeoJsonData(instance.currentYear, instance.currentMonth+1, this.bbox, (data) => {
					this.recolorCalendar('.comparison_before', data.features);
				});
			},
			onMonthChange: instance => {
				this.getGeoJsonData(instance.currentYear, instance.currentMonth+1, this.bbox, (data) => {
					this.recolorCalendar('.comparison_before', data.features);
				});
			},
			onSelect: instance => {
				if ($(".btn-tc").hasClass("btn-success")) {
					$('.btn-tc').click();
				}
				if ($(".btn-fc").hasClass("btn-success")) {
					$('.btn-fc').click();
				}
			},
			// Customizations
			formatter: (input, date, instance) => {
				const offset = date.getTimezoneOffset();
				const date_formatted = new Date(date.getTime() - (offset*60*1000));
				input.value = date_formatted.toISOString().split('T')[0];
			},
			position: (!is_mobile_browser() ? 'tl' : 'c'),
			startDay: 1, // Calendar week starts on a Monday.
			alwaysShow: false,
			showAllDates: true
		});

		this.calendarCompareAfter = datepicker('#compare-after', {
			onShow: instance => {
				// Change position
				if (!is_mobile_browser()) {
					let qs_datepicker = $('#'+instance.el.id).next('.qs-datepicker-container');
					let pos_top = qs_datepicker.position().top + (qs_datepicker.height())/2;
					let pos_left = qs_datepicker.position().left + $('#'+instance.el.id).outerWidth();
					qs_datepicker.css('top', pos_top);
					qs_datepicker.css('left', pos_left);
				}
				// Recolor calendar
				this.getGeoJsonData(instance.currentYear, instance.currentMonth+1, this.bbox, (data) => {
					this.recolorCalendar('.comparison_after', data.features);
				});
			},
			onMonthChange: instance => {
				this.getGeoJsonData(instance.currentYear, instance.currentMonth+1, this.bbox, (data) => {
					this.recolorCalendar('.comparison_after', data.features);
				});
			},
			onSelect: instance => {
				if ($(".btn-tc").hasClass("btn-success")) {
					$('.btn-tc').click();
				}
				if ($(".btn-fc").hasClass("btn-success")) {
					$('.btn-fc').click();
				}
			},
			// Customizations
			formatter: (input, date, instance) => {
				const offset = date.getTimezoneOffset();
				const date_formatted = new Date(date.getTime() - (offset*60*1000));
				input.value = date_formatted.toISOString().split('T')[0];
			},
			position: (!is_mobile_browser() ? 'tl' : 'c'),
			startDay: 1, // Calendar week starts on a Monday.
			alwaysShow: false,
			showAllDates: true
		});
	}

	// Add marks to the dates with the available satellite imagery
	recolorCalendar(id, dates) {
		document.querySelectorAll(`${id} .qs-datepicker-container .qs-num`).forEach((el) => {
			let calendarDay = parseInt(el.innerText);
			let daysArray = dates.map(elem => parseInt(elem.split('-')[2])); // dates -> this.availableDates
			if (daysArray.indexOf(calendarDay) !== -1) {
				el.classList.add('qs-event');
			} else {
				el.classList.remove('qs-event');
			}
		})
	}

	// Set default dates
	updateCalendars() {
		let date_before = window.props.date_range_before;
		let date_after = (window.props.date_range_after == "") ? getCurrentDate().join('-') : window.props.date_range_after;
		this.calendarCompareBefore.setDate(new Date(date_before), true);
		this.calendarCompareAfter.setDate(new Date(date_after), true);
	}

}

function addDefaultBasemaps(map) {
	L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd',
		maxZoom: 19
	}).addTo(map);

	L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
		subdomains: 'abcd',
		pane: 'labels',
		noWrap: true
	}).addTo(map);
}

function compareImagery(map, _type, time_before, time_after, cloud_coverage) {
	try { window.slider.removeSlider(); } catch {}
	
	window.slider = new compareSlider(map, _type, this.sid);
	window.slider.setParams(time_before, time_after, cloud_coverage);
	window.slider.showSlider();
}

function getCurrentDate() {
	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1;
	let yyyy = today.getFullYear();
	if(dd<10) dd='0'+dd;
	if(mm<10) mm='0'+mm;
	return [yyyy, mm, dd];
}