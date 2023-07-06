import {ui_lang} from '../utils/lang.js';
import {is_mobile_browser} from '../utils/tech.js';

export class Sidebar {
	constructor(languageParam) {
		this.lang = languageParam;
	}
	setElements(p) {
		if (window.glide) window.glide.destroy(); // destroy old gallery if exists

		let body = document.getElementsByClassName('glide__slides')[0];
			body.innerHTML = '';
		
		let danger_count = p.dangers.length;
		for (let i in p.dangers) {
			let d = p.dangers[i];

			let slide = document.createElement('li');
				slide.setAttribute('class', 'glide__slide');
				slide.setAttribute('id', `glide_slide_danger_${d.danger_id}`);
			
			let danger_header = document.createElement('div');
				danger_header.setAttribute('class', 'danger_title');
				danger_header.innerHTML = d[`danger_header_${this.lang}`];

			let danger_img = document.createElement('img');
				danger_img.setAttribute('class', 'sl_img');
				danger_img.setAttribute('src', `images/dangers/${d.danger_img}`);

			let danger_img_credit = document.createElement('div');
				danger_img_credit.setAttribute('class', 'sidebar_image_credit');
				danger_img_credit.innerHTML = `${ui_lang[this.lang].img_credit} ${d.danger_img_credit}`;

			let danger_img_block = document.createElement('div');
				danger_img_block.setAttribute('class', 'sidebar_image');
				danger_img_block.appendChild(danger_img);
				if (d.danger_img_credit !== '') danger_img_block.appendChild(danger_img_credit);

			let danger_body = document.createElement('div');
				danger_body.setAttribute('class', 'danger_text');
				danger_body.innerHTML = d[`danger_html_${this.lang}`];
			
			slide.appendChild(danger_header);
			slide.appendChild(danger_img_block);
			slide.appendChild(danger_body);

			//if (this.lang == 'ru') slide.appendChild(danger_donation);

			body.appendChild(slide);
		}

		// init the slider
		let touch_toggle = 0; // swipe disabled
		if (is_mobile_browser()) { touch_toggle = 45} // default touchAngle value => swipe enabled
		window.glide = new Glide('.glide', {
			type: 'carousel',
			perView: 1,
			focusAt: 'center',
			touchAngle: touch_toggle
		})
		// please don't look at this, I am at a loss and not sure why gallery glitches
		setTimeout(() => {
			window.glide.mount();
		}, 500);

		if (danger_count > 1) {
			$('.glide__arrows').show();
		} else { $('.glide__arrows').hide() }
	}
	goTo(index) {
		let i = index-1;
		try { window.glide.go(`=${i}`); } catch(e) {} // in case glideJS was not initialized
	}
}