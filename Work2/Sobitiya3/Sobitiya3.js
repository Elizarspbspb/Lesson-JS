console.log("СОбытия 3")
let user = {
    name: "Ivanov Ivan",
    logo: "cat.png"
}

let coments = document.querySelector(".comenters");
let send = document.querySelector(".button1");

send.addEventListener("click", addCommit);

function addCommit(e){
    let coment = document.getElementById("coment");
    coment.style.display = "flex";
    let date = new Date();
    
    let item = document.createElement("div");
    item.classList.add("line1");
    
    let avatar = document.createElement("img");
    avatar.src = user.logo;
    avatar.style.width = '100px';
    avatar.style.height = '100px';
    avatar.style.borderTopLeftRadius = '50px';
    avatar.style.borderTopRightRadius = '50px';
    
    let name2 = document.createElement("h5");
    name2.style.display = "inlineBlock";
    name2.style.margin = '0';
    name2.style.padding = '5px';
    name2.innerText = user.name + "\n" + (((date.getUTCHours() + 3) < 10)? "0" + (date.getUTCHours() + 3): (date.getUTCHours() +3)) + ":" + ((date.getUTCMinutes() < 10)? "0" + date.getUTCMinutes():date.getUTCMinutes()) + "\n" + date.getUTCDate() + "." + (date.getUTCMonth() + 1) + "." + date.getUTCFullYear();   
    
    let commit = document.querySelector(".textarea");
	
    let coment2 = document.createElement("P");
    coment2.style.display = "inlineBlock";
    coment2.style.margin = "0";
    coment2.innerText = commit.value;

    item.appendChild(avatar);
    item.appendChild(name2);
    item.appendChild(coment2);
    coments.appendChild(item);
}