var string_number = "1234"
var i = string_number.length;
console.log("i = " + i);
let num = parseInt(string_number); // становится числом 1234
let num2 = 0, num3 = 0;
for (var ii = 0; ii < i; ii++) {
    num2 = num2 + num%10;
    num3 = num%10;
    num = (num - num3) / 10;
    }
console.log("Сумма = " + num2);


