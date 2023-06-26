/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




  let phrases = ['Seek truth always', 'Embrace the journey', 'Choose love daily', 'Find inner peace', 'Live with purpose']


  const startGameButton = document.getElementById('btn__reset');

  phraseHunter = new Game(0, phrases);

  // Starting the game by clicking the button

  startGameButton.addEventListener('click', function (event) {
    phraseHunter.startGame();
  });



  // Playing the game with the keyboard

  document.addEventListener('keydown', function (event) {
  if (event.key >= 'a' && event.key <= 'z') {
    const clickedLetter = event.key.toLowerCase();
    const clickedButton = Array.from(keyButtons).find(button => button.textContent === clickedLetter);
    if (clickedButton && !clickedButton.disabled) {
      phraseHunter.handleInteraction(clickedLetter);
    }
  }

  if (event.key === 'Enter') {

    phraseHunter.startGame();

  }
});



  // Playing the game by clicking


  keyButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        const clickedLetter = event.target.textContent;
        phraseHunter.handleInteraction(clickedLetter);
      }
    });


  });








