/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */




const discomposedPhrase = document.querySelector('#phrase ul');
const patternSpace = /\s/;
const patternLetter = /[a-z]/;


// Creating the Phrase class

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }


  addPhraseToDisplay() { // This method displays the phrase
    for (let i = 0; i < this.phrase.length; i++) {
      const letter = this.phrase[i];
      const li = document.createElement('li');

      if (patternSpace.test(letter)) {
        li.className = 'space';
        li.textContent = ' ';
      } else if (patternLetter.test(letter)) {
        li.className = 'hide letter';
        li.textContent = letter;
      }

      discomposedPhrase.appendChild(li);
    }
  }



  checkLetter(letter, guess) { // This method checks if the letter enter is part of the phrase or not
    return letter.toLowerCase() === guess.toLowerCase();
  }




  showMatchedLetter(guess) { // This method displays the letter guessed if it is part of the phrase
    const lis = discomposedPhrase.children;
    for (let i = 0; i < lis.length; i++) {
      const li = lis[i];
      if (li.classList.contains('letter')) {
        const letter = li.textContent;
        if (this.checkLetter(letter, guess)) {
          li.classList.remove('hide');
          li.classList.add('show');
        }
      }
    }
  }
}







