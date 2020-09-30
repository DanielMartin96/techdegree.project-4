/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = createPhrases(5);
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases(num) {
    let phrases = [];
    for (i = 0; i < num; i++) {
      const phrase = "Hello world!";
      phrases.push(phrase);
    }
    return phrases;
  }
}
