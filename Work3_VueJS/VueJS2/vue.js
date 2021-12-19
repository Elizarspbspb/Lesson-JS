/* Реализовать «Меню навигации». Меню представляет собой набор вкладок, например: главная, проекты, услуги, контакты. По нажатию на вкладку менять
основной контент страницы в соответствие с выбранной вкладкой. */
let app=Vue.createApp({
    data: function(){
        return {
        visible_1:true,
        visible_2:false,
        visible_3:false,
		visible_4:false,
        }
        
    },
    methods:{
        swap1(){
            this.visible_1=true
            this.visible_2=false
            this.visible_3=false
			this.visible_4=false
        },  
        swap2(){
            this.visible_1=false
            this.visible_2=true
            this.visible_3=false
			this.visible_4=false
        },
        swap3(){
            this.visible_1=false
            this.visible_2=false
            this.visible_3=true
			this.visible_4=false
        },
		swap4(){
            this.visible_1=false
            this.visible_2=false
            this.visible_3=false
			this.visible_4=true
        },
    }
});


let card=app.mount("#main")