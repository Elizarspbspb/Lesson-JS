console.log("Библиотеки 1")
let mas = [107, 54, 17, 68, 21, 0, 55, 22];

console.log("Входной массив: " + mas);

var min
min = findMin(mas);
	
var max
max = findMax(mas);

var medium
medium = findMedium(mas);

let copy = clone(mas);

document.getElementById('Libr').innerHTML = "mas = " + mas + "<br/><b>" + " min = " + min + "<br/><b>" + " max = " + max + "<br/><b>" + " medium = " + medium + "<br/><b>" + " Copy mas = " + copy + '</table>';