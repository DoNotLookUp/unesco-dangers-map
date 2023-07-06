import {
	date_range_komi,
	date_range_before,
	date_range_before_baikal,
	date_range_after,
	cloud_coverage
} from './data.js';


//====================//
// main objects' data //
//====================//
export const geojson_data = [
	{
		"type": "Feature", "properties": {
			"id": 0,
			"name_ru": "Девственные леса Коми",
			"name_en": "Virgin Komi Forests",
			"code": "komi", // borders and territories will use this option
			"date_range_before": date_range_komi,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'komi001.jpg',
				'danger_img_credit': '',
				'danger_name': 'exclusion',
				'danger_header_ru': 'Добыча золота в национальном парке «Югыд ва»',
				'danger_html_ru': ``,
				'danger_header_en': "Gold mining in the Yugyd Va National Park",
				'danger_html_en': ``
			}],
			"body": 'body temp text'
		}, "geometry": {"type": "Point","coordinates": [0, 0]}
	},
	{
		"type": "Feature", "properties": {
			"id": 1,
			"name_ru": "Вулканы Камчатки",
			"name_en": "Volcanoes of Kamchatka",
			"code": "kam",
			"date_range_before": date_range_before,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'kam001.jpg',
				'danger_img_credit': '',
				'danger_name': 'part',
				'danger_header_ru': 'Курорт в природном парке «Южно-Камчатский»',
				'danger_html_ru': ``,
				'danger_header_en': "The Resort in the Southern Kamchatka Regional Nature Park",
				'danger_html_en': ``
			}, {
				'danger_id': 2,
				'danger_img': 'kam002.jpg',
				'danger_img_credit': '',
				'danger_name': 'river',
				'danger_header_ru': 'Рыбоходный канал в Кроноцком заповеднике',
				'danger_html_ru': ``,
				
				'danger_header_en': "Fish passage in the Kronotsky Nature Biosphere Reserve",
				'danger_html_en': ``
			}],
			"body": 'body temp text'
		}, "geometry": {"type": "Point","coordinates": [0,0]}
	},
	{
		"type": "Feature", "properties": {
			"id": 2,
			"name_ru": "Золотые горы Алтая",
			"name_en": "Golden mountains of Altai",
			"code": "altai",
			"date_range_before": date_range_before,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'altai001.jpg',
				'danger_img_credit': '',
				'danger_name': 'rekrzona',
				'danger_header_ru': 'Туристические комплексы у Телецкого озера',
				'danger_html_ru': ``,
				
				'danger_header_en': "Tourist Complexes in the Buffer Zone of Teletskoye Lake",
				'danger_html_en': ``
			}, {
				'danger_id': 2,
				'danger_img': 'altai002.jpg',
				'danger_img_credit': '',
				'danger_name': 'mestorojd',
				'danger_header_ru': 'Добыча золота в буферной зоне Телецкого озера',
				'danger_html_ru': ``,
				
				'danger_header_en': "Gold Mining in the Buffer Zone of Teletskoye Lake",
				'danger_html_en': ``
			}, {
				'danger_id': 3,
				'danger_img': 'altai003.jpg',
				'danger_img_credit': '',
				'danger_name': 'uchastki',
				'danger_header_ru': 'Дома в кластере «Катунский заповедник и буферная зона горы Белуха»',
				'danger_html_ru': ``,
				
				'danger_header_en': `Tourist Facilities in the «Katunsky State Nature Reserve and Buffer Zone of Belukha Mountain» cluster`,
				'danger_html_en': ``
			}, {
				'danger_id': 4,
				'danger_img': 'altai003.jpg',
				'danger_img_credit': 'Shutterstock',
				'danger_name': 'roadTeletskoye',
				'danger_header_ru': 'Планируемая дорога через буферную зону Телецкого озера',
				'danger_html_ru': ``,
				
				'danger_header_en': `Proposed road through the Buffer zone of Teletskoye Lake`,
				'danger_html_en': ``
			}],
			"body": 'body temp text'
		}, "geometry": {"type": "Point","coordinates": [0,0]}
	},
	{
		"type": "Feature", "properties": {
			"id": 3,
			"name_ru": "Западный Кавказ",
			"name_en": "Western Caucasus",
			"code": "kavkaz",
			"date_range_before": date_range_before,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': 'Greenpeace / Ирина Пантелеева',
				'danger_name': 'roadPsheha',
				'danger_header_ru': 'Дорога к курорту «Лунная поляна»',
				'danger_html_ru': ``,
				
				'danger_header_en': "The road to the “Lunnaya Polyana” resort",
				'danger_html_en': ``
			},
			{
				'danger_id': 2,
				'danger_img': 'kavkaz002.jpg',
				'danger_img_credit': 'Greenpeace',
				'danger_name': 'expansion',
				'danger_header_ru': 'Дороги к горнолыжным курортам',
				'danger_html_ru': ``,
				
				'danger_header_en': "Roads to ski resorts",
				'danger_html_en': ``
			},
			{
				'danger_id': 3,
				'danger_img': 'kavkaz003.jpg',
				'danger_img_credit': '',
				'danger_name': 'roadSochi',
				'danger_unknown': 1,
				'danger_header_ru': 'Дорога «Кисловодск-Сочи» через Кавказский заповедник',
				'danger_html_ru': ``,
				
				'danger_header_en': `Kislovodsk-Sochi Road through the Caucasus Nature Biosphere Reserve`,
				'danger_html_en': ``
			},
			{
				'danger_id': 4,
				'danger_img': 'kavkaz004.jpg',
				'danger_img_credit': '',
				'danger_name': 'lagonaki',
				'danger_header_ru': 'Горный курорт «Лагонаки»',
				'danger_html_ru': ``,
				
				'danger_header_en': `Lagonaki Mountain Resort`,
				'danger_html_en': ``
			},
			{
				'danger_id': 5,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'thach',
				'danger_header_ru': '-',
				'danger_html_ru': ``,
				'danger_header_en': '-',
				'danger_html_en': ``
			},
			{
				'danger_id': 6,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'excluded',
				'danger_header_ru': '-',
				'danger_html_ru': ``,
				'danger_header_en': '-',
				'danger_html_en': ``
			},
			{
				'danger_id': 7,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'grushevyi',
				'danger_header_ru': 'Зона освоения - хребет Грушевый',
				'danger_html_ru': ``,
				'danger_header_en': '-',
				'danger_html_en': ``
			},
			{
				'danger_id': 8,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'dolinaVasta',
				'danger_header_ru': 'Зона освоения - Долина Васта',
				'danger_html_ru': ``,
				'danger_header_en': '-',
				'danger_html_en': ``
			},
			{
				'danger_id': 9,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'aishkho',
				'danger_header_ru': 'Зона освоения - хребет Аишхо',
				'danger_html_ru': ``,
				'danger_header_en': '-',
				'danger_html_en': ``
			}
			],
			"body": 'body temp text'
		}, "geometry": {"type": "Point","coordinates": [0,0]}
	}, {
		"type": "Feature", "properties": {
			"id": 4,
			"name_ru": "Природный комплекс заповедника «Остров Врангеля»",
			"name_en": "Natural System of Wrangel Island Reserve",
			"code": "vrangel",
			"date_range_before": date_range_before,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'vrangel001.jpg',
				'danger_img_credit': '',
				'danger_name': 'ushak',
				'danger_header_ru': 'Военная база на острове Врангеля',
				'danger_html_ru': ``,
				'danger_header_en': "Military Base on Wrangel Island",
				'danger_html_en': ``
			}],
			"body": 'body temp text'
		}, "geometry": {"type": "Point","coordinates": [0, 0]}
	}, {
		"type": "Feature", "properties": {
			"id": 5,
			"name_ru": "Ландшафты Даурии",
			"name_en": "Landscapes of Dauria",
			"code": "dauria",
			"date_range_before": date_range_before,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'dauria001.jpg',
				'danger_img_credit': '',
				'danger_name': 'dam',
				'danger_header_ru': 'Плотина на реке Ульдза',
				'danger_html_ru': ``,
				'danger_header_en': `Dam across Ulz River`,
				'danger_html_en': ``
			}],
			"body": 'body temp text'
		}, "geometry": {"type": "Point","coordinates": [0, 0]}
	}, {
		"type": "Feature", "properties": {
			"id": 6,
			"name_ru": "Озеро Байкал",
			"name_en": "Lake Baikal",
			"code": "baikal",
			"date_range_before": date_range_before_baikal,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'baikal001.jpg',
				'danger_img_credit': '',
				'danger_name': 'gas2',
				'danger_header_ru': `Угроза прокладки газопровода`,
				'danger_html_ru': ``,
				'danger_header_en': `Threat of Gas Pipeline Construction`,
				'danger_html_en': ``
			}, {
				'danger_id': 2,
				'danger_img': 'baikal002.jpg',
				'danger_img_credit': '',
				'danger_name': 'harbormamai',
				'danger_header_ru': `Существующие и планируемые участки особых экономических зон`,
				'danger_html_ru': ``,
				'danger_header_en': `Existing and Planned Plots of Special Economic Zones`,
				'danger_html_en': ``
			}, {
				'danger_id': 3,
				'danger_img': 'baikal003.jpg',
				'danger_img_credit': '',
				'danger_name': 'cbk',
				'danger_header_ru': `Байкальский ЦБК и реабилитация окрестностей Байкальска`,
				'danger_html_ru': ``,
				'danger_header_en': `Baikalsk Pulp and Paper Mill (BPPM) and the Rehabilitation of Baikalsk`,
				'danger_html_en': ``
			}, {
				'danger_id': 4,
				'danger_img': 'baikal004.jpg',
				'danger_img_credit': '',
				'danger_name': 'hppall',
				'danger_header_ru': `Воздействие гидротехнических сооружений на Байкал`,
				'danger_html_ru': ``,
				'danger_header_en': `The Impact of Water Infrastructure on Lake Baikal`,
				'danger_html_en': ``
			}, 
		],
			"body": 'body temp text'
		}, "geometry": {"type": "Point","coordinates": [0, 0]}
	},

	{
		"type": "Feature", "properties": {
			"id": 0,
			"name_ru": "Природный парк «Волго-Ахтубинская пойма»",
			"name_en": "Nature Park \"Volga-Akhtuba Floodplain\"",
			"code": "volga", // borders and territories will use this option
			"date_range_before": date_range_before,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'volga001.jpg',
				'danger_img_credit': 'ПоймаЖиви',
				'danger_name': 'road',
				'danger_header_ru': 'Строительство дороги через «Волго-Ахтубинскую пойму»',
				'danger_html_ru': ``,
				'danger_header_en': "Temporary unavailable, please use Russian version",
				'danger_html_en': ``
			}],
			"body": 'body temp text'
		}, "geometry": {"type": "Point","coordinates": [0, 0]}
	}
];


