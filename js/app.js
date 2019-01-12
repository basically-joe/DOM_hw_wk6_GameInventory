document.addEventListener("DOMContentLoaded", () => {
  console.log("javascript is listening");

  const newGameForm = document.querySelector("#new-game-form");
  newGameForm.addEventListener("submit", handleNewGameFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);
});

const handleNewGameFormSubmit = function(event) {
  event.preventDefault();

  const gameInventoryItem = createGameInventoryItem(event.target);
  const inventoryItem = document.querySelector('#game-inventory');
  inventoryItem.appendChild(gameInventoryItem);

  event.target.reset();
};

const createGameInventoryItem = function(form) {
  const gameInventoryItem = document.createElement("ul");
  gameInventoryItem.classList.add("game-inventory-item");

  const title = document.createElement('li');
  title.textContent = form.title.value;
  gameInventoryItem.appendChild(title);

  const category = document.createElement("li");
  category.textContent = form.category.value;
  gameInventoryItem.appendChild(category);

  const pegi = document.createElement("li");
  pegi.textContent = form.pegi.value;
  gameInventoryItem.appendChild(pegi);

  return gameInventoryItem;
};

const handleDeleteAllClick = function(event) {
  const inventoryItem = document.querySelector('#game-inventory');
  inventoryItem.innerHTML = '';
};
