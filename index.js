function changeHeadingText() {
  const heading = document.getElementById("main-heading");
  if (heading) {
    heading.textContent = "DOM Manipulation Challenge";
  }
}

function changeBoxColor() {
  const box = document.getElementById("box-to-modify");
  if (box) {
    box.style.backgroundColor = "lightblue";
  }
}

function addNewItem() {
  const list = document.getElementById("item-list");
  if (list) {
    const li = document.createElement("li");
    li.textContent = "New Item";
    list.appendChild(li);
  }
}

function highlightParagraph() {
  const para = document.querySelector(".content-para");
  if (para) {
    para.classList.add("highlight");
  }
}

function removeElement() {
  const element = document.getElementById("to-be-removed");
  if (element) {
    element.remove();
  }
}
