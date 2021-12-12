console.log("Homework 4.5")

let arr = [
	{'price' : 10, 
	'count' : 2 
	},
	{'price' : 5, 
	'count' : 5
	},
	{'price' : 8,
 	'count' : 5 
	},
	{'price' : 12,	
	'count' : 4 
	},
	{'price' :8,
	'count' : 4
	}
]

arr.sort(function( x, y ) 
	{
	return x.price - y.price
	}
)
console.log("После сортировки: ", arr)