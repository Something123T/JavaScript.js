const inputBox=document.querySelector('#inputBox');
const Listcontainer=document.querySelector('#list-container');


function AddTask(){
    if(inputBox.value===""){
        alert("you must write something ! ");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        Listcontainer.appendChild(li);

    }
}