//===================//
// translation logic //
//===================//
export let lang = 'ru';
export function langCheck(cb) {
	let url = new URL(window.location.href);
	let param = url.searchParams.get('lang');
	if (param === 'en') lang = 'en';
	translateWebPage();
	cb(lang);
}

export const ui_lang = {
	"ru": {
		"website_header": "Угрозы объектам ЮНЕСКО",
		"intro_komi": geojson_data[0].properties.name_ru,
		"intro_kam": geojson_data[1].properties.name_ru,
		"intro_altai": geojson_data[2].properties.name_ru,
		"intro_kavkaz": geojson_data[3].properties.name_ru,
		"intro_vrangel": geojson_data[4].properties.name_ru,
		"intro_dauria": geojson_data[5].properties.name_ru,
		"intro_baikal": geojson_data[6].properties.name_ru,
		"intro_volga": geojson_data[7].properties.name_ru,
		"btn_on": "ВКЛ",
		"btn_off": "ВЫКЛ",
		"set_layers": "Данные",
		"set_borders": "Граница объекта",
		"set_ter": "Ценные территории",
		"set_wildlife": "Краснокнижные виды",
		"set_danger": "Угрозы",
		"set_base": "Базовая карта",
		"set_base_osm": "Схема",
		"set_base_sat": "Спутник",
		"set_comp_header": "Сравнение",
		"set_comp_show": "Показать слайдер",
		"set_comp_date": "Показать даты на снимках",
		"set_comp_type": "Тип снимков",
		"set_comp_precise_date": "Точные даты снимков",
		"set_comp_date_before": "Снимки слева",
		"set_comp_date_after": "Снимки справа",
		"img_credit": "Фото © ",
		"set_explanation_wildlife": "По данным ГБУ \"Природный парк Волго-Ахтубинская пойма\". Маркерами с красной границей показаны разрушенные места обитания",
		"set_explanation_osm": "OpenStreetMap",
		"set_explanation_sat": "Высокодетальные космические снимки ESRI",
		"set_explanation_sh2_tc": "Мозаика из последних снимков с облачностью <20%",
		"set_explanation_sh2_fc": "Мозаика из последних снимков с облачностью <20%",
		"set_explanation_precise_date": "Если функция включена, то на карте будут показаны только снимки, которые были сняты в указанную дату (даты со снимками, которые покрывают всю область просмотра помечены в календаре зелёным цветом); Если функция выключена, то пробелы на карте, которые не покрываются снимками за указанные даты, будут замещены более ранними снимками (ближайшими к выбранной дате)"
	},
	"en": {
		"website_header": "Threats to UNESCO sites",
		"intro_komi": geojson_data[0].properties.name_en,
		"intro_kam": geojson_data[1].properties.name_en,
		"intro_altai": geojson_data[2].properties.name_en,
		"intro_kavkaz": geojson_data[3].properties.name_en,
		"intro_vrangel": geojson_data[4].properties.name_en,
		"intro_dauria": geojson_data[5].properties.name_en,
		"intro_baikal": geojson_data[6].properties.name_en,
		"intro_volga": geojson_data[7].properties.name_en,
		"btn_on": "ON",
		"btn_off": "OFF",
		"set_layers": "Layers",
		"set_borders": "Borders",
		"set_ter": "Valuable territories",
		"set_wildlife": "Red Book species",
		"set_danger": "Threats",
		"set_base": "Basemaps",
		"set_base_osm": "Scheme",
		"set_base_sat": "Satellite",
		"set_comp_header": "Comparison",
		"set_comp_show": "Show slider",
		"set_comp_date": "Show dates on imagery",
		"set_comp_type": "Imagery type",
		"set_comp_precise_date": "Precise imagery dates",
		"set_comp_date_before": "Imagery - left",
		"set_comp_date_after": "Imagery - right",
		"img_credit": "Photo © ",
		"set_explanation_wildlife": "According to the data provided by the \"Natural Park Volgo-Akhtubinskaya Poima\". Destroyed habitats are shown by markers with red border",
		"set_explanation_osm": "OpenStreetMap",
		"set_explanation_sat": "Highly detailed ESRI satellite imagery",
		"set_explanation_sh2_tc": "Mosaic from the latest images with cloudiness <20%",
		"set_explanation_sh2_fc": "Mosaic from the latest images with cloudiness <20%",
		"set_explanation_precise_date": "If the function is enabled, only the satellite images that were taken on the specified date will be shown on the map (dates with images that cover the entire viewing area are marked in green in the calendar); If the function is disabled, the gaps in the satellite images will be replaced by the images, closest to the selected date"
	}
}

