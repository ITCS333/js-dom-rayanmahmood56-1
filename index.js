function changeHeadingText() {
  document.getElementById("main-heading").textContent = "DOM Manipulation Challenge";
}

function changeBoxColor() {
  document.getElementById("box-to-modify").style.backgroundColor = "lightblue";
}

function addNewItem() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("item-list").appendChild(li);
}

function highlightParagraph() {
  document.querySelector(".content-para").classList.add("highlight");
}

function removeElement() {
  document.getElementById("to-be-removed").remove();
}
