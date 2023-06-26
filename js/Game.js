/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */





const keyButtons = document.querySelectorAll('#qwerty .keyrow .key'); // Button that has the class key
let letterButton;
const overlayScreen = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
const letterButtons = document.querySelectorAll('#qwerty .keyrow button'); // Buttons that are children of the class .keyrow
const heartImages = document.querySelectorAll('#scoreboard ol li');


class Game {
  constructor(missed = 0, phrases, activePhrase = null) {
    this.missed = missed;
    this.phrases = phrases;
    this.activePhrase = activePhrase;
  }

  startGame() {
    overlayScreen.style.display = 'none';
    overlayScreen.className = 'start';
    this.activePhrase = this.getRandomPhrase();
    this.currentPhrase = new Phrase(this.activePhrase);
    this.currentPhrase.addPhraseToDisplay();
  }


  getRandomPhrase() {
    let index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }


handleInteraction(clickedLetter) {
  let clickedButton = null;
  keyButtons.forEach(button=>{

    if (button.textContent === clickedLetter) {
    clickedButton = button;
  }

  });
  clickedButton.disabled = true;

  const isMatch = this.currentPhrase.phrase.includes(clickedLetter);
  if (!isMatch) {
    clickedButton.classList.add('wrong');
    this.removeLife();
  } else {
    clickedButton.classList.add('chosen');
    this.currentPhrase.showMatchedLetter(clickedLetter);

    if(this.checkForWin()){

      this.gameOver();

    }

  }
}





  removeLife() {
    const heartImages = document.querySelectorAll('#scoreboard .tries img');
    const heart = document.querySelectorAll('#scoreboard .tries');

    if (heartImages.length > 0) {
      heartImages[heartImages.length - 1].src = 'images/lostHeart.png';
      heart[heart.length-1].classList.replace('tries', 'lost')

    }
    this.missed++;
    if (this.missed === 5) {
      this.gameOver();
    }
  }




  checkForWin() {

    const phraseLetters = this.currentPhrase.phrase;
    const revealedLetters = discomposedPhrase.querySelectorAll('.show');
    const numberSpaces = discomposedPhrase.querySelectorAll('.space');

    return phraseLetters.length === revealedLetters.length + numberSpaces.length;

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

    const allPhraseLetters = discomposedPhrase.querySelectorAll('li');
    allPhraseLetters.forEach(li => {

      li.remove();

    })

    letterButtons.forEach(key=>{

      key.disabled = false;
      key.className = 'key';


    })


    heartImages.forEach(image=>{

      image.className = 'tries';

      const heartPicture = image.querySelector('img');
      heartPicture.src = 'images/liveHeart.png';

    })
        this.missed = 0;
  }



}
