/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


const keyButtons = document.querySelectorAll('#qwerty .keyrow .key');
const overlayScreen = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = []; // Provide phrases array here
    this.activePhrase = null;
  }

  getRandomPhrase() {
    let index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }

  handleInteraction(letter) {
    const clickedButton = event.target;
    clickedButton.disabled = true;
    const isMatch = this.activePhrase.includes(letter);
    if (!isMatch) {
      clickedButton.classList.add('wrong');
      this.removeLife();
    } else {
      clickedButton.classList.add('chosen');
      this.showMatchedLetter(letter);
      this.checkForWin();
      // If the player has won the game, call the gameOver() method.
    }
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
    if (this.missed >= 4) {
      this.gameOver();
    }
  }

  checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');
    if (hiddenLetters.length === 0) {
      this.gameOver();
    }
  }

  gameOver() {
    overlayScreen.style.display = 'block';
    if (this.missed === 5) {
      gameOverMessage.textContent = 'You lost! Try again.';
      overlayScreen.classList.remove('start');
      overlayScreen.classList.add('lose');
    } else {
      gameOverMessage.textContent = 'Congratulations! You won!';
      overlayScreen.classList.remove
