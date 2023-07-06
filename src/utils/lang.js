//===================//
// translation logic //
//===================//
export let lang = 'ru';
export function langCheck(cb) {
	let url = new URL(window.location.href);
	let param = url.searchParams.get('lang');
	if (param === 'en') lang = 'en';
	//translateWebPage();
	cb(lang);
}
