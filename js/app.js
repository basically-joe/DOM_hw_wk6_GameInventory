document.addEventListener("DOMContentLoaded", () => {
  console.log("javascript is listening");

  const newGameForm = document.querySelector("#new-game-form");
  newGameForm.addEventListener("submit", handleNewGameFormSubmit);
});

const handleNewGameFormSubmit = function(event) {
  event.preventDefault();

  const gameInventoryItem = createGameInventoryItem(event.target);
  const inventoryItem = document.querySelector('#game-inventory');
  inventoryItem.appendChild(gameInventoryItem);

};

const createGameInventoryItem = function(form) {
  const gameInventoryItem = document.createElement("li");
  gameInventoryItem.classList.add("game-inventory-item");

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  gameInventoryItem.appendChild(title);

  return gameInventoryItem;
};
