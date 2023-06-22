/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Defining useful variables
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
            li.textContent = `${this.showMatchedLetter(letter)}`;
            discomposedPhrase.appendChild(li);

        }


    }

    checkLetter(letter, guess) {

        if (letter === guess) {

            return true;


        } else {

            return false;


        }


        }


    }

    showMatchedLetter(letter) {

        if (patterSpace.test(letter)){

            li.classList.add('space');
            li.style.display = 'block';


        } else if (patterRest.test(letter)) {


            li.style.display = 'block';

        } else if (patterLetter.test(letter)){

            if (this.checkLetter(letter, guess)){

                li.classList.add('letter');
                li.style.display = 'block';


            } else if (!this.checkLetter(letter, guess)) {

                li.classList.add('letter');
                li.style.display = 'none';


            }


        }

    }

}





