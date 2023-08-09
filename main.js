const input=document.querySelector("#input");
const list=document.querySelector("#list-container");
function additem() {
    if(input.value===""){
        alert("write something to add");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    savedata();
}
list.addEventListener("click", function (e) {
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}
function showdata() {
    list.innerHTML=localStorage.getItem("data");
}
showdata();