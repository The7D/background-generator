var add = document.querySelector("#add");
var taskInput = document.querySelector("#input");
var ul = document.querySelector("ul");
var msg = document.querySelector(".alert");

var gradient = document.querySelector("#gradient");
var color1 = document.querySelector(".colorOne");
var color2 = document.querySelector(".colorTwo");
var forH1bg = document.querySelector("h1");

function isLengthOK() {
    if (taskInput.value.length > 0) {
        createListItem();
    } else {
        alert("Please insert some task, then click on 'Add' Button");

    }
}


function chkForKeypress(event){
    if (taskInput.value.length > 0 && event.keyCode === 13) {
        createListItem();
    } else if (taskInput.value.length == 0 && event.keyCode === 13) {
        alert("Please insert some task, then click on 'Add' Button");
    }

}

function createListItem() {

    var li = document.createElement("li");
    li.classList.add("li-style");
    li.appendChild(document.createTextNode(taskInput.value.trim()));
    ul.appendChild(li);
    taskInput.value = "";

    li.addEventListener("click",function(){
        console.log("sinlge click working");
        li.classList.toggle("finished");
    })

    li.addEventListener("dblclick",function(){
        console.log("dbl working");
        ul.removeChild(li);
    })

}


function itemOnClick() {

    isLengthOK();
}

function itemOnKeypress(event) {
    chkForKeypress(event);
}

function bgColor(){
    gradient.style.background = 
    "linear-gradient( to right, "+ color1.value +","+ color2.value +")";

}


add.addEventListener("click", itemOnClick);

taskInput.addEventListener("keypress", itemOnKeypress);

color1.addEventListener("input", bgColor);
color2.addEventListener("input", bgColor);
