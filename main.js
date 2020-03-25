let computerGuess; 
let userGuessLog = [];
let attempts = 0;
let maxGuesses = 10;

document.getElementById("new-game").addEventListener('click', function(){
    window.location.reload();
} )

window.onload = function (){
    init();
}

function init(){
    computerGuess = Math.floor(Math.random() * 100 + 1);
    // console.log(computerGuess);
    document.getElementById('new-game').style.display = 'none';
}

document.getElementById("inputBox").addEventListener('change', function(){
    let userGuess = " " + document.getElementById("inputBox").value;
    // console.log(userGuess);
    userGuessLog.push(userGuess);
    // console.log(userGuessLog);
    document.getElementById('guessLog').innerHTML = userGuessLog;
    attempts++;
    document.getElementById('attempts').innerHTML = attempts;
    if( userGuessLog.length < maxGuesses) {
        if (userGuess > computerGuess ){
            document.getElementById('textOutput').innerHTML = "Your guess is too high!";
            document.getElementById('inputBox').value = "";
        } else if(userGuess < computerGuess){
            document.getElementById('textOutput').innerHTML = "Your guess is too low.";
            document.getElementById('inputBox').value = ""; 
        } else{
            document.getElementById('textOutput').innerHTML = "Correct!! You got it in" + attempts + " attempts.";
            document.getElementById('container').style.backgroundColor = "rgb(1, 238, 1)";
        }
    }else {
        if( userGuess > computerGuess){
            document.getElementById('textOutput').innerHTML = "You lose!" + "<br> The number was " +computerGuess;
            document.getElementById('container').style.backgroundColor = "red";  
            gameEnded();
        }else if( userGuess < computerGuess){
            document.getElementById('textOutput').innerHTML =  "You lose!" + '<br> The number was ' +computerGuess;
            document.getElementById('container').style.backgroundColor = "red";  
            gameEnded();
        }else{
            document.getElementById('textOutput').innerHTML = "Correct!! You got it in" + attempts + " attempts.";
            document.getElementById('container').style.backgroundColor = "rgb(1, 238, 1)";
            gameEnded();
        }
    }
   
    
})

document.getElementById('easyBtn').addEventListener('click', function(){
    maxGuesses = 10;
    document.getElementById('easyBtn').className = "activeButton";
    document.getElementById('hardBtn').className = "";
})

document.getElementById('hardBtn').addEventListener('click', function(){
    maxGuesses = 5;
    document.getElementById('hardBtn').className = "activeButton";
    document.getElementById('easyBtn').className = "";
})


function gameEnded(){
    document.getElementById('new-game').style.display = 'inline';
    document.getElementById('easyBtn').style.display = 'none';
    document.getElementById('hardBtn').style.display = 'none';
    document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}