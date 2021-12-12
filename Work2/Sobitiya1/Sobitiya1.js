console.log("СОбытия 1")
let divel = document.getElementsByTagName("div");
for (let i = 0; i < divel.length; i++)
{
    divel[i].onclick = function() 
	{
        if (this.style.backgroundColor == "")
		{
			this.style.backgroundColor = "green";
		}
        else 
		{
            this.style.backgroundColor = ""
		}
    };
}