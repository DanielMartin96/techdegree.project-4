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
  addPhraseToDisplay(phrase) {
    // need to get phrase length
    for (i = 0; i < phrase.length; i++) {
      const li = document.createElement("li");
      // get index of the phrase character
      // console.log the value
      // if statement to see if its a character or space
      // set attribute relevant to the index of the word
      // class "hide letter" and then the relevant character
    }
  }
}
