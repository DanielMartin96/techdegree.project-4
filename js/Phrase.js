/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.lettersGuessed = 0;
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement("li");
      const ul = document.getElementsByTagName("ul")[0];
      if (this.phrase[i] === " ") {
        li.setAttribute("class", `hide space ${this.phrase[i]}`);
        ul.appendChild(li);
      } else {
        const li = document.createElement("li");
        li.innerHTML = this.phrase[i];
        li.setAttribute("class", `hide letter ${this.phrase[i]}`);
        ul.appendChild(li);
      }
    }
  }

  checkLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter == this.phrase[i]) {
        return true;
      }
    }
    return false;
  }

  showMatchedLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.getElementsByClassName(`hide letter ${letter}`)[i];
      li.setAttribute("class", `show letter ${letter}`);
      // take away 1 to lettersLeft variable in checkForWin
      this.lettersGuessed += 1;
    }
  }
}
