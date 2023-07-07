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
			"code": "komi",
			"date_range_before": date_range_komi,
			"date_range_after": date_range_after,
			"cloud_coverage": cloud_coverage,
			"dangers": [{
				'danger_id': 1,
				'danger_img': 'komi001.jpg',
				'danger_img_credit': '',
				'danger_name': 'exclusion',
				'danger_header_ru': 'Добыча золота в национальном парке «Югыд ва»',
				'danger_html_ru': `<p>Компания «Голд Минералс», сменив в 2020 году название на «Золото Инты», по-прежнему пытается добиться возможности добывать золото в национальном парке «Югыд ва», входящего в состав «Девственных лесов Коми».</p>
				<p>По их просьбе в 2019 году Минприроды инициировало подготовку документов по изменению границ парка. На изымаемых из парка 50 тысячах гектаров планировалась разработка золотого месторождения «Чудное», которая неизбежно привела бы к загрязнению бассейна реки Кожим и разрушению уникальных экосистем северной части парка.</p>
				<p>Вместо вырезаемых ценных территорий к нацпарку планировалось добавить земли, нарушенные пожарами и хозяйственной деятельностью человека: сплошными вырубками и геологической разведкой. Коми Научный центр РАН подтвердил, что эти территории не могут компенсировать утрату земель, отдаваемых «Золоту Инты» для освоения.</p>
				<p>В ответ на обращения, Администрация Президента в конце 2019 года подтвердила, что добыча золота на территории национального парка недопустима, однако лицензия на разработку месторождения «Чудное» не была отозвана.</p>
				<p>В июле 2020 года вице-премьер Юрий Трутнев поручил Минприроды России подготовить проект «О приведении в соответствие границ национального парка „Югыд ва“». А уже осенью Минприроды России вынесло на общественное обсуждение проект расширения «Югыд ва», в приложениях к которому участок, занятый месторождением «Чудное», оказался вырезан из национального парка. После возмущения тысяч россиян Минприроды обновило приложения и исправило эту «ошибку».</p>
				<p>Комитет всемирного наследия ЮНЕСКО неоднократно требовал от России прекратить любую промышленную деятельность в границах объекта всемирного наследия «Девственные леса Коми» и аннулировать лицензию «Голд Минералс» (перешла в наследство «Золоту Инты»). Вместо этого в 2021 году <a href="https://rfgf.ru/license/itemview.php?iid=2734044" target="_blank">лицензия на разведку и добычу полезных ископаемых на месторождении «Чудное» была переоформлена</a>. Невыполнение требований Комитета является нарушением обязательств России по Конвенции ЮНЕСКО.</p>
				`,
				
				"danger_header_en": "Gold mining in the Yugyd Va National Park",
				"danger_html_en": `<p>The Gold Minerals CJSC company, having changed its name to Inta Gold in 2020, is still trying to get the opportunity to mine gold in the Yugyd Va National Park.</p>
				<p>At their request, in 2019, the Ministry of Natural Resources initiated the preparation of justifications for changing the boundaries of the Park. It was planned to exclude 50 thousand hectares from the Yugyd Va National Park for the Chudnoe gold deposit development. This would inevitably lead to pollution of the Kozhim river basin and destruction of the unique ecosystems of the northern part of the Park.</p>
				<p>Instead of excluded valuable territories, it was planned to add land disturbed by fires and human economic activity: continuous logging and geological exploration. The Komi Science Center of the Russian Academy of Sciences has confirmed that the attached territories cannot compensate for the loss of land given to Gold Minerals CJSC (Inta Gold) for development.</p>
				<p>At the end of 2019, in response to the appeal, the Presidential Administration confirmed that gold mining in the national park is unacceptable, but the license for the development of the Chudnoe deposit was suspended, but not revoked.</p>
				<p>In July 2020, the Deputy Prime Minister Yuri Trutnev instructed the Ministry of Natural Resources to prepare a draft resolution of the Government of the Russian Federation “On bringing the boundaries of Yugyd Va National Park into line”. In autumn, the Ministry of Natural Resources published for public discussion the draft proposal of the Yugyd Va National Park expansion. The new boundaries of the national park were presented in the Annex to the document. The territory occupied by the Chudnoe field was removed from the national park. After фт indignation, the Ministry of Natural Resources updated the Annex and corrected this “mistake".</p>
				<p>The UNESCO World Heritage Committee has repeatedly demanded that Russia stop any industrial activity within the boundaries of the World Heritage site “Virgin Komi Forest” and revoke the license of Gold Minerals CJSC (license was transferred to Inta Gold company). Instead, in 2021, the license for exploration and production of minerals at the Chudnoe deposit <a href="https://rfgf.ru/license/itemview.php?iid=2734044" target="_blank">was reissued</a>. Failure to comply with the Committee's requirements is a violation of Russia's obligations under the UNESCO Convention.</p>`
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
				'danger_html_ru': `<p>В мае 2019 года Юрий Трутнев, вице-премьер и полпред президента в Дальневосточном округе, утвердил «дорожную карту» развития курорта «Три вулкана». Часть туристического объекта хотят разместить в «Южно-Камчатском» природном парке.</p>
				<p>Для легализации этих планов Законодательное собрание Камчатского края в сентябре 2019 года <a href="http://docs.cntd.ru/document/423902697" target="_blank">изменило региональный закон</a> «Об особо охраняемых природных территориях» таким образом, что изменение границ ООПТ регионального значения возможно, когда охрана этих природных объектов официально может осуществляться без сохранения режима охраняемой природной территории.</p>
				<p>Предложения изменить границы Южно-Камчатского природного парка в ноябре 2019 года <a href="https://www.kamgov.ru/minprir/document/file/download?id=91486" target="_blank">одобрила межведомственная рабочая группа</a> при Минприроды Камчатского края.</p>
				<p>В 2020 году губернатор Камчатского края Владимир Солодов подписал постановление, изменяющее границы природного парка «Южно-Камчатский»: из северной части парка вырезали 15 тысяч гектаров. Взамен к парку присоединили 15 тысяч гектаров других территорий, из которых 10 тысяч — земли действующего памятника природы «Кальдера вулкана Горелый».</p>
				<p>В 2021 году постановление губернатора Камчатского края было отменено, и издано аналогичное по содержанию постановление Правительства края.</p>
				<p>На сессии Комитета всемирного наследия летом 2021 года Комитет <a href="http://whc.unesco.org/archive/2021/whc-21-44com-18-en.pdf" target="_blank">выразил озабоченность</a> изменением границ природного парка и попросил Россию пригласить совместную миссию по реактивному мониторингу Центра всемирного наследия / МСОП. Результаты миссии лягут в основу решения, которое будет принято по объекту «Вулканы Камчатки» на следующей сессии в 2022 году.</p>
				<p>Комитет также ещё раз подтвердил, что снятие национального статуса охраны с части территории объекта всемирного наследия является основанием для его включения в список наследия, находящегося под угрозой, согласно параграфу 180 Руководства по применению Конвенции об охране всемирного культурного и природного наследия.</p>`,
				
				"danger_header_en": "The Resort in the Southern Kamchatka Regional Nature Park",
				"danger_html_en": `<p>In 2019 the investment project “Creation of an international standard resort and public resort infrastructure around the volcanoes Mutnovskiy, Viluchinsky and Gorely” — “Three Volcanoes Park” was launched in the Kamchatka Territory. A part of the project is planned to be implemented on the territory of the Southern Kamchatka Nature Park.</p>
				<p>At the end of 2019, the regional law on specially protected natural areas <a href="http://docs.cntd.ru/document/423902697" target="_blank">was supplemented with provision</a> on the basis of which it is possible to exclude areas from the boundaries of specially protected natural areas if the implementation of protection is possible without storage of a specially protected natural area.</p>
				<p>On November 15, 2019, the Interagency working group on making decisions on the functioning and development of the regional PAs in the Kamchatka Territory <a href="https://www.kamgov.ru/minprir/document/file/download?id=91486" target="_blank">approved the materials</a> justifying the exclusion of the area from the territory of the Southern Kamchatka Regional Nature Park.</p>
				<p>In June 2020, the Acting Governor of the Kamchatka Territory signed a resolution that changes the boundaries of the Southern Kamchatka Nature Park: the territory from the top of the Vilyuchinsky Volcano to the Pacific coast with an area of 15,096.7449 ha was excluded from the northern cluster of the park. As compensation for the excluded territory, the “Caldera of the Gorely Volcano” Nature Monument and a small adjacent territory were added to the nature park. Since this area was already a specially protected natural area, this amalgamation did not restore the total area of protected land in the region.</p>
				<p>In 2021, the resolution of the Governor of the Kamchatka Territory was canceled, and a similar resolution of the Government of the Kamchatka Territory was issued.</p>
				<p>At the session of the World Heritage Committee in the summer of 2021, the Committee <a href="http://whc.unesco.org/archive/2021/whc-21-44com-18-en.pdf" target="_blank">expressed its utmost concern</a> that boundaries of the South Kamchatka Nature Park have been modified at national level and requested the State Party to invite a joint World Heritage Centre/IUCN Reactive Monitoring mission to the property. The results of the mission will be reflected in a decision to be made on the Volcanoes of Kamchatka property at the next session in 2022.</p>
				<p>The Committee also reiterated that removal of the legal protection of part of the property constitutes a clear potential danger to the property in line with Paragraph 180(b) (i) of the Operational Guidelines for the Implementation of the World Heritage Convention.</p>`
			}, {
				'danger_id': 2,
				'danger_img': 'kam002.jpg',
				'danger_img_credit': '',
				'danger_name': 'river',
				'danger_header_ru': 'Рыбоходный канал в Кроноцком заповеднике',
				'danger_html_ru': `<p>В Кроноцком озере на территории Кроноцкого заповедника обитает жилая форма нерки — кокань. В самом крупном озере Камчатки могла бы нереститься и огромная популяция проходной нерки, но вытекающая из него река Кроноцкая образует непроходимые для рыб крутые пороги. В теории можно искусственно разводить популяцию проходной нерки, если подорвать речные пороги или прорыть пологий обходной канал от Кроноцкого озера и обеспечить условия для миграции рыбы. Различные варианты воплощения этой идеи обсуждались в 1950-1980-е годы, но не были реализованы.</p>
				<p>В конце 2018 года была предпринята очередная попытка разработать детальный проект Кроноцкого рыбохода. Рыболовецкий бизнес обратился в администрацию Камчатского края, а губернатор — в Минприроды и Росрыболовство. Заседание по этому вопросу в Министерстве природных ресурсов и экологии РФ состоялось с участием научных и коммерческих организаций. Оценка учёных и Минприроды была однозначно отрицательной, однако их мнение не было учтено, и в итоге было <a href="https://www.kommersant.ru/doc/3875955" target="_blank">принято решение</a> проработать теоретическую сторону проекта.</p>
				<p>Губернатор Камчатского края не раз высказывался против строительства рыбохода на территории Кроноцкого заповедника. Тем не менее в феврале 2019 была задержана Дарья Паничева, заместитель директора заповедника по науке, выступавшая категорически против этого проекта. Суд отправил её под домашний арест, который отменили только спустя семь месяцев. Сотрудники Кроноцкого заповедника связывают преследование Дарьи Паничевой с её позицией по вопросу возведения рыбохода.</p>
				`,
				
				"danger_header_en": "Fish passage in the Kronotsky Nature Biosphere Reserve",
				"danger_html_en": `<p>The largest lake of Kamchatka, Kronotskoye Lake, is located in the central part of the Kronotsky Nature Reserve. The lake is unique due to its natural complex, including kokani populations (living form of sockeye salmon). The area and depth of the lake could allow a huge population of migratory sockeye salmon to spawn, but the Kronotskaya River flowing out of the lake in the upper reaches, forms steep rapids impassable for fish.</p>
				<p>Theoretically, a herd of migratory sockeye salmon can be created artificially if you undermine the rapids or dig a gentle bypass canal and thereby provide conditions for fish migration. Different technical variants of this possibility were developed in the 1950-1980s, but were not implemented.</p>
				<p>At the end of 2018, another attempt was made to begin the development of the Kronotsky fish passage project. The Ministry of Natural Resources and Environment of the Russian Federation held a meeting initiated by Kamchatka Territory Governor at the request of the fishing business heads, which considered the use of Kronotsky Lake for industrial fishing purposes. Representatives of scientific organizations and the Ministry of Natural Resources expressed unequivocal negative attitude to this initiative, but at the meeting it was <a href="https://www.kommersant.ru/doc/3875955" target="_blank">decided “to explore the theoretical side of the project"</a>.</p>
				<p>Later the Kamchatka Territory Governor publicly declared against the construction of a fish passage.</p>
				<p>However, in February 2019, Daria Panicheva, the Head of the Scientific Department of the Kronotsky Nature Reserve, was detained. She was strongly opposed to this project and was engaged in the preparation of scientific justifications against the construction of a fish passage. The court placed her under house arrest, which was lifted only in August. Reserve's staff members associated the arrest with Panicheva’s position on the construction of a fishway.</p>
				`
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
				'danger_html_ru': `<p>На территории охранной зоны Телецкого озера, входящей в состав объекта ЮНЕСКО «Золотые горы Алтая», полным ходом идёт строительство туристических комплексов. Уже построена крупная база Altai Village, к которой проложили дорогу и линии электропередач.</p>
				<p>Помимо этого, федеральное <a href="http://government.ru/docs/30614/" target="_blank">правительство распорядилось создать на заповедных землях всесезонный горноклиматический кластер «Золотое озеро»</a>. Так ООО «БСК» получили в аренду часть ценной природной территории для возведения круглогодичного комплекса с инфраструктурой. Под «Золотое озеро» были выделены лесные участки общей площадью 17 гектаров — ради этого категория земель была заведомо изменена.</p>
				<p>Российская сторона нарушила Конвенцию об охране всемирного наследия, до начала работ не отправив в Комитет документы, необходимые для оценки рисков объекту ЮНЕСКО. А отчитываясь перед ЮНЕСКО в 2019 году, российские власти и вовсе заявили, что туристический кластер строится вне объекта всемирного наследия «Золотые горы Алтая», хотя это не так.</p>
				`,
				
				"danger_header_en": "Tourist Complexes in the Buffer Zone of Teletskoye Lake",
				"danger_html_en": `<p>Active construction of tourist infrastructure is underway in the buffer zone of Lake Teletskoe. In recent years, a large “Altay village” base was built there; a road running to it and a power line were also built.</p>
				<p><a href="http://government.ru/docs/30614/" target="_blank">It is planned to create an all-season mountain climate cluster</a> “Golden lake” on the plot of land where the “Altay village” base is already located. On the leased plots, BSK Ltd. Co. plans to construct a tourist complex with year-round facilities (including infrastructure) which will entail capital development. In order to make construction possible, the land category was changed: the lands of the forest fund with a total area of 17 hectares were transferred to the category of lands of specially protected areas and objects.</p>
				<p>In their report to UNESCO in 2019 Russian authorities stated that these facilities are being built outside the borders of the World Heritage property. However, a comparison of the boundaries of the property and the location of the planned tourist complex proves that this is not true. Justification for the construction was not sent to the UNESCO World Heritage Center to assess the potential impact on the Outstanding Universal Value of the property, which is a violation of the Operational Guidelines for the Implementation of the World Heritage Convention.</p>
				`
			}, {
				'danger_id': 2,
				'danger_img': 'altai002.jpg',
				'danger_img_credit': '',
				'danger_name': 'mestorojd',
				'danger_header_ru': 'Добыча золота в буферной зоне Телецкого озера',
				'danger_html_ru': `<p>«Буферная зона Телецкого озера» входит в состав объекта всемирного наследия «Золотые горы Алтая», однако в 2017 году Роснедра выдало ООО «Континент» лицензию на разработку там месторождения рассыпного золота. Река Малый Калычак, на которой планируют добывать золото, несёт свои воды к Телецкому озеру через реку Самыш. Разработка месторождения «Малый Калычак» приведёт к загрязнению Телецкого озера и деградации уникальной природной территории.</p>
				<p>Добыча полезных ископаемых несовместима со статусом объекта ЮНЕСКО, о чём неоднократно заявлял Комитет всемирного наследия. Однако, несмотря на запросы ЮНЕСКО, российские власти до сих пор не отозвали лицензию у ООО «Континент».</p>`,
				
				"danger_header_en": "Gold Mining in the Buffer Zone of Teletskoye Lake",
				"danger_html_en": `<p>In 2017, the Department of Rosnedra in the Siberian Federal District issued a license to the Continent Ltd. Co. for developing the Maly Kalychak alluvial gold deposit within the buffer zone of the Teletskoe Lake cluster of the Golden Mountains of Altai World Heritage property.</p>
				<p>The Maly Kalychak River is a tributary of the Samysh River, which flows into Teletskoe Lake. If this placer is to be developed, it is likely that Lake Teletskoe itself will be damaged.</p>
				<p>The World Heritage Committee has repeatedly stated that mining is incompatible with World Heritage status. Despite repeated requests from the World Heritage Center, the Russian authorities did not provide information on the status of the license and did not take measures to revoke it.</p>`
			}, {
				'danger_id': 3,
				'danger_img': 'altai003.jpg',
				'danger_img_credit': '',
				'danger_name': 'uchastki',
				'danger_header_ru': 'Дома в кластере «Катунский заповедник и буферная зона горы Белуха»',
				'danger_html_ru': `<p>Часть земель природного парка «Белуха» — несколько участков у озера Дарашколь — были незаконно проданы частным лицам. В результате на особо охраняемой природной территории <a href="https://www.kommersant.ru/doc/4140728" target="_blank">были построены капитальные дома</a>, что запрещено режимом природного парка.</p>
				<p>Центр всемирного наследия ЮНЕСКО не был уведомлен о планах возведения каких-либо объектов на берегу озера Дарашколь, поэтому оценка воздействия на природные комплексы объекта «Золотые горы Алтая» не была проведена своевременно. Это нарушение Конвенции об охране всемирного наследия.</p>
				<p>Алтайская прокуратура подтвердила незаконность продажи земельных участков — в 2020 году они были возвращены в федеральную собственность. Факт строительства домов также был установлен, однако это не было признано нарушением до сих пор.</p>
				`,
				
				"danger_header_en": `Tourist Facilities in the «Katunsky State Nature Reserve and Buffer Zone of Belukha Mountain» cluster`,
				"danger_html_en": `<p>On the territory of the “Katunsky State Nature Reserve and a buffer zone around Mount Belukha” cluster in the specially protected zone of the Belukha Nature Park on Lake Darashkol, several land plots were transferred to private ownership for the development of recreational infrastructure. <a href="https://www.kommersant.ru/doc/4140728" target="_blank">Two houses were built</a>, one was registered as an object of capital development (which is prohibited by the protection regulations of the nature park).</p>
				<p>Justification for the construction was not sent to the UNESCO World Heritage Center to assess the potential impact on the Outstanding Universal Value of the property, which is a violation of the Operational Guidelines for the Implementation of the World Heritage Convention.</p>
				<p>The Prosecutor's Office of the Altai Republic confirmed the illegality of the transfer of land to private ownership and the contract of land plots sale was invalidated. The fact of building the houses was also established but this was not recognized as a violation.</p>
				`
			}, {
				'danger_id': 4,
				'danger_img': 'altai003.jpg',
				'danger_img_credit': 'Shutterstock',
				'danger_name': 'roadTeletskoye',
				'danger_header_ru': 'Планируемая дорога через буферную зону Телецкого озера',
				'danger_html_ru': `<p>В мае 2021 года в Республике Алтай были <a href="https://www.gorno-altaisk.info/news/130769" target="_blank">проведены презентации мастер-плана по развитию туристических территорий региона</a>. В буферной зоне Телецкого озера планируется строительство дороги от села Артыбаш до села Балыкча.</p>
				<p>Согласно схеме маршрута, представленного в презентации мастер-плана, дорогу планируется проложить через орехово-промысловую зону в Пыжинском и Иогачсском участковых лесничествах Турочакского лесничества. Строительство дороги потребует рубок уникальных кедровых лесов прителецкой тайги.</p>
				`,
				
				"danger_header_en": `Proposed road through the Buffer zone of Teletskoye Lake`,
				"danger_html_en": `<p>On May 18-21, <a href="https://www.gorno-altaisk.info/news/130769" target="_blank">public hearings on the tourism development were held</a> in the Altai Republic. In the buffer zone of Lake Teletskoye, it is planned to build a road from the Artybash village to the Balykcha village.</p>
				<p>According to the published materials, the road is planned to be laid through the unique cedar (Pinus sibirica) forests. The construction of the road will require clear cutting of these forests.</p>
				`
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
				'danger_img_credit': '',
				'danger_name': 'roadPsheha',
				'danger_header_ru': 'Дорога к курорту «Лунная поляна»',
				'danger_html_ru': `<p>На территории объекта ЮНЕСКО «Западный Кавказ» незаконно строится дорога. Трасса фактически закончена на всём её протяжении.</p>
				<p>В 2018 году эксперты обнаружили на снимках спутникового наблюдения дорогу на территории памятника природы «Верховья рек Пшеха и Пшехашха» — прямо на границе Кавказского биосферного заповедника. Эти работы являются грубейшим нарушением не только российских законов, но и международных обязательств России.</p>
				<p>По данным космического наблюдения, первый километр дороги построен осенью 2018 года. Были нарушены уникальные горные ландшафты и почвенный покров, прерваны пути миграции животных, обитающих в заповеднике.</p>
				<p>Согласно кадастру эта дорога ведёт к «полигону научного центра ”Биосфера”», скандально известному тем, что он используется чиновниками и бизнесменами в качестве базы отдыха (курорт «Лунная поляна»). Сам «полигон» не входит в состав ООПТ, однако дорогу к нему возможно проложить только по землям либо Кавказского заповедника, либо памятника природы «Верховья рек Пшеха и Пшехашха» (реорганизован в природный парк «Горная Адыгея») — оба они включены в объект ЮНЕСКО «Западный Кавказ».</p>
				<p>Чтобы узаконить прокладку дороги через заповедные земли, в 2008 году власти Адыгеи, не выводя нужные им территории из состава ООПТ, изменили их назначение и начали строительство, хотя режим памятника природы это запрещал. В том же году Комитет всемирного наследия ЮНЕСКО <a href="http://whc.unesco.org/en/decisions/1631" target="_blank">потребовал запретить строительство и реконструкцию этой дороги</a>, после чего работы были приостановлены.</p>
				<p>В 2011 году правительство республики вновь попыталось разрешить прокладывать дорогу на территории памятника природы, но Верховный Суд не позволил это сделать. В своём решении <a href="https://vsrf.ru/lk/practice/cases/5473575" target="_blank">высший судебный орган страны постановил</a>, что «строительство и размещение линейных объектов, а также рубка зелёных насаждений на лесных участках, предназначенных для строительства, реконструкции и эксплуатации линейных объектов, невозможны без причинения ущерба особо охраняемой природной территории».</p>
				<p>В мае 2020 года Кабинет министров Республики Адыгея реорганизовал памятник природы «Верховья рек Пшеха и Пшехашха» в природный парк «Горная Адыгея». Положение о природном парке выделило в его границах три функциональные зоны, в том числе зону хозяйственного назначения: там теперь разрешено строить дороги и путепроводы, линии электропередач и гидротехнические сооружения, а ещё можно проводить сплошные санитарные вырубки леса. Именно в зоне хозяйственного назначения проходит маршрут той самой дороги до горнолыжного курорта «Лунная поляна». Действия Кабинета министров легализовали на национальном уровне незаконную стройку в объекте мирового наследия.</p>
				<p>Власти Адыгеи признают факт строительства дороги, однако заявляют, что она играет «противопожарную» роль и не связана с вырубкой леса, хотя на космоснимках факт вырубок зафиксирован.</p>
				<p>В сентябре 2021 года дорога была практически достроена.</p>
				<p>Комитет всемирного наследия ЮНЕСКО считает возведение инфраструктуры внутри объекта «Западный Кавказ» основанием для включения его в Список всемирного наследия, находящегося под угрозой. Этот вопрос снова будет рассмотрен на сессии Комитета в 2022 году.</p>`,
				
				"danger_header_en": "The road to the “Lunnaya Polyana” resort",
				"danger_html_en": `<p>Illegal road construction is being built on the territory of Western Caucasus World Heritage property. The construction of it is almost completed.</p>
				<p>Based on satellite imagery, experts discovered the construction of a road on the territory of the Headwaters of Pshekha and Pshekhashkha Rivers Nature Monument right on the border of the Caucasus Nature Biosphere Reserve. Construction roughly violates not only Russian legislation, but also Russia's international obligations.</p>
				<p>Satellite images show that about 1 km of the road was built in the fall of 2018. This means that unique mountain landscapes, soil cover, and migration routes of animals living in the reserve have been violated on this site.</p>
				<p>As follows from the public cadastral map, we are talking about the notorious road to the so-called “polygon of the Biosphere Scientific Center” (in fact – a premium recreation facility for state leaders “Lunnaya Polyana” resort). The base itself is cut out from the territory of the reserve, but the road to it can be laid only in the territory of the Caucasus Nature Biosphere Reserve, or via the Headwaters of Pshekha and Pshekhashkha Rivers Nature Monument (Nature Monument has been reorganized into the Mountain Adygeya Nature Park).</p>
				<p>n order to legitimize the road construction in 2008, the Adygea authorities removed part of the territory from the forest fund, but the boundaries of the nature monument were not changed. The regulations of the nature monument prohibits any construction works within it. In 2008, the UNESCO World Heritage Committee <a href="http://whc.unesco.org/en/decisions/1631" target="_blank">strongly demanded to ban the construction and reconstruction</a> of this road, after which it was stopped.</p>
				<p>In 2011, the Government of Adygea tried to allow the construction of roads in the territory of the nature monument, but this decision was canceled by the Supreme Court at the suit by the Prosecutor's Office. Remarkably, the Supreme Court <a href="https://vsrf.ru/lk/practice/cases/5473575" target="_blank">clearly indicated in their decision</a> that “the construction and placement of linear facilities, as well as the felling of green spaces in forest plots intended for the construction, reconstruction and operation of linear facilities, cannot be carried out without causing damage to the specially protected natural area”.</p>
				<p>In May 2020, the Cabinet of Ministers of the Republic of Adygea reorganized the Headwaters of Pshekha and Pshekhashkha Rivers Nature Monument into the Mountain Adygeya Nature Park. According to the provision for the Nature Park, it has three functional zones, including an economic zone where construction of roads and overpasses, placement of power lines and construction of hydraulic structures, as well as sanitary cutting, including clear-cutting, is allowed. The designated economic zone corresponds to the planned route of the road to the Lunnaya Polyana ski resort. The reorganization of the specially protected natural area will undoubtedly allow legalizing the construction of this road.</p>
				<p>The authorities of Adygea acknowledged the fact of the road construction, but stated that it is “fire-fighting” and is not related to deforestation, although satellite imagery confirms the fact of deforestation.</p>
				<p>From June to September 2021, the road was almost completed.</p>
				<p>The UNESCO World Heritage Committee considers the construction of infrastructure inside the Western Caucasus World Heritage property <a href="http://whc.unesco.org/en/decisions/7309" target="_blank">to be the basis for its inscription on the List of World Heritage in Danger</a>. This issue will be considered one more time at the Committee's session in 2022.</p>`
			},
			// {
			// 	'danger_id': 2,
			// 	'danger_img': 'kavkaz006.jpg',
			// 	'danger_img_credit': '',
			// 	'danger_name': 'resorts',
			// 	'danger_header_ru': 'Горные курорты вблизи Кавказского заповедника',
			// 	'danger_html_ru': `<p>В 2017 году «Роза Хутор» получили в аренду на 49 лет земельные участки Сочинского национального парка и Сочинского заказника, в том числе примыкающие к Кавказскому заповеднику, для реализации «масштабного инвестиционного проекта».</p>
			// 	<p>Согласно <a href="https://www.kommersant.ru/doc/4866446" target="_blank">карте развития горного кластера в Сочи</a>, к уже существующим четырём курортам («Роза Хутор», «Красная поляна», «Газпром Лаура», «Газпром Альпика»), запланировано добавить ещё три. В Сочинском национальном парке — «Газпром Грушёвый» и «Долина Васта», на территории Сочинского заказника — «Газпром Аишхо».</p>
			// 	<p>Помимо того, что территории, отданные под застройку, обладают собственной высокой природной ценностью, все они граничат с объектом всемирного наследия, что может привести к изменению путей миграции животных и оказать негативное воздействие непосредственно на объект всемирного наследия.</p>
			// 	<p>Комитет всемирного наследия неоднократно отмечал, что строительство крупномасштабной инфраструктуры в Сочинском федеральном заказнике и Сочинском национальном парке на территории, непосредственно прилегающей к объекту, может оказать негативное влияние на «выдающуюся универсальную ценность» объекта, и просил предоставить Оценку воздействия на окружающую среду до начала обсуждения любого инвестиционного проекта, что сделано не было.</p>
			// 	`,
				
			// 	"danger_header_en": "Mountain resorts close to the Caucasus Biosphere Reserve",
			// 	"danger_html_en": `<p>In 2017, the Government of the Russian Federation granted Gazprom and Rosa Khutor a 49-year lease on land plots in the territories of the Sochi National Park and the Sochi Wildlife Refuge, including those adjacent to the boundaries of the Caucasus State Nature Biosphere Reserve.</p>
			// 	<p>According to the <a href="https://www.kommersant.ru/doc/4866446" target="_blank">map of the Sochi mountain cluster development</a>, three more resorts are planned to be added to the already existing four resorts (Rosa Khutor, Krasnaya Polyana, Gazprom Laura, Gazprom Alpika). In the Sochi National Park - “Gazprom Grushevy” and “Vasta Valley”, on the territory of the Sochi Wildlife Refuge - “Gazprom Aishkho”.</p>
			// 	<p>In addition to the fact that the territories allocated for development have their own high natural value, they all border on the World Heritage site. Construction of resorts could lead to a change in the migration routes of animals and have other negative effects directly on the World Heritage site.</p>
			// 	<p>The World Heritage Committee has repeatedly noted that the construction of large-scale infrastructure in the Sochi Wildlife Refuge and Sochi National Park on the territory immediately adjacent to the property could have a negative impact on the property’s Outstanding Universal Value, and requests the State Party to submit an Environmental Impact Assessment for review by IUCN before any investment project is considered. That was not done.</p>
			// 	`
			// },
			{
				'danger_id': 2,
				'danger_img': 'kavkaz002.jpg',
				'danger_img_credit': '',
				'danger_name': 'expansion',
				'danger_header_ru': 'Дороги к горнолыжным курортам',
				'danger_html_ru': `<p>Компания «Роза Хутор» строит дорогу к планируемому курорту «Долина Васта» в Сочинском национальном парке — в 1,5 километрах от границы объекта ЮНЕСКО.</p>
				<p>Прокуратура считает эту дорогу «временной», однако фотографии, сделанные местными активистами, явно свидетельствуют о том, какой ущерб уже нанесён природным комплексам.</p>
				<p>Комитет всемирного наследия неоднократно выражал обеспокоенность планами развития туристской индустрии на территории Сочинского национального парка, примыкающей к границам объекта всемирного наследия.</p>
				`,
				
				"danger_header_en": "Roads to ski resorts",
				"danger_html_en": `<p>The Rosa Khutor company is building a road to the proposed “Vasta Valley” resort through the Sochi National Park – it already runs 1.5 kilometers from the World Heritage site's border.</p>
				<p>The prosecutor's office considers this road “temporary", but the photos taken by local activists clearly indicate what damage has already been done to natural complexes.</p>
				<p>The World Heritage Committee has repeatedly expressed concern about the plans for the development of the tourism infrustructure on the Sochi National Park territory adjacent to the World Heritage site boundaries.</p>
				`
			},
			{
				'danger_id': 3,
				'danger_img': 'kavkaz003.jpg',
				'danger_img_credit': '',
				'danger_name': 'roadSochi',
				'danger_unknown': 1,
				'danger_header_ru': 'Дорога «Кисловодск-Сочи» через Кавказский заповедник',
				'danger_html_ru': `<p>На высшем уровне долгие годы обсуждают проект транспортной магистрали между Кавказскими Минеральными Водами и Сочи. В 2018 году власти одобрили возведение дороги между курортами через Кавказский биосферный заповедник. Эта трасса затронет территорию объекта всемирного наследия «Западный Кавказ».</p>
				<p>На молодёжном форуме «Машук» в сентябре 2019 года полномочный представитель президента в Северо-Кавказском округе Александр Матовников <a href="https://bloknot-stavropol.ru/news/avtoban-iz-kislovodska-v-sochi-dopolnyat-zheleznoy-1138681" target="_blank">заявил о планах связать железнодорожной магистралью курорты Кавказских Минеральных Вод с Черноморским побережьем</a>. Однако не уточнил, что она пройдёт по заповедным территориям вместо или в связке с платным автобаном.</p>
				<p>В октябре 2020 вице-премьер Юрий Трутнев <a href="https://tass.ru/v-strane/9614403" target="_blank">поручил проработать возможность строительства автотрассы</a> между городами Кавказских Минеральных Вод и курортами Краснодарского края.</p>
				<p><a href="http://government.ru/orders/selection/401/42600/" target="_blank">Правительство Российской Федерации в июне 2021 года поручило Минтрансу России</a> совместно с заинтересованными министерствами и исполнительными органами государственной власти субъектов Российской Федерации проработать варианты возможных маршрутов автомобильной дороги, соединяющей Северо-Кавказский и Черноморский туристические кластеры. Ответ должен был быть дан к 15 сентября.</p>
				<p>Эта стройка станет грубейшим нарушением Конвенции ЮНЕСКО и приведёт к потере целостности особо ценной природной территории. «Западный Кавказ» могут исключить из Списка всемирного наследия.</p>
				`,
				
				"danger_header_en": `Kislovodsk-Sochi Road through the Caucasus Nature Biosphere Reserve`,
				"danger_html_en": `<p>It is not the first year that a project to build a transport highway between the Caucasian Mineral Waters and Sochi has been discussed. In 2018, the project was discussed again and the construction of a road connecting the resorts was approved. The road between the Caucasian Mineral Waters and Sochi is going to be built through the Caucasus Biosphere Reserve, the Western Caucasus World Heritage property.</p>
				<p>In September 2019, Presidential Plenipotentiary Envoy to the North Caucasus Federal District Mr. Alexander Matovnikov took part at the Mashuk Youth Forum. There, he <a href="https://bloknot-stavropol.ru/news/avtoban-iz-kislovodska-v-sochi-dopolnyat-zheleznoy-1138681" target="_blank">brought up again the idea</a> to implement the project on linking the Caucasian Mineral Waters resorts with the Black Sea coast. According to the Plenipotentiary, instead of, or in addition to the toll highway, the reserved lands should be crossed by a railway line.</p>
				<p>In October 2020, Deputy Prime Minister Yuri Trutnev <a href="https://tass.ru/v-strane/9614403" target="_blank">instructed to work out the possibility of building a highway</a> connecting the Caucasian Mineral Waters and the resorts of the Krasnodar Territory.</p>
				<p>In June 2021, <a href="http://government.ru/orders/selection/401/42600/" target="_blank">the Prime Minister of the Russian Federation instructed</a> the Federal Ministry of Transport and other ministries to work out options for possible routes of the highway connecting the North Caucasus and Black Sea tourist clusters.The deadline was September 15, 2021.</p>
				<p>The construction of these roads will be a major violation of the Convention and may lead to the exclusion of the Western Caucasus from the World Heritage List.</p>`
			},
			// {
			// 	'danger_id': 4,
			// 	'danger_img': 'kavkaz005.jpg',
			// 	'danger_img_credit': 'Shutterstock',
			// 	'danger_name': 'fishtOshtensky',
			// 	'danger_header_ru': 'Фишт-Оштенский горный массив',
			// 	'danger_html_ru': `
			// 		<p>Летом 2016 года по инициативе бизнеса был принят Федеральный закон, который допускает создание «биосферных полигонов» в границах заповедников. На части земель биосферных полигонов по Федеральному закону «Об ООПТ» разрешено капитальное строительство и возведение инфраструктуры.</p>
			// 		<p>Плато Лагонаки было передано в состав Кавказского заповедника в 1992 году именно как биосферный полигон. Весной 2021 года Распоряжением Правительства были пересмотрены границы Лагонакского биосферного полигона Кавказского заповедника. В границы полигона был включен Фишт-Оштенский горный массив, который ранее туда не входил.</p>
			// 		<p>По данным ведущих учёных Кавказского заповедника, территория плато Лагонаки и Фишт-Оштенский массив чрезвычайно значим для сохранения биоразнообразия. Здесь зафиксировано рекордное для заповедника число редких видов животных, растений и грибов, включённых в российские Красные книги федерального и регионального значения — 196. По совокупности критериев плато Лагонаки и Фишт-Оштенский массив отнесено к особо ценным районам Кавказского заповедника.</p>
			// 		<p>Строительство спортивных, туристических объектов и связанной с ними инфраструктуры неминуемо приведёт к нарушению наиболее ценных природных комплексов. Именно поэтому Комитет всемирного наследия ЮНЕСКО неоднократно заявлял о недопустимости строительства спортивной инфраструктуры на плато Лагонаки.</p>
			// 	`,
			// 	"danger_header_en": `Fisht-Oshten mountain range`,
			// 	"danger_html_en": `
			// 		<p>In the summer of 2016, at the initiative of business, a federal law was adopted according to which “biosphere polygons” can be created on part of the territory of state nature reserves. According to the federal laws, capital construction and infrastructure construction are allowed on part of biosphere polygons lands.</p>
			// 		<p>The Lagonaki Plateau was transferred to the Caucasus Biosphere Reserve in 1992 as a biosphere polygon. In the spring of 2021, by Government Decree, the boundaries of the Lagonak biosphere polygon were revised. The Fisht-Oshten mountain range was included in it.</p>
			// 		<p>According to the leading scientists of the Caucasus Reserve, the territory of the Lagonaki plateau and the Fisht-Oshten mountain range is extremely important for the conservation of biodiversity. A record number of rare species has been recorded here - 196. The Lagonaki plateau and the Fisht-Oshten mountain range are classified as particularly valuable areas of the Caucasus Reserve.</p>
			// 		<p>The construction of sports, tourist facilities and related infrastructure will inevitably lead to the violation of the most valuable natural complexes. That is why the World Heritage Committee has repeatedly stated that the construction of sports infrastructure on the Lagonaki plateau is inadmissible.</p>
			// 	`
			// },
			{
				'danger_id': 4,
				'danger_img': 'kavkaz004.jpg',
				'danger_img_credit': '',
				'danger_name': 'lagonaki',
				'danger_header_ru': 'Горный курорт «Лагонаки»',
				'danger_html_ru': `
					<p>О планах создания горнолыжного курорта на плато Лагонаки начали говорить ещё в 2010 году. В 2021 году проект получил название «Всесезонный горный экокурорт “Лагонаки”». Соглашение о строительстве курорта было подписано между «Красной Поляной» и руководством республики Адыгея на Петербургском экономическом форуме. Начало строительства запланировано на 2022 год.</p>
					<p>Согласно схеме проекта, на территории объекта будут расположены горнолыжные трассы, дороги и один из гостиничных комплексов - «Нижняя деревня» на 500 номеров.</p>
					<p>Плато Лагонаки является уникальным природным комплексом, характеризуется чрезвычайно высоким ландшафтным и биологическим разнообразием, но и большой уязвимостью. Летом 2021 года более двухсот российских учёных подписали <a href="https://westerncaucasus.ru/lagonaki/" target="_blank">открытое письмо Владимиру Путину</a> с просьбой отменить планы по строительству горнолыжного курорта на территории Лагонакского плато. По мнению учёных, строительство может привести к нарушению и загрязнению запаса чистой питьевой воды, которой пользуются жители Республики Адыгея и прилегающих районов Краснодарского края.</p>
					<p>Комитет всемирного наследия также <a href="http://whc.unesco.org/archive/2021/whc-21-44com-18-en.pdf" target="_blank">выразил свою обеспокоенность</a> планами строительства курорта.</p>
				`,
				
				"danger_header_en": `Lagonaki Mountain Resort`,
				"danger_html_en": `
					<p>Plans to create a ski resort on the Lagonaki plateau began to be discussed back in 2010. In 2021, the project was named “All-season mountain eco-resort “Lagonaki"”. The agreement on the construction of the resort was signed between Krasnaya Polyana and the leadership of the Republic of Adygea at the St. Petersburg Economic Forum. Construction is scheduled to begin in 2022.</p>
					<p>According to the project documents, ski slopes, roads and one of the hotel complexes - the “Lower Village” with 500 rooms will be located on the territory of the property.</p>
					<p>The Lagonaki Plateau is a unique natural complex, characterized by extremely high landscape and biological diversity, but also great vulnerability. In the summer of 2021, more than two hundred Russian scientists <a href="https://westerncaucasus.ru/lagonaki/" target="_blank">signed an open letter addressed to Russian President Vladimir Putin</a> with a request to cancel plans to build a ski resort on the territory of the Lagonak Plateau. According to scientists, the construction can lead to disruption and contamination of the clean drinking water supply used by residents of the Republic of Adygea and adjacent areas of the Krasnodar Territory.</p>
					<p>The World Heritage Committee also <a href="http://whc.unesco.org/archive/2021/whc-21-44com-18-en.pdf" target="_blank">expressed its concern</a> about the plans for the resort construction</p>
				`
			},
			{
				'danger_id': 5,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'thach',
				'danger_header_ru': '-',
				'danger_html_ru': `<p>-</p>`,
				'danger_header_en': '-',
				'danger_html_en': `<p>-</p>`
			},
			{
				'danger_id': 6,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'excluded',
				'danger_header_ru': '-',
				'danger_html_ru': `<p>-</p>`,
				'danger_header_en': '-',
				'danger_html_en': `<p>-</p>`
			},
			{
				'danger_id': 7,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'grushevyi',
				'danger_header_ru': 'Зона освоения - хребет Грушевый',
				'danger_html_ru': `<p>-</p>`,
				'danger_header_en': '-',
				'danger_html_en': `<p>-</p>`
			},
			{
				'danger_id': 8,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'dolinaVasta',
				'danger_header_ru': 'Зона освоения - Долина Васта',
				'danger_html_ru': `<p>-</p>`,
				'danger_header_en': '-',
				'danger_html_en': `<p>-</p>`
			},
			{
				'danger_id': 9,
				'danger_img': 'kavkaz001.jpg',
				'danger_img_credit': '-',
				'danger_name': 'aishkho',
				'danger_header_ru': 'Зона освоения - хребет Аишхо',
				'danger_html_ru': `<p>-</p>`,
				'danger_header_en': '-',
				'danger_html_en': `<p>-</p>`
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
				'danger_html_ru': `<p>В 2014 году на острове Врангеля был открыт пункт базирования Тихоокеанского флота. СМИ сообщили, что на острове построен военный городок и работает радиолокационная станция. В акватории заповедника, включённой в объект всемирного наследия, резко возросло движение судов.</p>
				<p>Во время военных учений «Восток-2014» в заповедник высадился воздушный десант войск ВДВ и морской пехоты, они провели учебный бой. Военные учения в районе острова Врангеля прошли и в 2018, и в 2019 году.</p>
				<p>Острова Врангеля и Геральд — район крупнейшей в мире концентрации родовых берлог белого медведя. По мнению специалистов, любое воздействие, любой фактор беспокойства медведей, даже такой незначительный, как экологический туризм, сильно влияет на популяцию медведей. Сейчас популяция белого медведя под угрозой.</p>
				<p>Строительство военной базы уже нанесло ущерб белым медведям и другим видам морских и околоводных животных: моржам, серым китам и птицам.</p>`,
				"danger_header_en": "Military Base on Wrangel Island",
				"danger_html_en": `<p>In 2014, a base point for the Pacific Fleet was opened in the territory of the Wrangel Island. The media reported that military camp was built on the island and the operation of a radar station had begun. The movement of ships in the water area of the reserve, that is a part of the World Heritage property, intensified drastically.</p>
				<p>During the Vostok-2014 military exercises, an airborne landing force of the Airborne Forces and the Marine Corps, who conducted a training battle, landed in the territory of the reserve. Military exercises in the area of Wrangel Island took place also in 2018 and 2019.</p>
				<p>The Wrangel and Herald Islands are the region of the world's largest concentration of polar bear dens. According to experts, any impact related to the anxiety factor among bears, even such a minor one as ecological tourism, can significantly affect the state of the bear population on Wrangel Island. The polar bear population is now under threat.</p>
				<p>The construction of a naval base caused great damage to the polar bear population, as well as to other species of marine and near-water animals, such as walrus, gray whale, and various species of birds.</p>`
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
				'danger_html_ru': `<p>В июле 2020 года в Монголии <a href="https://montsame.mn/en/read/232870" target="_blank">начали строить плотину через реку Ульдза</a>. Река — основной источник воды для объекта наследия «Ландшафты Даурии». По проекту реку планируют перегородить плотиной длиной 700 метров и высотой 9 метров, чтобы создать водохранилище.</p>
				<p>Открытие водохранилища может привести к существенному уменьшению стока Ульдзы и изменению водного баланса Торейских озёр и прилегающих территорий.</p>
				<p>Торейские озёра формируют природно-климатические условия на степных и водно-болотных угодьях вокруг. Через озёра проходит один из важнейших путей миграции многих видов перелётных птиц, массово останавливающихся здесь для отдыха и кормёжки. На озёрах и водно-болотных угодьях, в том числе в долине реки Ульдзы, обитают редчайшие виды птиц: даурский журавль, реликтовая чайка и гусь-сухонос.</p>
				<p>Изменение водного баланса Торейских озёр приведёт к резкому сокращению популяции как редких краснокнижных, так и массовых видов птиц, мигрирующих через озёра и гнездящихся в более северных регионах Сибири.s</p>`,
				"danger_header_en": `Dam across Ulz River`,
				"danger_html_en": `<p>In July 2020, construction of a dam across the Ulz River – the main source of water for the Landscapes of Dauria World Heritage property – <a href="https://montsame.mn/en/read/232870" target="_blank">began in Mongolia</a>. According to the documents, the dam, 9 meters high and 700 meters long, will block Ulz River and create a reservoir with a volume of 27 million cubic meters.</p>
				<p>The construction of such a reservoir can lead to a significant decrease in the Ulz River flow and to a complete cessation of flow for a long period in dry years, which will change the water balance of the Torey Lakes and adjacent territories.</p>
				<p>Torey Lakes form natural and climatic conditions on the adjacent steppe and wetlands. One of the most important migration routes for a large number of migratory birds passes through the lakes, forming large gatherings of birds for recreation and feeding. Lakes and adjacent wetlands, including the Uldza river valley, are one of the most important habitats for globally threatened bird species such as the white-naped crane, relict gull, swan goose.</p>
				<p>Changes in the water balance in this area may lead to a sharp drop in the number of rare, red-listed, and mass bird species that migrate through lakes and nest in the more northern regions of Siberia.</p>`
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
				'danger_html_ru': `
					<p>С осени 2019 года обсуждается проект газопровода из России в Китай через Монголию («Сила Сибири-2»). Президент России в марте 2020 года поручил «Газпрому» <a href="https://www.gazprom.ru/press/news/2020/march/article502469/" target="_blank">разрабатывать технико-экономическое обоснование (ТЭО)</a>. К осени 2020 года «Газпром» и Правительство Монголии подписали Меморандум о намерениях в отношении создания дочерней компании для продвижения проекта газопровода.</p>
					<p>При этом маршруте газопровода может быть затронут Байкальский участок всемирного наследия или другие зоны Байкальской природной территории. Строительство такой массивной инфраструктуры на пересечённой местности изменит природные ландшафты, а попытки построить её вдоль существующих транспортных маршрутов могут увеличить риск крупных аварий. Некоторые учёные предлагали проложить трубопровод по дну Байкала, что может вызвать серьёзные нарушения в донных экосистемах.</p>
				`,
				"danger_header_en": `Threat of Gas Pipeline Construction`,
				"danger_html_en": `
					<p>Since the fall of 2019, the gas pipeline route from Russia to China via Mongolia (“Power of Siberia-2”) is being discussed. In March 2020, the President of Russia instructed Gazprom to <a href="https://www.gazprom.ru/press/news/2020/march/article502469/" target="_blank">develop a feasibility study</a> and by fall 2020 Gazprom has signed a Memorandum of Intent with counterparts in Mongolia to establish a subsidiary company to advance the pipeline project.</p>
					<p>The project may affect the Lake Baikal World Heritage property or other areas of the Baikal Natural Territory. Construction of this massive infrastructure across terrain will alter natural landscapes, while attempts to build it along existing transportation routes may increase risks of major accidents. Some scientists suggested to build such pipeline on the Lake Baikal bottom, where construction may cause major disturbance in benthic ecosystems.</p>
				`
			}, {
				'danger_id': 2,
				'danger_img': 'baikal002.jpg',
				'danger_img_credit': '',
				'danger_name': 'harbormamai',
				'danger_header_ru': `Существующие и планируемые участки особых экономических зон`,
				'danger_html_ru': `
					<p>В последние десятилетия практически все легкодоступные места на побережье Байкала оказались под жёстким туристическим прессом. Деградацию объекта наследия от недолжного развития туризма поощряют государственные программы. В 2007 году на берегах озера учредили несколько «особых экономических зон туристско-рекреационного типа» (ОЭЗ ТРТ), которые сочетают федеральные инвестиции в инфраструктуру и льготы для бизнес-резидентов с ослаблением природоохранных ограничений.</p>
					<p>Сейчас Республика Бурятия, несмотря на явный неуспех в развитии уже существующих зон, предлагает расширить ОЭЗ «Байкальская Гавань» и освоить под горнолыжный курорт новый прибрежный район на горе Мамай к западу от Байкальского заповедника. Губернатор Иркутской области также заявил в СМИ о намерении расширить другую ОЭЗ «Ворота Байкала» на побережье Листвянки и острове Ольхон. Оценка воздействия на окружающую среду (ОВОС) и стратегическая экологическая оценка (СЭО) планов развития особых экономических зон, которую многократно запрашивал Комитет всемирного наследия, так и не были проведены. Между тем Министерство экономического развития Российской Федерации в начале 2020 года предложило внести поправки в закон «Об охране озера Байкал», чтобы облегчить расширение существующих особых экономических зон на новые лесные массивы с последующим переводом земель в нелесные категории, где разрешено строительство.</p>
				`,
				"danger_header_en": `Existing and Planned Plots of Special Economic Zones`,
				"danger_html_en": `
					<p>In recent decades, almost all easily accessible places on the coast of Lake Baikal have been under tourist pressure. The degradation of the World Heritage property from the inappropriate development of tourism is encouraged by Government programs. In 2007, several Special Economic Zones of Tourist-Recreational Type (SEZ TRT) were established on the shores of the lake. They combine federal public investments in infrastructure and benefits for business residents with looser environmental restrictions.</p>
					<p>Now, despite a clear failure in the development of existing zones, the Republic of Buryatia is proposing to expand the Baikal Harbor SEZ (3,283 hectares) and to develop a new lake shore ski resort at Mamai Mountain, to the west of the Baikalsky Nature Reserve. The Governor of the Irkutsk Oblast also told the media about his intention to expand another Gate of Baikal SEZ on the coast of Listvyanka and Olkhon Island. The EIA and Strategic Environmental Assessment (SEA) of the development plans for the special economic zones, which were repeatedly requested by the World Heritage Committee, have not been carried out. Meanwhile the Ministry of Economic Development of the Russian Federation in early 2020 proposed amendments to the “Law on Lake Baikal Protection” to ease expansion of existing special economic zones to new forested areas with subsequent conversion of their lands into non-forest categories, where construction is allowed.</p>
				`
			}, {
				'danger_id': 3,
				'danger_img': 'baikal003.jpg',
				'danger_img_credit': '',
				'danger_name': 'cbk',
				'danger_header_ru': `Байкальский ЦБК и реабилитация окрестностей Байкальска`,
				'danger_html_ru': `
					<p>Байкальский целлюлозно-бумажный комбинат полвека был самым мощным источником загрязнения Байкала. БЦБК ежедневно сбрасывал в озеро 120 тыс. кубометров сточных вод, содержащих большую концентрацию взвешенных веществ, хлорорганических соединений, нитратов, фосфатов, тяжёлых металлов и т. д. Объёмы атмосферных выбросов превышали 30 тыс. тонн в год. Стоки комбината впервые создали в озере Байкал зону с выраженными негативными экологическими изменениями, а леса на окрестных склонах усыхали под воздействием токсичных выбросов.</p>
					<p>В 2013 году деятельность комбината была окончательно остановлена, но к настоящему моменту работы по ликвидации последствий БЦБК и реабилитации промышленной площадки далеко не продвинулись. Район БЦБК подвержен сильным селям (потокам из воды и обломков горных пород), и существует значительный риск, что хранилища, содержащие 6 млн тонн отходов (в основном шлам-лигнина), могут выйти из строя, и отходы попадут в озеро.</p>
					<p>Тем временем обсуждаются проекты возрождения города Байкальска. Осенью 2021 заместитель Председателя Правительства Виктория Абрамченко заявила, что <a href="https://tass.ru/nedvizhimost/12486951" target="_blank">Байкальск станет первым экогородом в России</a>.</p>
				`,
				"danger_header_en": `Baikalsk Pulp and Paper Mill (BPPM) and the Rehabilitation of Baikalsk`,
				"danger_html_en": `
					<p>Baikalsk Pulp and Paper Mill (BPPM) has been the primary source of pollution in Lake Baikal for half a century. The BPPM discharged 120,000 cubic meters of wastewater containing significant concentrations of suspended solids, organochlorine compounds, nitrates, phosphates, heavy metals, etc., into the lake daily. Atmospheric emissions exceeded 30,000 tons per year. Sewage from the mill created an area with pronounced negative ecological changes in Lake Baikal for the first time, and the forests on the surrounding slopes were drying out due to toxic emissions.</p>
					<p>In 2013, the mill was finally closed. To date, efforts to eliminate the waste from the BPPM and rehabilitate the industrial site have not had much progress. The BPPM area is affected by heavy mudflows, and there is a significant risk that storage ponds containing six million tons of waste (mainly lignin sludge) may fail and the waste will end up in the lake.</p>
					<p>Meanwhile, projects for the revival of the Town of Baikalsk are being discussed. In the autumn of 2021, Deputy Prime Minister Victoria Abramchenko announced that <a href="https://tass.ru/nedvizhimost/12486951" target="_blank">Baikalsk will become the first eco-city in Russia</a>.</p>
				`
			}, {
				'danger_id': 4,
				'danger_img': 'baikal004.jpg',
				'danger_img_credit': '',
				'danger_name': 'hppall',
				'danger_header_ru': `Воздействие гидротехнических сооружений на Байкал`,
				'danger_html_ru': `
					<p>Озеро Байкал — водохранилище Иркутской ГЭС. В связи с необходимостью регулирования приточности воды для слаженной работы всего Ангарского каскада ГЭС и водного транспорта на Енисее, существенно изменились суточные и сезонные колебания уровня Байкала.</p>
					<p>Чтобы уменьшить ущерб от гидроэнергетики, закон «Об охране озера Байкал» предписывает Правительству РФ определить максимальные и минимальные допустимые отметки колебаний уровня Байкала. Если в 2001 году было введено ограничение на диапазон колебаний уровня в пределах 1 метра, то постановление 2017 года увеличило допустимый диапазон колебаний уровня озера до 2,31 метра.</p>
					<p>Иркутская ГЭС усиливает негативные факторы воздействия на экосистему озера, особенно в период экстремальных климатических событий — маловодья и наводнений. Общее повышение уровня Байкала, дополнительное поступление в него органики, обусловленное затоплениями и размывом берегов, а также высокая загрязнённость притоков (особенно Селенги) сказались на гидротермических, гидрохимических и гидробиологических процессах в экосистемах, расположенных главным образом в мелководной части озера и в дельтовых участках его притоков. В многоводные периоды берега озера разрушались особенно интенсивно, что повлияло на популяции эндемичных беспозвоночных и рыб, обитающих на мелководье и в прибойной полосе.</p>
					<p>Планы по строительству ГЭС в бассейне Байкала есть и в Монголии. Процесс планирования ГЭС активизировался с 2012 года при поддержке Всемирного банка (ГЭС «Шурэн» на реке Селенге и гидроузла на реке Орхон) и Китайского экспорт-импорт банка (ГЭС «Эгийн-Гол»).</p>
					<p>К настоящему моменту и китайский инвестор, и Всемирный банк отказались от финансирования проектов. Несмотря на это, развитие крупных гидроэнергетических водохранилищ и межбассейновых систем переброски стока рек из бассейна озера Байкал-Селенги по-прежнему вписаны в планы правительства Монголии.</p>
				`,
				"danger_header_en": `The Impact of Water Infrastructure on Lake Baikal`,
				"danger_html_en": `
					<p>Lake Baikal is a reservoir of the Irkutsk Hydropower Plant. Due to the need to regulate the water supply for the coordinated operation of the entire Angarsk cascade of hydropower plants and water transport on the Yenisei River, daily and seasonal fluctuations of Lake Baikal levels have changed substantially.</p>
					<p>To reduce the damage from hydropower, the Law “On the Protection of Lake Baikal” ordered the Government of the Russian Federation to determine the acceptable fluctuation range for the Lake Baikal water level. If in 2001 a restriction on the range of fluctuations of the level within 1 meter was introduced, then the Resolution of 2017 increased the permissible range of lake level fluctuations to 2.31 meters.</p>
					<p>The Irkutsk Hydropower Plant intensified the negative factors affecting the ecosystem of the lake, especially during extreme climatic events, low water levels, and floods. The general rise in Baikal’s water levels, the additional discharge of organic matter into the lake due to flooding and erosion of the coasts, as well as the high pollution levels in the tributaries (especially the Selenge River) have affected hydrothermal, hydro-chemical, and hydro-biological processes in ecosystems located mainly in the shallow part of the lake and in the delta sections of its tributaries. In water-abundant periods, the shores of the lake were destroyed by intensive erosion, which affected the populations of endemic invertebrates and fish living in shallow water and in the surf zone.</p>
					<p>There are also plans to build the hydropower plants in the Lake Baikal basin in Mongolia. The planning process for hydropower plants was reactivated in 2012 with support from the World Bank (Shuren Hydropower Plant Project on the Selenge River and waterworks on the Orkhon River) and China's Export-Import bank (Egiin Gol Hydropower Plant Project).</p>
					<p>To date, both the Chinese investor and the World Bank have refused to finance the projects. Despite this, the development of large hydropower reservoirs and inter-basin water-conveyance systems transferring river runoff from the Baikal-Selenge basin is still included in the plans of the Government of Mongolia.</p>
				`
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
				'danger_html_ru': `
				<p>На территории природного парка «Волго-Ахтубинская пойма» (входит в международную сеть биосферных резерватов ЮНЕСКО) прямо сейчас незаконно строят дорогу Волгоград—Волжский. Это следует из <a href="http://docs.cntd.ru/document/561714834" target="_blank">документации</a>, утверждённой приказом Комитета архитектуры и градостроительства Волгоградской области от 16 января 2020 года N 5-ОД.</p>
				<p>Строительство такой дороги планировалось и раньше. Для этого Положением о парке предусмотрены четыре зоны: природоохранная, рекреационная, агроландшафтов и экстенсивного природопользования. Последняя представляет собой систему кластеров, границы которых совпадают с границами населённых пунктов, утверждёнными генеральными планами сельских и городских поселений, а также границами полосы, отведённой по обе стороны автомобильной дороги «Волгоград — Краснослободск — Средняя Ахтуба» на 100 метров от её оси. <strong>Строительство на этой территории не вызвало бы нареканий и протестов со стороны активистов и природоохранных организаций. Однако для дороги выбрали другой маршрут</strong>.</p>
				<p>Строительство планируется в охраняемой зоне на пятиметровой насыпной дамбе, которая пересечёт пути миграции животных и множество водных объектов, что приведёт к потере биоразнообразия и изменению гидрологического режима Волго-Ахтубинской поймы. Кроме того, по информации в СМИ, ради строительства дороги <a href="https://v1.ru/text/transport/69378049/" target="_blank">планируется вырубить</a> 8 500 уникальных дубов. Уничтожение этого реликтового лесного сообщества нанесёт <a href="https://nature.asu.edu.ru/files/4(45)/52-56.pdf" target="_blank">непоправимый ущерб</a> уникальной экосистеме поймы.</p>
				<p>При этом <a href="http://gg34.ru/news/society/31241-v-volgogradskoj-oblasti-vybrali-proekt-stroitelstva-mosta-cherez-volgu.html" target="_blank">декларируемая</a> компенсация в виде посадок деревьев (в том числе дубов) никак не компенсирует ущерб, причинённый природным комплексам природного парка, поскольку лесная экосистема Волго-Ахтубинской поймы формировалась в течение многих сотен лет. Посаженые деревья даже в случае их полного приживания начнут выполнять свои экосистемные функции, только когда достигнут зрелого возраста.</p>
				<p>Минприроды России письмом от 04.06.2021 № 03-15-29/15930 согласовало внесение изменений в Положение о природном парке «Волго-Ахтубинская пойма», после чего правительство Волгоградской области постановлением от 23.06.2021 № 317-п внесло в него изменения, отменив запрет на вырубку дубов.</p>
				<p>Тем не менее реализация предлагаемого проекта противоречит природоохранным и экологическим целям создания природного парка «Волго-Ахтубинская пойма», не согласуется с режимом природного парка, а также иными нормами законодательства Российской Федерации по следующим причинам.</p>
				<h3>Власти и природоохранники о строительстве дороги</h3>
				<p>Несмотря на это, Минприроды России продолжает настаивать на законности строительства.</p>
				<p>Так, директор Департамента государственной политики и регулирования в сфере развития ООПТ Минприроды России И. Ю. Маканова <a href="https://2021.eco-russia.org/program/" target="_blank">заявила</a>, что строительство этой трассы абсолютно точно не влечёт за собой вырубку реликтовых дубов, которых там нет.</p>
				<p>Госпожа директор, видимо, не до конца разобралась в вопросе. Реликтовыми, являются не дубы, а дубравы Волго-Ахтубинской поймы (о чём неоднократно <a href="https://nature.asu.edu.ru/files/4(45)/52-56.pdf" target="_blank">заявляли</a> учёные), которые как раз и разрушаются при строительстве дороги.</p>
				<p>А вот Александр Чибилёв, академик РАН и председатель Постоянной природоохранительной комиссии РГО, <a href="https://www.rgo.ru/ru/article/aleksandr-chibilyov-eshchyo-odin-obekt-seti-zapovednikov-yunesko-v-opasnosti" target="_blank">считает</a> так: «На основе полученных результатов на сайте РГО была опубликована информация, суть которой сводится к тому, что сообщество старовозрастных дубов в Волго-Ахтубинской пойме, подлежащих вырубке, является одним из последних форпостов, по сути дела, реликтовых урочищ пойменных дубрав естественного происхождения в долине реки Волги. В связи с изменениями гидрологического режима Волги и изменениями климата подобные сообщества дубрав будут утрачены навсегда, их мощь и облик невозможно восстановить искусственным путём».</p>
				<p>Волжская межрегиональная природоохранная прокуратура вынесла генеральному подрядчику (компания ЕКС) предостережение о недопустимости уничтожения объектов животного и растительного мира, занесённых в Красную книгу РФ. Тем не менее строительство продолжается, а прокуратура не принимает эффективных мер по пресечению незаконного строительства.</p>
				<p>В настоящее время, на территории природного парка «Волго-Ахтубинская пойма» в районе посёлков Рыбачий, Третий Решающий, ериков Осинки и Гнилой строят третий пусковой комплекс мостового перехода через реку Волга в городе Волгограде (I Этап). В результате указанных работ уничтожается растительный покров, вырубаются деревья — тополя и дубы. Ерик Осинки частично засыпан грунтом, что привело к изменению гидрологического режима.</p>
				<p>Ущерб от указанной деятельности, расчитанный по утверждённым в установленном порядке таксам и методикам составляет 101 195 070 рублей, в том числе расчёт ущерба от незаконных рубок составляет 27.231.970 рублей.</p>
				`,
				"danger_header_en": "Temporary unavailable, please use Russian version",
				"danger_html_en": `<p>Temporary unavailable, please use Russian version</p>`
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