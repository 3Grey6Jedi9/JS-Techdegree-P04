/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const discomposedPhrase = document.querySelector('#phrase ul');
const patternSpace = /\s/g;
const patternRest = /[^a-z\s]/g;
const patternLetter = /[a-z]/g;

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay(phrase) {
    for (let i = 0; i < phrase.length; i++) {
      const letter = phrase[i];
      const li = document.createElement('li');

      if (patternSpace.test(letter)) {
        li.className = 'space';
        li.textContent = ' ';
      } else if (patternRest.test(letter)) {
        li.className = 'character';
        li.textContent = letter;
      } else if (patternLetter.test(letter)) {
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







