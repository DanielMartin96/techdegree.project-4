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

  handleInteraction() {}

  checkForWin() {
    const lettersLeft = this.activePhrase["phrase"].length - 1; // taking away one character for the space bar
    console.log(lettersLeft);
    if (lettersLeft === phrase.letterGuessed) {
      return true;
    }
    return false;
  }

  removeLife() {
    let life = document.getElementsByClassName("tries")[0];
    life.classList.remove("tries");
    const image = life.getElementsByTagName("img")[0];
    image.src = "images/lostHeart.png";
    this.missed++;
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  gameOver(boolean) {
    if (boolean) {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").classList.remove("start");
      document.getElementById("overlay").classList.add("win");
      document.getElementById("game-over-message").innerHTML =
        "CONGRATULATIONS - WINNER";
    } else {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").classList.remove("start");
      document.getElementById("overlay").classList.add("lose");
      document.getElementById("game-over-message").innerHTML =
        "GAME OVER - LOSER";
    }
  }
}
