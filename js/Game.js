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
    const phrase = [new Phrase("Hello world!"), new Phrase("Goodybye world!")];
    phrases.push(phrase);
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    // need to get a random number between 0 - phrases.length
    const randomPhrase = phrases[Math.floor(Math.random() * (5 - 0 + 1)) + 0];
    return randomPhrase;
  }
}
