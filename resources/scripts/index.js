// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors();

// hide game screen
gameScreen.classList.add(`d-none`)

// updateScoreTallyUI
function updateScoreTallyUI(){
    const nameOfUser = userName.value;

    let cpuScore = game.score.cpu;
    let userScore = game.score.user;
    scoreParagraph.innerHTML = nameOfUser + ": " + userScore + " v CPU " + cpuScore;

}

// updateGameHistoryUI
function updateGameHistoryUI(){
    gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username3 = userName.value;
  game = new RockPaperScissors(username3);
  gameScreen.classList.add("d-block")

  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  userselection1 = userSelection.value
  game.play(userselection1);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });