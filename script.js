const itemNameInput = document.getElementById("itemNameInput");
const itemImageInput = document.getElementById("itemImageInput");
const addButton = document.getElementById("addItemButton");
const inventoryList = document.getElementById("inventoryList");

addButton.addEventListener("click", addItem);

function addItem() {
    const itemName = itemNameInput.value.trim();
    const itemImage = itemImageInput.value.trim();

    if (itemName && itemImage) {
        const li = document.createElement("li");

        // Создание изображения
        const img = document.createElement("img");
        img.src = itemImage;
        img.alt = itemName;

        // Текст предмета
        const span = document.createElement("span");
        span.textContent = itemName;

        // Кнопка удаления
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => {
            inventoryList.removeChild(li);
        });

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(deleteButton);
        inventoryList.appendChild(li);

        // Очистка полей ввода
        itemNameInput.value = "";
        itemImageInput.value = "";
    }
}



