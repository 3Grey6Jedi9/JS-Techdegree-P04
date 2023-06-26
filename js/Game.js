/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */





const keyButtons = document.querySelectorAll('#qwerty .keyrow .key'); // Button that has the class key
let letterButton;
const overlayScreen = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
const letterButtons = document.querySelectorAll('#qwerty .keyrow button'); // Buttons that are children of the class .keyrow
const heartImages = document.querySelectorAll('#scoreboard ol li');


// Defining the Game class


class Game {
  constructor(missed = 0, activePhrase = null) {
    this.missed = missed;
    this.phrases = [new Phrase('Seek truth always'),
    new Phrase('Embrace the journey'),
    new Phrase('Choose love daily'),
    new Phrase('Find inner peace'),
    new Phrase('Live with purpose')];
    this.activePhrase = activePhrase;
  }



  startGame() { // This method starts the game by loading a new phrase and creating an instance of the Phrase class
    overlayScreen.style.display = 'none';
    overlayScreen.className = 'start';
    this.activePhrase = this.getRandomPhrase();
    this.currentPhrase = this.activePhrase;
    this.currentPhrase.addPhraseToDisplay();
  }


  getRandomPhrase() { // This method gives me a random phrase to play with
    let index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }


handleInteraction(clickedLetter) { // This method is maybe the most important since it manages the logic of the game
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





  removeLife() { // This method works when I enter a wrong letter
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




  checkForWin() { // This method works when I enter a correct letter

    const phraseLetters = this.currentPhrase.phrase;
    const revealedLetters = discomposedPhrase.querySelectorAll('.show');
    const numberSpaces = discomposedPhrase.querySelectorAll('.space');

    return phraseLetters.length === revealedLetters.length + numberSpaces.length;

  }

  gameOver() { // This method manage the game when is over
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