/* modal about window content */
const modal_about_lang = {
	"ru": ``,
	"en": ``,
};

function translateWebPage() {
	let ui = ui_lang[lang];

	// Modal info
	$('#modal-content').html(modal_about_lang[lang]);

	if (lang == 'ru') $('.btn-support-annoying').show();

	// Intro
	$('title').html(ui.website_header);
	$('#tr_header').html(ui.website_header);
	$('#komi_intro_title').html(ui.intro_komi);
	$('#kam_intro_title').html(ui.intro_kam);
	$('#altai_intro_title').html(ui.intro_altai);
	$('#kavkaz_intro_title').html(ui.intro_kavkaz);
	$('#vrangel_intro_title').html(ui.intro_vrangel);
	$('#dauria_intro_title').html(ui.intro_dauria);
	$('#baikal_intro_title').html(ui.intro_baikal);
	$('#volga_intro_title').html(ui.intro_volga);

	// Settings (layers/basemaps)
	$('.lcs_label_on').html(ui.btn_on);
	$('.lcs_label_off').html(ui.btn_off);

	$('#settings_layers').html(ui.set_layers);
	$('#settings_borders').html(ui.set_borders);
	$('#settings_territories').html(ui.set_ter);
	$('#settings_wildlife').contents().first()[0].textContent = ui.set_wildlife;
	$('#settings_dangers').html(ui.set_danger);
	$('#settings_basemaps').html(ui.set_base);
	$('#settings_basemap_osm').contents().first()[0].textContent = ui.set_base_osm;
	$('#settings_basemap_sat').contents().first()[0].textContent = ui.set_base_sat;

	// Comparison
	$('#settings_comparison').html(ui.set_comp_header);
	$('#settings_comparison_show').html(ui.set_comp_show);
	$('#settings_comparison_date').html(ui.set_comp_date);
	$('#settings_comparison_type').html(ui.set_comp_type);
	$('#settings_comparison_precise_date').contents().first()[0].textContent = ui.set_comp_precise_date;
	$('#settings_comparison_date_before').html(ui.set_comp_date_before);
	$('#settings_comparison_date_after').html(ui.set_comp_date_after);

	// Question marks
	$('#settings_wildlife > .info_question_mark').attr('data-original-title', ui.set_explanation_wildlife);
	$('#settings_basemap_osm > .info_question_mark').attr('data-original-title', ui.set_explanation_osm);
	$('#settings_basemap_sat > .info_question_mark').attr('data-original-title', ui.set_explanation_sat);
	$('#settings_basemap_sh2_tc > .info_question_mark').attr('data-original-title', ui.set_explanation_sh2_tc);
	$('#settings_basemap_sh2_fc > .info_question_mark').attr('data-original-title', ui.set_explanation_sh2_fc);
	$('#settings_comparison_precise_date > .info_question_mark').attr('data-original-title', ui.set_explanation_precise_date);

}