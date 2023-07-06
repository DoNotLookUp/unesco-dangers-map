import {wmsProxy} from '../utils/data.js';

export class compareSlider {
	constructor(map, layer_type) {
		this.map = map;
		this.layer_type = layer_type;
	}
	setParams(timeRangeBefore, timeRangeAfter, cloudCoverage) {
		this.before = timeRangeBefore;
		this.after = timeRangeAfter;
		this.cloud = cloudCoverage;
	}
	showSlider() {
		// https://www.sentinel-hub.com/develop/api/ogc/standard-parameters/wms/
		// https://www.sentinel-hub.com/develop/api/ogc/custom-parameters/
		
		this.layer_before = L.tileLayer.wms(wmsProxy, {
			layers: this.layer_type,
			TIME: this.before,
			WARNINGS: 'YES', // in-image warnings, like "No data available for the specified area"
			//MAXCC: this.cloud, // the maximum allowable cloud coverage in percent
			format: 'image/png',
			attribution: '&copy; <a href="https://sentinel-hub.com/">Sentinel-Hub</a> &copy; <a href="https://www.copernicus.eu/en">Copernicus</a>'
		});
		this.layer_after = L.tileLayer.wms(wmsProxy, {
			layers: this.layer_type,
			TIME: this.after,
			WARNINGS: 'YES',
			//MAXCC: this.cloud,
			format: 'image/png',
			attribution: '&copy; <a href="https://sentinel-hub.com/">Sentinel-Hub</a> &copy; <a href="https://www.copernicus.eu/en">Copernicus</a>'
		});

		this.layer_before.addTo(this.map);
		this.layer_after.addTo(this.map);
		
		this.side_by_side = L.control.sideBySide(this.layer_before, this.layer_after)
		this.side_by_side.addTo(this.map);
	}
	removeSlider() {
		this.map.removeControl(this.side_by_side);
		this.map.removeLayer(this.layer_before);
		this.map.removeLayer(this.layer_after);
	}
}
