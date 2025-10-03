document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("list");

  addBtn.addEventListener("click", () => {
    const itemText = itemInput.value.trim();

    if (itemText === "") {
      alert("Please enter an item.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = itemText;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    deleteBtn.addEventListener("click", () => {
      list.removeChild(li);
    });
    
    li.appendChild(deleteBtn);
    list.appendChild(li);

    itemInput.value = "";
    itemInput.focus();
  });
});
