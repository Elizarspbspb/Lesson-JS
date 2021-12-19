Vue.createApp({
  data() {
    return {
    search: '',
    users: [
	{title: 'Римская империя (древний Рим) – от республики до империи', url:'https://travel-in-time.org/puteshestviya-vo-vremeni/rimskaya-imperiya-drevniy-rim-ot-respubliki-do-imperii/', picture:"https://travel-in-time.org/wp-content/uploads/2018/04/Rimskaya-imperiya.jpg"},
	{title: 'Сколько стоит съездить на Мальдивы', url:'https://journal.tinkoff.ru/maldives/', picture:'https://img-cdn.tinkoffjournal.ru/i/d945ipayHCRV9-F6W5ubed7dE0-b30pslrEdi-UxBRU/w:1400/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl9fX19fc2h1/dHRlcnN0b2NrXzEw/NTAyNDcxMDkuZ3li/a20weHh3M3A0Lmpw/Zw'},
	{title: 'Породы кошек', url:'https://cattish.ru/breed/', picture:'https://cattish.ru/wp-content/uploads/2018/07/maine-coon-first.jpg'  },
	{title: 'Моря мира', url:'https://wikiway.com/dostoprimechatelnosti/morya/', picture:'https://wikiway.com/upload/hl-photo/a2d/c96/mertvoe-more_132.jpg'  }]  
	};
  },
  computed:{
    filteredusers() {
       return this.users.filter(mask => {return mask.title.toLowerCase().indexOf(this.search) !== -1;});
  }}

}
).mount('#app');