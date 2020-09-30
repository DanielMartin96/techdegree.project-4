/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement("li");
      const ul = document.getElementsByTagName("ul")[0];
      if (this.phrase[i] === " ") {
        li.innerHTML = " ";
        li.setAttribute("class", "hide space");
        ul.appendChild(li);
      } else {
        const li = document.createElement("li");
        li.innerHTML = this.phrase[i];
        li.setAttribute("class", `hide letter ${this.phrase[i]}`);
        ul.appendChild(li);
      }
    }
  }

  checkLetter(e) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (e.target === this.phrase[i]) {
        console.log("One is correct!");
      } else {
        // remove life
      }
    }
  }

  showMatchedLetter() {}
}
