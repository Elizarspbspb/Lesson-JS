function range(a, b, c)
{
	b = b/c;
	var mas = [];
	mas[0] = a;
	for(var i=1; i<b; i++)
	{
		mas[i] = mas[i-1] + c;
	}
	return mas;
}

var start = 1; 
var end = 10; 
var sh = 2;

console.log(range(start, end, sh));
