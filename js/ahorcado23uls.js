var words = {
    // creando arraysw
    "tema1": ["", "","],
    "tema2": [" ", " ", " "]
};
var palabra_actual = '';
var  letras_adivinadas=[];


var Intentos_restantes = 6;


var puntaje = 0;

var nombreJugador =" ";

var playerContainer = document.getElementById('player-container');
var playerInput = document.getElementById('player-input');
var gameContainer = document.getElementById('game-container');
var wordContainer = document.getElementById('word');
var guessInput = document.getElementById('guess-input');
var resultContainer = document.getElementById('result-container');
var resultMessage = document.getElementById('result');


// Creando una accion aleatoria  para elegir los temas 
function getRandomWord(theme) {
    var wordList = words[theme];
    var randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];

  }
// Inicializar el juego
  function startGame(){
    playerName = playerInput.value;
    if(playerName==' '){
        alert("INGRESE EL NOMBRE DEL JUGADOR ");
        return;
    }


  
  playerContainer.classList.add('hidden');
  
  gameContainer.classList.remove('hidden');

  score=0;

  //Reiniciar el juego.

  startNewRound()

  }
  //Reiniciar el juego.
  function startNewRound() {
    
     var selectedTheme
  }


