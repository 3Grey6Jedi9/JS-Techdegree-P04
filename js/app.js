/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




  let phrases = ['Seek truth always', 'Embrace the journey', 'Choose love daily', 'Find inner peace', 'Live with purpose']


  const startGameButton = document.getElementById('btn__reset');

  phraseHunter = new Game(0, phrases);

  startGameButton.addEventListener('click', function (event) {
    phraseHunter.startGame();
  });

  keyButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        const clickedLetter = event.target.textContent;
        phraseHunter.handleInteraction(event,clickedLetter);
      }
    });
  });




