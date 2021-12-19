console.log("Библиотеки 3")
largeTable = "";
part = 0;
function fieldMake(size, n) 
{
    part = n;
    attempt = 3;	
    size2 = size;	
    prize=3; 
	
	touch = "<td style = 'background-color:darkgray; text-indent:5; text-align:center; font-weight:bold; font-size:0px; color:black; width:" + size + "; height:" + size + "'";

    touch += " onclick = 'touchField(this,size2)'></td>"; // обработка нажатия

	tableStile = "<table id = 'largeTable' style = 'background-color:black; margin:auto; cursor:pointer';  border = 7px"; // стиль таблицы

    document.write(tableStile); // отрисовка таблицы
    for (i = 0; i < part; i++) 
	{
       document.write("<tr>"); //строки
       for (j = 0; j < part; j++) 
	   {
		   document.write(touch); //ячейки
       }     
       document.write("</tr>");
    }
    document.write("</table>");
    largeTable = document.getElementById("largeTable") // ссылка на таблицу
    error = document.getElementById('error');
    error.innerHTML = 'Осталось попыток ' + attempt;
}




function touchField(col,size2) 
{
   column = col.cellIndex;
   for (i = 0; i < part; i++) 
   {
		row = largeTable.rows[i];
		if (row.cells[column] == col) 
		{
			line = i;
		} 
   }
	
   if(attempt>0)
   {
		if (largeTable.rows[line].cells[column].innerHTML % 2)  // 1-красный; 0-зеленый
		{
			largeTable.rows[line].cells[column].style.background = 'red';
			line=line+1
			column=column+1
			document.getElementById('answer').innerHTML = "Ячейка " + line + ":" + column + " без приза" + '</table>';
			attempt=attempt-1;
			line=line-1
			column=column-1
		}
		else
		{
			largeTable.rows[line].cells[column].style.background = 'green';
			line=line+1
			column=column+1
			document.getElementById('answer').innerHTML = "Ячейка " + line + ":" + column + " с призом" + '</table>';
			line=line-1
			column=column-1
			picture=prize+".jpg";

			prize=prize-1;
			if( prize==0)
			{
				prize=3;
			}
      
			icon = "<img style=' width:"+size2+"; height:"+size2+";' src='"+picture+"'>"; 
			largeTable.rows[line].cells[column].innerHTML= icon;
		}
		error.innerHTML = 'Осталось попыток ' + attempt;
	}
	else 
	{ 
		alert("У вас не осталось попыток, Вы проиграли"); 
	}
}


function randLocat() 
{
	gen = part * part;
	arrFirst = new Array(gen);
	arrSecond = new Array(gen);
	for (picture = 0; picture < gen; picture++) 
	{
		arrFirst[picture] = 0;
		arrSecond[picture] = true;
	}
	intg = intg2 = 0;
	while (intg < gen && intg2++ < 10000) 
	{
		picture = Math.floor(Math.random() * (gen + 1));
		if (picture > 0 && arrSecond[picture - 1]) 
		{
			arrSecond[picture - 1] = false;
			arrFirst[intg] = picture;
			intg++;
		}
	}
	intg = 0;
	for (i = 0; i < part; i++) 
	{
		row = largeTable.rows[i];
		for (j = 0; j < part; j++) 
		{
			picture = arrFirst[intg++];
			row.cells[j].innerHTML = (picture > gen - 1) ? "" : picture;
		}
	}
}