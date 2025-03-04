const listEnter = document.getElementById("toDoListEnter");
const myLists = document.getElementById("myList");

//creates new element for list
function taskElement(word) {
    const li = document.createElement("li");
    li.textContent = word;

    const cross = document.createElement("span");
    cross.textContent = '\u00d7';
    cross.className = "cross";

    li.appendChild(cross);
    return li;
}

function addTask() {
    const word = listEnter.value.trim(); //trim removes any excess text

    if (word === '') {
        alert("you must enter a task to add to list.") //asks user to enter a task if its empty
    } else {
        const newTask = taskElement(word); 
        myLists.appendChild(newTask);
        listEnter.value = ''; //resets listEnter
        saveStorage(); //saves to storage
    }

    
}

myLists.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("done"); //toggles done on the item
        saveStorage(); 
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //removes from myLists when clicked
        saveStorage(); 
    }
}, false);

function saveStorage(){
    localStorage.setItem("info", myLists.innerHTML); //stores data to device
}

function showTask(){
    myLists.innerHTML = localStorage.getItem("info"); //requests data stores
}
showTask(); //shows stored data 
