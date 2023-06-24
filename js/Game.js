/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


const keyButtons = document.querySelectorAll('#qwerty .keyrow .key');
let letterButton;
const overlayScreen = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');



class Game {
  constructor(missed = 0, phrases, activePhrase = null) {
    this.missed = missed;
    this.phrases = phrases;
    this.activePhrase = activePhrase;
  }

  startGame() {
    overlayScreen.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.currentPhrase = new Phrase(this.activePhrase);
    this.currentPhrase.addPhraseToDisplay();
  }


  getRandomPhrase() {
    let index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }


handleInteraction(letter) {
  keyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const clickedButton = event.target;
      keyButtons.forEach(btn => {
        if (btn === clickedButton) {
          btn.disabled = true;
          const isMatch = this.activePhrase.includes(letter);
          if (!isMatch) {
            btn.classList.add('wrong');
            this.removeLife();
          } else {
            btn.classList.add('chosen');
            this.showMatchedLetter(letter);
            this.checkForWin();
            if (this.missed < 5) {
              this.gameOver();
            }
          }
        }
      });
    });
  });
}




  removeLife() {
    const heartImages = document.querySelectorAll('#scoreboard .tries img');
    const missed = document.querySelector('#scoreboard .tries:last-child');
    if (heartImages.length > 0) {
      heartImages[heartImages.length - 1].src = 'images/lostHeart.png';
      missed.classList.remove('tries');
      missed.classList.add('lost');
    }
    this.missed++;
    if (this.missed === 5) {
      this.gameOver();
    }
  }




  checkForWin() {
    // Checks if the phrase has been guessed. So if it is revealed.
  }

  gameOver() {
    overlayScreen.style.display = 'block';
    if (this.missed === 5) {
      gameOverMessage.textContent = 'You lost! Try again.';
      overlayScreen.classList.remove('start');
      overlayScreen.classList.add('lose');
    } else {
      gameOverMessage.textContent = 'Congratulations! You won!';
      overlayScreen.classList.remove('start');
      overlayScreen.classList.add('win');
    }
  }


}
