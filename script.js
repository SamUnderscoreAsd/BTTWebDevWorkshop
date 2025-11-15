removeButton = document
  .getElementById("removeButton")
  .addEventListener("click", () => {
    console.log("clicked");
  });

addButton = document
  .getElementById("addButton")
  .addEventListener("click", () => {
    console.log("clicked");
  });

function removeLi() {
  const groceryList = document.getElementById("groceryList");
  groceryList.removeChild(groceryList.lastChild);
}

function addLi() {
  const groceryList = document.getElementById("groceryList");

  var newItem = document.createElement("li");
  var text = prompt("What is the name of your task?");

  var textNode = document.createTextNode(text);
  newItem.appendChild(textNode);

  groceryList.appendChild(newItem);
}
