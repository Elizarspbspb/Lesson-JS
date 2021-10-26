console.log("HEllo");
var A = [12,4,3,10,1,20];
var max1 = A.indexOf(Math.max(A));
var min1 = A.indexOf(Math.min(A));
console.log(A);
A.splice(max1);
A.splice(min1);
console.log(A);

