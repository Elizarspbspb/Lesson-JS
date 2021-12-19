function findMin(array){
	let min = array[0]
	for(let i = 1; i < array.length; i++)
	{
        if(array[i] < min)
		{
            min = array[i];
		}
    }
    console.log("Минимум: " + min);
	return min
}

function findMax(array){
	let max = array[0]
	for(let i = 1; i < array.length; i++)
	{
        if(array[i] > max)
		{
            max = array[i];
		}
    }
    console.log("Максимум: " + max);
	return max
}

function findMedium(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++)
	{
        sum+=array[i];
    }
    sum/=array.length;
    console.log("Среднее арифметическое массива: " + sum);
	return sum
}

function clone(array){
    let copy = [];
    for(let i = 0; i < array.length; i++)
	{
        copy[i] = array[i];
    }
    console.log("Клонированный массив: " + copy);
    return copy;
}