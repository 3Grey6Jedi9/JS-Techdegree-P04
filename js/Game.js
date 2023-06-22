/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor(missed = 0, phrases, activePhrase=null) {

        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;


    }


    getRandomPhrase(){

        let index = Math.floor(Math.random()*this.phrases.length);

        return this.phrases[index];


    }

    startGame(){

        // Hides the start screen overlay

        this.activePhrase = getRandomPhrase();

        addPhraseToDisplay(this.activePhrase);



    }




}