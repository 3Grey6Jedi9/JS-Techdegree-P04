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

    checkLetter(letterGuessed) {

        for (let i = 0; i<this.phrase.length; i++) {

            if (letterGuessed === this.phrase[i] && patterLetter.test(letterGuessed)) {

                    return true;


            } else {

                return false;


            }



        }




    }

    showMatchedLetter(letter){

        for (let i = 0; i < this.phrase.length; i++) {


            if () // Check if it is an space and a non letter

        }

        if (this.checkLetter(letter)) {

        li.classList.add('letter');

        li.style.display = 'block';

        } else if (!this.checkLetter(letter)) {

                li.style.display = 'none';


        }


    }
}





