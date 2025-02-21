const input=document.querySelector("#input-box")
const listcontainer=document.querySelector("#list-container")
const button=document.querySelector("#button")

function add(){
    if(input.value==""){
        alert("add your task")
    }
    else {
        let li=document.createElement("li")
        li.innerHTML=input.value
        listcontainer.append(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=""
    savedata()
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked")
    savedata()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
 
showtask();
button.addEventListener("click",add)