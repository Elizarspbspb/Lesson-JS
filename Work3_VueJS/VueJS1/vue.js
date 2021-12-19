/* На странице есть некоторое краткое описание. В конце некоторый элемент (например, кнопка: «Подробнее») 
по нажатию на которое открывается скрытый текст, который делает данное описание полным. */
let app=Vue.createApp({
    data: function(){
        return {
            visible: false,
            name: "Q77A QLED 4K Smart TV 2021",
            price: "299 999 ",
            diagonal: "85",
            processor: "Quantum 4K",
            garantia: "1 год",
			country: "Россия",
            link: 
			{
                href:"https://images.samsung.com/is/image/samsung/p6pim/ru/qe85q77aauxru/gallery/ru-qled-q70a-382721-qe85q77aauxru-428385087?$684_547_PNG$",
                alt:"Телевизор Q77A QLED 4K"
            }
        }
    }
});
app.config.globalProperties.$filters={
    rub(value){
        return value+" "+ String.fromCharCode(8381)
    }
}
let card=app.mount("#item-card")