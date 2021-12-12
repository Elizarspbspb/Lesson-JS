console.log("Homework 4.4")

function factorialRekurs(number)
{
	if(number != 1)
	{
		result = number * factorialRekurs(number - 1)
	}
	else
	{
		result = 1
	}
	return result
}

console.log("Факториал %s (%s!) = ", fact = prompt("Введите число"), fact,  factorialRekurs(fact));