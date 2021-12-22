/* 2. В качестве данных дан массив объектов, описывающих статьи 
(свойства: название статьи, url местоположения статьи в интернете, 
путь к файлу картинке из статьи). На интерфейсе реализовать 
два режима отображения списка статей. Нажав одну из кнопок 
в верхней панели, будет переключаться режим показа между 
сеткой, содержащей кликабельные изображения статей, и списком 
с меньшими изображениями и текстом. */

//list of articles
const articles = [
	{name: 'article1', url: 'https://journal.tinkoff.ru/maldives/', img: 'https://img-cdn.tinkoffjournal.ru/i/d945ipayHCRV9-F6W5ubed7dE0-b30pslrEdi-UxBRU/w:1400/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl9fX19fc2h1/dHRlcnN0b2NrXzEw/NTAyNDcxMDkuZ3li/a20weHh3M3A0Lmpw/Zw', id: 1,},
	{name: 'article2', url: 'https://cattish.ru/breed/', img: 'https://cattish.ru/wp-content/uploads/2018/07/maine-coon-first.jpg', id: 2,},
	{name: 'article3', url: 'https://wikiway.com/dostoprimechatelnosti/morya/', img: 'https://wikiway.com/upload/hl-photo/a2d/c96/mertvoe-more_132.jpg', id: 3,},
	{name: 'article4', url: 'https://nauka-prosto.ru/page/vsyo-o-snege-i-snezhinkah/', img: 'https://nauka-prosto.ru/wp-content/uploads/2021/02/cover189.jpg', id: 4,},
];

//view switcher
const views = [ {name: 'table', img: 'https://hsto.org/getpro/habr/upload_files/78c/507/fba/78c507fba6fa0e17863c12552d87d22b.png' }, {name: 'list', img: 'https://hsto.org/getpro/habr/upload_files/78c/507/fba/78c507fba6fa0e17863c12552d87d22b.png', }, ];
//css  properties array
const stylestemplate = ['display: grid; grid: auto; grid-template-columns: 1fr 1fr;','display: grid; grid: auto; grid-template-columns: 1fr;'];

//Vue root instance
const root1 = {
	data: function(){
		return {
			viewarticles: articles,
			viewarray: views,
			view: views[0],
			styles: stylestemplate,
			viewstyle: stylestemplate[0],
			fontsize: 26,
			size: 100,
		};
	},
	computed:{
		viewtext: function(){
			if( this.view == this.viewarray[0])
				return 'Сетка';
			else 
				return 'Список';
		},	
	},
	methods: {
		changeview(){
			if ( this.view == this.viewarray[0] ) {
				this.viewstyle = this.styles[1];
				this.view = this.viewarray[1];
			}
			else {
				this.viewstyle = this.styles[0];
				this.view = this.viewarray[0];
			}
			if ( this.view.name == 'list' ) {
				this.viewstyle += `font-size: ${this.fontsize - 14}px`;
			}
			else {
				this.viewstyle += `font-size: ${this.fontsize}px`;
			}
		}
	},
	beforeMount(){
		this.viewstyle += `font-size: ${this.fontsize}px`;
	}
}

const vue2 = Vue.createApp(root1).mount('#vuearticles');