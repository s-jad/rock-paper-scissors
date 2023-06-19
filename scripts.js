// Checking how random the output of getComputerChoice really is
//function testGetComputerChoice() {
//    let ones = 0;
//    let twos = 0;
//    let threes = 0;
//    for (let i = 0; i < 10000; i++) {
//
//        let current = getComputerChoice();
//
//        switch (current) {
//            case 1:
//                ones++;
//                break;
//            case 2:
//                twos++;
//                break;
//            case 3:
//                threes++;
//                break;
//        }
//    }
//
//    console.log(`Number of ones = ${ones}`);
//    console.log(`Number of twos = ${twos}`);
//    console.log(`Number of threes = ${threes}`);
//}

// Start of game

function getComputerChoice() {
    return rand = Math.ceil(Math.random() * 3);
}

function getPlayerChoice() {
    return new Promise(resolve => {
        const buttons = document.querySelectorAll(".choice-button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                resolve(button);
            });
        });
    });
}

function displayChoice(currentChoice) {
    const choiceDisplay = document.querySelector(".display-choice");
    let choice = "";

    switch (currentChoice) {
        case 1:
            choice = "rock";
            break;

        case 2:
            choice = "paper";
            break;

        case 3:
            choice = "scissors";
            break;
    }

    choiceDisplay.insertAdjacentText('beforeend', ' ' + `${choice}` + '!');
}

function controlComputerButton(computerChoice) {
    switch (computerChoice) {
        case 1:
            const buttonOne = document.querySelector(".rock-button");
            buttonOne.style.transform = "scale(1.1)";
            buttonOne.style.border = "2px solid rgba(30, 210, 215, 0.7)";
            return buttonOne;

        case 2:
            const buttonTwo = document.querySelector(".paper-button");
            buttonTwo.style.transform = "scale(1.1)";
            buttonTwo.style.border = "2px solid rgba(30, 210, 215, 0.7)";
            return buttonTwo;

        case 3:
            const buttonThree = document.querySelector(".scissors-button");
            buttonThree.style.transform = "scale(1.1)";
            buttonThree.style.border = "2px solid rgba(30, 210, 215, 0.7)";
            return buttonThree;
    }
}

function resetButtonsScale() {
    const buttons = document.querySelectorAll("button[style*='scale(1.1)']");

    buttons.forEach(button => {
        button.style.transform = "scale(1)";
    });
}

function getScore(playerChoice, computerChoice) {
    let playerScore = 0;
    let computerScore = 0;

    if ((playerChoice + 1) % 3 === computerChoice) {
        computerScore++;
    } else if ((playerChoice + 2) % 3 === computerChoice) {
        playerScore++;
    } else {
    }

    console.log(`playerChoice = ${playerChoice}`);
    //  console.log(`playerScore = ${playerScore}`);
    console.log(`computerChoice = ${computerChoice}`);
    //  console.log(`computerScore = ${computerScore}`);

    return [playerScore, computerScore];
}

async function playOneRound() {
    const choiceDisplay = document.querySelector(".display-choice");
    const button = await getPlayerChoice();
    button.style.border = "2px solid rgba(215, 0, 30, 0.7)";

    const playerChoice = parseInt(button.id);
    let computerChoice;
    // Players Turn
    displayChoice(playerChoice);

    // Computers Turn
    let computerButton;

    return new Promise(resolve => {
        setTimeout(() => {
            resetButtonsScale();
            choiceDisplay.innerText = "Computer chooses...";

            setTimeout(() => {
                computerChoice = getComputerChoice();
                console.log(`computerChoice directly after getComputerChoice = ${computerChoice}`);
                computerButton = controlComputerButton(computerChoice);
                displayChoice(computerChoice);

                setTimeout(() => {
                    resetButtonsScale();
                    button.style.border = "0px";
                    computerButton.style.border = "0px";
                    choiceDisplay.innerText = "Player chooses...";
                    console.log(`computerChoice at end of timeouts = ${computerChoice}`);
                    resolve([playerChoice, computerChoice]);
                }, 1000);

            }, 2000);

        }, 2000);
    });
}

async function playOneGame() {
    const playerTotalDisplay = document.querySelector(".player-score");
    const computerTotalDisplay = document.querySelector(".computer-score");
    let playerTotal = 0;
    let computerTotal = 0;
    let playerScore = 0;
    let computerScore = 0;

    while (playerTotal < 2 && computerTotal < 2) {
        let choices = await playOneRound();

        [playerScore, computerScore] = getScore(choices[0], choices[1]);

        playerTotal = playerTotal + playerScore;
        computerTotal = computerTotal + computerScore;

        playerTotalDisplay.innerText = `${playerTotal}`;
        computerTotalDisplay.innerText = `${computerTotal}`;

        playerScore = 0;
        computerScore = 0;
    }

}

playOneGame();
