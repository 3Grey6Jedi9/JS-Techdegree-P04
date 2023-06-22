/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


const discomposedPhrase = document.querySelector('#phrase ul');

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

    checkLetter() {



    }

    showMatchedLetter(){



    }
}





