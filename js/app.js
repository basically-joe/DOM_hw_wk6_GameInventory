document.addEventListener("DOMContentLoaded", () => {
  console.log("javascript is listening");

  const newGameForm = document.querySelector("#new-game-form");
  newGameForm.addEventListener("submit", handleNewGameFormSubmit);
});

const handleNewGameFormSubmit = function(event) {
event.preventDefault();

const gameInventoryItem = creategameInventoryItem(event.target);
const inventoryItem = document.querySelector('#game-inventory');
inventoryItem.appendChild(gameInventoryItem);

};
