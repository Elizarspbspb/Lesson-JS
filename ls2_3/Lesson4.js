//var pass = "Abs&t678910!";  // Yes
var pass = "Abs&ttteeettt9!"; // Erorr
if(pass.length < 9)
{
	alert("Error, your pass less 9 symbols");
}
var count = 0;
if(/[A-Z]/.test(pass))
{
	count+=1;
}
if(/[a-z]/.test(pass))
{
	count+=1;
}
if(/[0-9]{2}/.test(pass))
{
	count+=1;
}
if(/[!, $, #, %]/.test(pass))
{
	count+=1;
}
if(count < 4)
{
	alert("Error, pass not exist");
}
else
	alert("PASS OKEY");

//var pass = "Abs&t678910";   // Erorr
//var pass = "abs&t678910!";  // Erorr
//var pass = "ABS&T678910!"; // Erorr
//var pass = "Abs&ttteeettt6!"; // Erorr
//var pass = "Abs&6!"; // Erorr
/*var isUpperCase;
let flag1=0, flag2 = 0;
var count = 0;
if(pass.length < 9)
{
  console.log("Error, your pass less 9 symbols");
  return 0;
}
else
{
  for(var i=0; i < pass.length; i++)
  {
    //if(str.charCodeAt(i)>127){
    //if((pass[i]>='65' && pass[i]<='90') || (pass[i]>='97' && pass[i]<='122'))
    if((pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90) || (pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=122))
    {
      isUpperCase = pass[i].toUpperCase()==pass[i];
      if(isUpperCase==false)
        flag1 = 1;
      else
        flag2 = 1;
      console.log(isUpperCase);
    }
  }
  console.log(flag1);
  console.log(flag2);
  if(flag1 != 1 || flag2 != 1)
  {
    console.log("Error, your pass without upper or lower case");
    return 0;
  }
  console.log("___________________");
  for(var i=0; i < pass.length; i++)
  {
    if((pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57))
    {
      ++count;
    }
  }
  console.log(count);
  if(count<2)
  {
    console.log("Error, your pass less 2 numbers");
    return 0;
  }
  console.log("___________________");
  var mas = ['!', '$', '#', '%'];
  let flag3 = 0;
  for(var i=0; i < pass.length; i++)
  {
    for(var y=0; y < mas.length; y++)
    {
      if(pass[i] == mas[y])
      {
        flag3 = 1;
      }
    }
  }
  if(flag3<1)
  {
    console.log("Error, your pass not content muster symbols");
    return 0;
  }
}
console.log(pass);*/
