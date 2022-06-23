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

// SAVE INPUTS TO LOCAL STORAGE WHEN SAVE BUTTON CLICKED
var taskToSave09 = document.getElementById("text-09");
var taskToSave10 = document.getElementById("text-10");
var taskToSave11 = document.getElementById("text-11");
var taskToSave12 = document.getElementById("text-12");
var taskToSave13 = document.getElementById("text-13");
var taskToSave14 = document.getElementById("text-14");
var taskToSave15 = document.getElementById("text-15");
var taskToSave16 = document.getElementById("text-16");
var taskToSave17 = document.getElementById("text-17");

function saveTask() {
  // Save related form data as an object
  var task09 = {TaskToSave: taskToSave09.value,};
  var task10 = {TaskToSave: taskToSave10.value,};
  var task11 = {TaskToSave: taskToSave11.value,};
  var task12 = {TaskToSave: taskToSave12.value,};
  var task13 = {TaskToSave: taskToSave13.value,};
  var task14 = {TaskToSave: taskToSave14.value,};
  var task15 = {TaskToSave: taskToSave15.value,};
  var task16 = {TaskToSave: taskToSave16.value,};
  var task17 = {TaskToSave: taskToSave17.value,};
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("task09", JSON.stringify(task09));
  localStorage.setItem("task10", JSON.stringify(task10));
  localStorage.setItem("task11", JSON.stringify(task11));
  localStorage.setItem("task12", JSON.stringify(task12));
  localStorage.setItem("task13", JSON.stringify(task13));
  localStorage.setItem("task14", JSON.stringify(task14));
  localStorage.setItem("task15", JSON.stringify(task15));
  localStorage.setItem("task16", JSON.stringify(task16));
  localStorage.setItem("task17", JSON.stringify(task17));
}

function renderSavedTask() {
  // Use JSON.parse() to convert text to JavaScript object
  var savedTask09 = JSON.parse(localStorage.getItem("task09"));
  var savedTask10 = JSON.parse(localStorage.getItem("task10"));
  var savedTask11 = JSON.parse(localStorage.getItem("task11"));
  var savedTask12 = JSON.parse(localStorage.getItem("task12"));
  var savedTask13 = JSON.parse(localStorage.getItem("task13"));
  var savedTask14 = JSON.parse(localStorage.getItem("task14"));
  var savedTask15 = JSON.parse(localStorage.getItem("task15"));
  var savedTask16 = JSON.parse(localStorage.getItem("task16"));
  var savedTask17 = JSON.parse(localStorage.getItem("task17"));
  // Check if data is returned, if not exit out of the function
  if (savedTask09 !== null) {
  document.getElementById("text-09").innerHTML = savedTask09.TaskToSave,
  document.getElementById("text-10").innerHTML = savedTask10.TaskToSave,
  document.getElementById("text-11").innerHTML = savedTask11.TaskToSave,
  document.getElementById("text-12").innerHTML = savedTask12.TaskToSave,
  document.getElementById("text-13").innerHTML = savedTask13.TaskToSave,
  document.getElementById("text-14").innerHTML = savedTask14.TaskToSave,
  document.getElementById("text-15").innerHTML = savedTask15.TaskToSave,
  document.getElementById("text-16").innerHTML = savedTask16.TaskToSave,
  document.getElementById("text-17").innerHTML = savedTask17.TaskToSave;
  } else {
    return;
  }
}

// Eventlistenners for save buttons
var saveButton09 = document.getElementById("saveBtn09");
var saveButton10 = document.getElementById("saveBtn10");
var saveButton11 = document.getElementById("saveBtn11");
var saveButton12 = document.getElementById("saveBtn12");
var saveButton13 = document.getElementById("saveBtn13");
var saveButton14 = document.getElementById("saveBtn14");
var saveButton15 = document.getElementById("saveBtn15");
var saveButton16 = document.getElementById("saveBtn16");
var saveButton17 = document.getElementById("saveBtn17");

saveButton09.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});

saveButton10.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});

saveButton11.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});

saveButton12.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});

saveButton13.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});

saveButton14.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});

saveButton15.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});

saveButton16.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});

saveButton17.addEventListener("click", function(event) {
event.preventDefault();
saveTask();
renderSavedTask();
});


// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderSavedTask();
  colourBlocks();
}

init();


// ADD CONFIRMATION TEXT AT TOP OF PAGE WHEN INPUT SAVED TO LOCAL STORAGE

// RECALL SAVED INPUTS FROM LOCAL STORAGE WHEN PAGE REFRESHED

// CLEAR LOCAL STORAGE IF TIME IS AFTER 00:00

