var wins = 0;
var loss = 0;
var draw = 0;
var gamesToPlay = 0;
var gamesPlayed = 0;
var gamesRemaining = 0;
var userChoice, userItem, compChoice, compItem, yesLetsPlay;
var logo = "\\^_^/";
var options = ["r", "p", "s"];

function addToScorecard() {
    document.getElementById("scorecard").innerHTML = `\nFINAL SCORE:<br>` + wins + ` Win(s) | ` + loss + ` Loss(es) | ` + draw + ` Draw(s)`
    document.getElementById("scorecard-caption").innerHTML = `Thank you for playing! ` + logo + `\n`
}

// function to convert the user and computer choices (r, p, or s) into their full item names
function convertToItemName(arg1, arg2) {
    if(arg1 === "r"){
        userItem = "ROCK"
    } else if (arg1 === "p") {
        userItem = "PAPER"
    } else {
        userItem = "SCISSORS"
    }

    if(arg2 === "r"){
        compItem = "ROCK"
    } else if (arg2 === "p") {
        compItem = "PAPER"
    } else {
        compItem = "SCISSORS"
    }
}

document.getElementById("myBtnR").addEventListener("click", playGame("r"));
document.getElementById("myBtnP").addEventListener("click", playGame("p"));
document.getElementById("myBtnS").addEventListener("click", playGame("s"));

// asks user how many games they'd like to play 
// gamesToPlay, userInput = prompt(`\nGreat!\nLet's play "Rock, Paper, Scissors"\n\nHow many times would you like to play? (enter a number)`)
// parseInt(gamesToPlay) // parses the user input AFTER asking in order to get a "" in case of nothing entered, plus flexibility

// chooses the default(7) if nothing is entered
// if(gamesToPlay === ""){
//     gamesToPlay = 7
// }

// gamesRemaining = gamesToPlay

function playGame(arg){

    for(i=0;i=0;i++){
        if((arg === "r") || (arg === "p") || (arg === "s")) {
            rando = Math.floor(Math.random()*2) // generate random number 0-2 
            compChoice = options[rando] // computer makes a choice by using the randomly generated number to choose from options array index (0 = rock, 1 = paper, 2 = scissors)
    
            if((arg === "r" && compChoice === "s") || (arg === "p" && compChoice === "r") || (arg === "s" && compChoice === "p")) {
                gamesPlayed++
                wins++
                convertToItemName(arg,compChoice)
                document.getElementById("liveBox").innerHTML = `\nYou chose: ` + userItem + `\nComputer chose: ` + compItem + `\n\nYou Win!\n` + wins + ` Win(s) | ` + loss + ` Loss(es) | ` + draw + ` Draw(s)\n\n` + gamesPlayed + ` games played.\n`
            } else if (arg === compChoice) {
                gamesPlayed++
                draw++
                convertToItemName(arg)
                document.getElementById("liveBox").innerHTML = `\nYou chose: ` + userItem + `\nComputer chose: ` + compItem + `\n\nYou Win!\n` + wins + ` Win(s) | ` + loss + ` Loss(es) | ` + draw + ` Draw(s)\n\n` + gamesPlayed + ` games played.\n`
            } else {
                gamesPlayed++
                loss++
                convertToItemName(arg,compChoice)
                document.getElementById("liveBox").innerHTML = `\nYou chose: ` + userItem + `\nComputer chose: ` + compItem + `\n\nYou Win!\n` + wins + ` Win(s) | ` + loss + ` Loss(es) | ` + draw + ` Draw(s)\n\n` + gamesPlayed + ` games played.\n`
            }
    
        } else {
            gamesRemaining++
            gamesToPlay++
            alert(`\nUh-Oh!\nYou've entered: "` + userChoice + `"\nYou must enter: "r", "p", or "s" to play\n\nTry again! ` + logo + `\n`)
    
        }            
        addToScorecard()

    }
    // checks to see if user actually typed r, p, or s before beginning to compare with the computers choice, else gives error and instructs to type only r, p, or s.
}

// function runGame(){
//     // will ask user to select between "ROCK," "PAPER," "SCISSORS" by entering r, p, or s
//     userChoice = prompt(`\nMake a selection by entering:\n"r" for ROCK,\n"p" for PAPER, or\n"s" for SCISSORS\n`)
//     userChoice = userChoice.toLowerCase()

//     // checks to see if user actually typed r, p, or s before beginning to compare with the computers choice, else gives error and instructs to type only r, p, or s.
//     if((userChoice === "r") || (userChoice === "p") || (userChoice === "s")) {
//         rando = Math.floor(Math.random()*2) // generate random number 0-2 
//         compChoice = options[rando] // computer makes a choice by using the randomly generated number to choose from options array index (0 = rock, 1 = paper, 2 = scissors)

//         if((userChoice === "r" && compChoice === "s") || (userChoice === "p" && compChoice === "r") || (userChoice === "s" && compChoice === "p")) {
//             gamesPlayed++
//             wins++
//             convertToItemName(userChoice,compChoice)
//             alert(`\nYou chose: ` + userItem + `\nComputer chose: ` + compItem + `\n\nYou Win!\n` + wins + ` Win(s) | ` + loss + ` Loss(es) | ` + draw + ` Draw(s)\n\n` + gamesPlayed + ` games played.\n`)                    
//         } else if (userChoice === compChoice) {
//             gamesPlayed++
//             draw++
//             convertToItemName(userChoice)
//             alert(`\nYou chose: ` + userItem + `\nComputer also chose: ` + userItem + `\n\nIt's a draw!\n` + wins + ` Win(s) | ` + loss + ` Loss(es) | ` + draw + ` Draw(s)\n\n` + gamesPlayed + ` games played.\n`)
//         } else {
//             gamesPlayed++
//             loss++
//             convertToItemName(userChoice,compChoice)
//             alert(`\nYou chose: ` + userItem + `\nComputer chose: ` + compItem + `\n\nComputer Wins!\n` + wins + ` Win(s) | ` + loss + ` Loss(es) | ` + draw + ` Draw(s)\n\n` + gamesPlayed + ` games played.\n`)
//         }

//     } else {
//         gamesRemaining++
//         gamesToPlay++
//         alert(`\nUh-Oh!\nYou've entered: "` + userChoice + `"\nYou must enter: "r", "p", or "s" to play\n\nTry again! ` + logo + `\n`)

//     }            
//     addToScorecard()
//     // document.write(`\nFINAL SCORE: ` + wins + ` Win(s) | ` + loss + ` Loss(es) | ` + draw + ` Draw(s)<br><br>Thank you for playing! ` + logo + `\n`)

// }
        