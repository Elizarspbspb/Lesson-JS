function interes(object)
{
	//console.log(object);
	console.log(object.name);
	console.log(object.surname);
	console.log(object.age);
	console.log(object.interes);
	console.log(object.study);
}
var student = new Object();
student.name = "Ivan";
student.surname = "Ivanov";
student.age = 21;
student.interes = ["Бегать", "Прыгать", "Играть"];
student.study = "ГУАПчичи";
interes(student);
