/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase("Sue Martin"),
      new Phrase("Rory Martin"),
      new Phrase("Daniel Martin"),
      new Phrase("Joseph Martin"),
      new Phrase("Rebecca Martin"),
      new Phrase("Jamie Martin"),
    ];
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomPhrase = this.phrases[
      Math.floor(Math.random() * this.phrases.length)
    ];
    return randomPhrase;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    const randomPhrase = this.getRandomPhrase();
    randomPhrase.addPhraseToDisplay();
    this.activePhrase = randomPhrase;
  }

  handleInteraction(button) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);

      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else if (button.innerHTML === "Start Game") {
      // stops a life being taken away when the player clicks start game
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }

  checkForWin() {
    const lettersLeft = this.activePhrase["phrase"].length - 1; // taking away one character for the space bar
    this.guessed += 1;
    if (lettersLeft === this.activePhrase.lettersGuessed) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    let life = document.getElementsByClassName("tries")[0];
    life.setAttribute("class", "");
    const image = life.getElementsByTagName("img")[0];
    image.src = "images/lostHeart.png";
    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  // the function below changes the color and text on screen depending if the function is true or false
  gameOver(boolean) {
    if (boolean) {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").classList.remove("start");
      document.getElementById("overlay").classList.add("win");
      document.getElementById("game-over-message").innerHTML =
        "CONGRATULATIONS - WINNER";
      this.resetGame(); // resets the game
    } else {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").classList.remove("start");
      document.getElementById("overlay").classList.add("lose");
      document.getElementById("game-over-message").innerHTML =
        "GAME OVER - LOSER";
      this.resetGame(); // resets the game
    }
  }
  resetGame() {
    let button = document.getElementsByTagName("button");
    for (let i = 0; i < button.length; i++) {
      button[i].disabled = false; // enabling keys
      button[i].setAttribute("class", "key"); // changing each button class
    } // enabling all the buttons
    const phrase = document.getElementById("phrase");
    const ul = phrase.getElementsByTagName("ul");
    ul[0].remove(); // deleting the ul
    const newUL = document.createElement("ul"); // creating a new one
    phrase.appendChild(newUL); // appending it to the phrase class
    let scoreboard = document.getElementById("scoreboard");
    let li = scoreboard.getElementsByTagName("li");
    let img = scoreboard.getElementsByTagName("img"); // gets the images to replace
    for (let j = 0; j < 5; j++) {
      img[j].setAttribute("src", "images/liveHeart.png"); // cycles through each image to replace
      li[j].setAttribute("class", "tries"); // should change the class on the
    }
  }
}
