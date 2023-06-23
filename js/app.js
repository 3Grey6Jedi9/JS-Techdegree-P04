/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let phrases = ['Seek truth always.', 'Embrace the journey.', 'Choose love daily.', 'Find inner peace.', 'Live with purpose.']


const startGameButton = document.getElementById('btn__reset');


startGameButton.addEventListener('click', function() {
  phraseHunter = new Game(0, phrases);
  phraseHunter.startGame();
});

keyButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      phraseHunter.handleInteraction();
    }
  });
});



