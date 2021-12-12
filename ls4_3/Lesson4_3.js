console.log("Homework 4.3")

let Student = {
	Name: "Иванов",
	Surname: "Иван",
	Age: 65,
	Interestings: ["Вышивка", "Аниме", "Black Ops"],
	Study: "ГУАП",
	info:  function() 
	{
		console.log(this.Name + " " + this.Surname + ". " + this.Age + "лет. Интересы: "+this.Interestings + ". Учится в " + this.Study + ".")
	}
};

Student.info()