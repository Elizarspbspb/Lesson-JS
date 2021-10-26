console.log("Homework 1.4");
let A = [];
var size = 999999;
let si = 100000;
//var size = 9999;
//let si = 1000;
let i = 0;
let r = 0;
let ui = 0;
let k = 1;
let p = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
var str2 = 0;
for(i = 1; i <= size; i++)
{
	let C = [];
	let V = [0, 0, 0, 0, 0, 0];
	//let V = [0, 0, 0, 0];
	for(r = 0; r < 6; r++)
	//for(r = 0; r < 4; r++)
	{	
		C[r]=parseInt(i/si);
		V[r] = C[r] - (V[r-p]*10+V[r-p2]*100 + V[r-p3]*1000 + V[r-p4]*10000 + V[r-p5]*100000);
		//V[r] = C[r] - (V[r-p]*10+V[r-p2]*100 + V[r-p3]*1000);
		si=si/10;
		if(p4==4)
		{
			p5 = 5;
		}
		if(p3==3)
		{
			p4 = 4;
		}
		if(p2==2)
		{
			p3 = 3;
		}
		if(p==1)
		{
			p2 = 2;
		}
		p=1;
		k = k * 10;
	}
	A[i-1] = V;
	str2 = A[i-1].join('');
	console.log(str2);
	k=1;
	si=100000;
	//si=1000;
	V = [0, 0, 0, 0, 0, 0];
	//V = [0, 0, 0, 0];
	p=0;
	p2 = 0;
	p3 = 0;
	p4 = 0;
	p5 = 0;
	
}
console.log(A);
console.log("---------------");
let sum1 = 0;
let sum2 = 0;
let count = 0;
for(let y = 0; y < size; y++)
{
		sum1 = A[y][0] + A[y][1] + A[y][2];
		sum2 = A[y][3] + A[y][4] + A[y][5];
		if(sum1 == sum2)
		{
			count=count+1;
			str2 = A[y].join('');
			console.log(str2);
		}
}
console.log("Счастливых билетов = " + count);
