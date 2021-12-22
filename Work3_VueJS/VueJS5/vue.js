/* 1.На вёрстке задан перечень услуг в виде списка. Внутри
Vue приложения - это массив объектов со свойствами (название услуги, стоимость услуги). У пользователя есть возможность выбрать интересующие услуги, а ниже списка сразу же будет
отображаться итоговая стоимость выбранных услуг пользователем. */

let app=Vue.createApp({
    data(){
        return {
            totalPrice:[],
            posts:[],
            isActive: true,
            services:[
                {name:"Заменить аккамулятор в ИБП", price:1000, },
                {name:"Установка нового SSD диска", price:500,  },
                {name:"Установка Windows 10", price:2000,  },
                {name:"Добавление оперативной памяти (+2 Гб)", price:3000,  },
                {name:"Замена термопасты", price:700,  },
            ]
        }
        
    },

    computed:{
        sumprice(){
            let a=this.totalPrice.reduce(function(sum, elem) {
                return sum + elem;
            }, 0);
            return a
           }
    }, 

    
});

let card=app.mount("#main")