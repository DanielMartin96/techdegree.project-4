/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
document.getElementById("btn__reset").addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});

let buttons = document.querySelectorAll("button");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    game.handleInteraction(e.target);
  });
}
