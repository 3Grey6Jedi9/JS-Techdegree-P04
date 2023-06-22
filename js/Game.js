/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


const keyButtons = document.querySelectorAll('#qwerty .keyrow .key');
let letterButton;

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

    handleInteraction(letter) {

        keyButtons.forEach(button=> {

            button.addEventListener('click', function(event){

                const clickedButton = event.target;

                keyButtons.forEach(btn => {

                    if (btn === clickedButton) {

                        btn.disabled = true;

                        const isMatch = this.activePhrase.includes(letter);

                        if(!isMatch) {

                            btn.class.List.add('wrong');
                            this.removeLife();


                        } else {

                            btn.class.List.add('chosen');
                            this.showMatchedLetter(this.activePhrase);
                            this.checkForWin()
                            // If the player have won the game call the gameOver() method.


                        }



                    }

                })

            })

        })




    }


    removeLife(){

        const heartImages = document.querySelectorAll('#scoreboard .tries img');
        const missed = document.querySelector('#scoreboard .tries:last-child');

        if (heartImages.length > 0) {

            heartImages[heartImages.length - 1].src = 'images/lostHeart.png';
            missed.classList.remove('tries');
            missed.classList.add('lost');

        }

        this.missed++;

        if (this.missed === 5) {

            this.gameOver()

        }


        }


    }

    checkForWin(){




    }


    gameOver(){




    }



    startGame(){

        // Hides the start screen overlay

        this.activePhrase = getRandomPhrase();

        addPhraseToDisplay(this.activePhrase);



    }




}