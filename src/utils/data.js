//=========//
// Backend //
//=========//
export const apiURL = 'https://unesco-backend-pprb.onrender.com';
export const wmsProxy = `${apiURL}/wmsproxy`;


//==============//
// WMS defaults //
//==============//
export const true_color_id = '1_TRUE_COLOR';
export const false_color_id = 'FALSE-COLOR-2';
export const date_range_komi = "2019-06-15";
export const date_range_before = "2019-06-15";
export const date_range_before_baikal = "2019-07-31";
export const date_range_after = "";
export const cloud_coverage = 20;


//=========//
// styling //
//=========//
export const borders_style = {
	'color':'#3488fc',
	'weight':1,
	'opacity':0.5,
	'fillColor':'#3488fc',
	'fillOpacity':0.05
}
export const territories_style = {
	'color':'#000',
	'weight':1,
	'opacity':0.65,
	'fillColor':'#000',
	'fillOpacity':0.05
}
export const danger_style = {
	'color':'#f44336',
	'weight':2,
	'opacity':0.65,
	'fillColor':'#f44336',
	'fillOpacity':0.3
}
export const danger_unknown_style = {
	'color':'#f44336',
	'weight':2,
	'opacity':0.65,
	'dashArray': 3
}
export const wildlife_style = {
	'color':'#f44336',
	'weight':2,
	'opacity':0.65,
	'dashArray': 3
}