/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const discomposedPhrase = document.querySelector('#phrase ul');
const patterSpace = /\s/g;
const patterRest = /[^a-z\s]/g;
const patterLetter = /[a-z]/g;

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      const letter = this.phrase[i];
      const li = document.createElement('li');

      if (patterSpace.test(letter)) {
        li.className = 'space';
        li.textContent = ' ';
      } else if (patterRest.test(letter)) {
        li.className = 'character';
        li.textContent = letter;
      } else if (patterLetter.test(letter)) {
        li.className = `hide letter ${letter}`;
        li.textContent = letter;
      }

      discomposedPhrase.appendChild(li);
    }
  }

  checkLetter(letter, guess) {
    return letter === guess;
  }

  showMatchedLetter(guess) {
    const lis = discomposedPhrase.children;
    for (let i = 0; i < lis.length; i++) {
      const li = lis[i];
      if (li.classList.contains('letter')) {
        const letter = li.textContent;
        if (this.checkLetter(letter, guess)) {
          li.classList.remove('hide');
        }
      }
    }
  }
}







