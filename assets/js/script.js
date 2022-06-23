// LINK HTML ELEMENTS 
var textArea09 = document.getElementById("text-09");
var textArea10 = document.getElementById("text-10");
var textArea11 = document.getElementById("text-11");
var textArea12 = document.getElementById("text-12");
var textArea13 = document.getElementById("text-13");
var textArea14 = document.getElementById("text-14");
var textArea15 = document.getElementById("text-15");
var textArea16 = document.getElementById("text-16");
var textArea17 = document.getElementById("text-17");

// MOMENT - CURRENT DAY
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do'));

// CHECK TIME AND SET BACKGROUND COLOURS ACCORDINGLY
function colourBlocks () {
    
    var currentTime = moment().get('hour');
    console.log(currentTime);

    if (currentTime === 09) {
        textArea09.classList.add("present"),
        textArea10.classList.add("future"),
        textArea11.classList.add("future"),
        textArea12.classList.add("future"),
        textArea13.classList.add("future"),
        textArea14.classList.add("future"),
        textArea15.classList.add("future"),
        textArea16.classList.add("future"),
        textArea17.classList.add("future");
    } else if (currentTime === 10) {
        textArea09.classList.add("past"),
        textArea10.classList.add("present"),
        textArea11.classList.add("future"),
        textArea12.classList.add("future"),
        textArea13.classList.add("future"),
        textArea14.classList.add("future"),
        textArea15.classList.add("future"),
        textArea16.classList.add("future"),
        textArea17.classList.add("future");
    } else if (currentTime === 11) {
        textArea09.classList.add("past"),
        textArea10.classList.add("past"),
        textArea11.classList.add("present"),
        textArea12.classList.add("future"),
        textArea13.classList.add("future"),
        textArea14.classList.add("future"),
        textArea15.classList.add("future"),
        textArea16.classList.add("future"),
        textArea17.classList.add("future");
    } else if (currentTime === 12) {
        textArea09.classList.add("past"),
        textArea10.classList.add("past"),
        textArea11.classList.add("past"),
        textArea12.classList.add("present"),
        textArea13.classList.add("future"),
        textArea14.classList.add("future"),
        textArea15.classList.add("future"),
        textArea16.classList.add("future"),
        textArea17.classList.add("future");
    } else if (currentTime === 13) {
        textArea09.classList.add("past"),
        textArea10.classList.add("past"),
        textArea11.classList.add("past"),
        textArea12.classList.add("past"),
        textArea13.classList.add("present"),
        textArea14.classList.add("future"),
        textArea15.classList.add("future"),
        textArea16.classList.add("future"),
        textArea17.classList.add("future");
    } else if (currentTime === 14) {
        textArea09.classList.add("past"),
        textArea10.classList.add("past"),
        textArea11.classList.add("past"),
        textArea12.classList.add("past"),
        textArea13.classList.add("past"),
        textArea14.classList.add("present"),
        textArea15.classList.add("future"),
        textArea16.classList.add("future"),
        textArea17.classList.add("future");
    } else if (currentTime === 15) {
        textArea09.classList.add("past"),
        textArea10.classList.add("past"),
        textArea11.classList.add("past"),
        textArea12.classList.add("past"),
        textArea13.classList.add("past"),
        textArea14.classList.add("past"),
        textArea15.classList.add("present"),
        textArea16.classList.add("future"),
        textArea17.classList.add("future");
    } else if (currentTime === 16) {
        textArea09.classList.add("past"),
        textArea10.classList.add("past"),
        textArea11.classList.add("past"),
        textArea12.classList.add("past"),
        textArea13.classList.add("past"),
        textArea14.classList.add("past"),
        textArea15.classList.add("past"),
        textArea16.classList.add("present"),
        textArea17.classList.add("future");
    } else if (currentTime === 17) {
        textArea09.classList.add("past"),
        textArea10.classList.add("past"),
        textArea11.classList.add("past"),
        textArea12.classList.add("past"),
        textArea13.classList.add("past"),
        textArea14.classList.add("past"),
        textArea15.classList.add("past"),
        textArea16.classList.add("past"),
        textArea17.classList.add("present");
    };
}
colourBlocks();

// SAVE INPUTS TO LOCAL STORAGE WHEN SAVE BUTTON CLICKED
// var todos = [];

// // The following function renders items in a todo list as <li> elements
// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// // This function is being called below and will run when the page loads.
// function init() {
//   // Get stored todos from localStorage
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // This is a helper function that will render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Add submit event to form
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

// // Calls init to retrieve data and render it to the page on load
// init()

// ADD CONFIRMATION TEXT AT TOP OF PAGE WHEN INPUT SAVED TO LOCAL STORAGE

// RECALL SAVED INPUTS FROM LOCAL STORAGE WHEN PAGE REFRESHED

// CLEAR LOCAL STORAGE IF TIME IS AFTER 00:00

