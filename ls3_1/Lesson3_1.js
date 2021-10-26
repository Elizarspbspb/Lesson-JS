function array_sr(a, b)
{
	var max = 0;
	if(a.length != b.length)
	{
		return false;
	}
	/*if(a.length > b.length)
		max = a.length;
	else */
		max = b.length;
		
	for(var i = 0; i < max; i++)
	{
		if(a[i]!=b[i])
		{
			return false;
		}
	}
	return true;
}

var mas1 = [1, 2, 3, 5]; 
var mas2 = [1, 2, 3, 5, 7]; 

console.log(array_sr(mas1, mas2));
