console.log("Homework 4.2")


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let N = 100;
let count = 0;
let array = [N];
    
function selection()
{
    let flag1 = true;
    let flag2 = false;
    while(flag1)
	{
        let num = getRandomInt(100) + 1;
        for(let i = 0; i < N; i++)
		{
            if(array[i] == num)
			{
                flag2 = false;
                break;
            }
            else
			{
                flag2 = true;
			}
        }
        if(flag2 == true)
		{
            array[count] = num;
            flag1 = false;
            count++;
        }
    }
}
for(let i = 0; i < N; i++)
{
    selection();
    document.write(array[count - 1] + " ");
}

