console.log("Homework 4.1");

function foo (obj, parametr, count){
    
    for(let i = 0; i < count; i++)
	{      
		obj[i] = {
			name: 'static',
			count: i
		}	
	}

    return obj;
}

let a = {
	name: 'static',
	count: 0
}

console.log(foo(a, 'count', 10));