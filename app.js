var add = document.querySelector("#add");
var taskInput = document.querySelector("#input");
var temp;
var ulTaskComplete = document.querySelector("#complete")
var ul_incomplete = document.querySelector("#incomplete");

var msg = document.querySelector(".alert");

var gradient = document.querySelector("#gradient");
var color1 = document.querySelector(".colorOne");
var color2 = document.querySelector(".colorTwo");
var forH1bg = document.querySelector("h1");

const isLengthOK = () => {
    if (taskInput.value.trim().length > 0) {
        createListItem();
    } else {
        alert("Please insert some task, then click on 'Add' Button");
        taskInput.value = "";
    }
}


const chkForKeypress = event => {
    if (taskInput.value.trim().length > 0 && event.keyCode === 13) {
        createListItem();
    } else if (taskInput.value.trim().length == 0 && event.keyCode === 13) {
        alert("Please insert some task, then click on 'Add' Button");
        taskInput.value = "";
    }

}

const createListItem = () => {

    let li = document.createElement("li");
    li.classList.add("li-style");
    li.appendChild(document.createTextNode(taskInput.value.trim()));
    ul_incomplete.appendChild(li);
    temp = taskInput.value;

    taskInput.value = "";

    li.addEventListener("click",function(){
        console.log("sinlge click working");
        li.classList.toggle("finished");
    })

    li.addEventListener("dblclick",function(){
        console.log("dbl working");
        // taskInput.value = ulTaskComplete.value;
        console.log(temp, "hello");
        
        let liComplete = document.createElement("li");
        liComplete.appendChild(document.createTextNode(temp));
        ulTaskComplete.appendChild(liComplete);
        
        ul_incomplete.removeChild(li);
    })

}


const itemOnClick = () => {

    isLengthOK();
}

itemOnKeypress = event => {
    chkForKeypress(event);
}

const bgColor = () => {
    gradient.style.background = 
    "linear-gradient( to right, "+ color1.value +","+ color2.value +")";

}


add.addEventListener("click", itemOnClick);

taskInput.addEventListener("keypress", itemOnKeypress);

color1.addEventListener("input", bgColor);
color2.addEventListener("input", bgColor);
