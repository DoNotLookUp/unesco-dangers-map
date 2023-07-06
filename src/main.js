import {UnescoMap} from './map/unescoMap.js';
import {langCheck} from './utils/lang.js';

console.log(`Expect poor coding`);

// create the map itself
let map = new UnescoMap();

//lang check
langCheck(function(lang) {
	map.setLanguage(lang);
});

// togglable switch
$('.lcs_check').lc_switch();

// tooltips
$('[data-toggle="tooltip"]').tooltip();