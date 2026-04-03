// 1️⃣ تغيير نص العنوان
function changeHeadingText() {
  const heading = document.getElementById("main-heading");
  heading.textContent = "DOM Manipulation Challenge";
}

// 2️⃣ تغيير لون الصندوق
function changeBoxColor() {
  const box = document.getElementById("box-to-modify");
  box.style.backgroundColor = "lightblue";
}

// 3️⃣ إضافة عنصر جديد للقائمة
function addNewItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";

  // (اختياري عشان نفس التنسيق)
  newItem.classList.add("item");

  const list = document.getElementById("item-list");
  list.appendChild(newItem);
}

// 4️⃣ إضافة highlight للباراقراف
function highlightParagraph() {
  const para = document.querySelector(".content-para");
  para.classList.add("highlight");
}

// 5️⃣ حذف العنصر
function removeElement() {
  const element = document.getElementById("to-be-removed");
  element.remove();
}

