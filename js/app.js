document.addEventListener("DOMContentLoaded", () => {
  console.log("javascript is listening");

  const newGameForm = document.querySelector("#new-game-form");
  newGameForm.addEventListener("submit", handleNewGameFormSubmit);
});
