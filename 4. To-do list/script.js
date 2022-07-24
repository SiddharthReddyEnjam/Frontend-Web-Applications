"use strict";

const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const emptyButton = document.getElementById("empty-button");
const saveButton = document.getElementById("save-button");

/////////////////////////////////////////////////////////////
const toDoEntryBox = document.getElementById("todo-entry-box");
const toDoList = document.getElementById("todo-list");

const newToDoItem = (itemText, completed) => {
  const toDoItem = document.createElement("li");
  const toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
};

const addToDoItem = () => {
  const itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
};

function toggleToDoItemState() {
  this.classList.toggle("completed");
}

const clearCompletedToDoItems = () => {
  const completedItems = document.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
};

const emptyList = () => {
  const todoItemclear = toDoList.children;

  while (todoItemclear.length > 0) {
    todoItemclear.item(0).remove();
  }
};

////////////////////STORING DATA using SAVELIST////////////////////////////
// let arr = [];
// arr.push("something to store");
// arr.push("something else to store");
// alert(arr[0]);

// FUNCTION CALLING
addButton.addEventListener("click", addToDoItem);
clearButton.addEventListener("click", clearCompletedToDoItems);
emptyButton.addEventListener("click", emptyList);
// saveButton.addEventListener("click", saveList);
