// Checking how random the output of getComputerChoice really is
function testGetComputerChoice() {
    let ones = 0;
    let twos = 0;
    let threes = 0;
    for (let i = 0; i < 10000; i++) {

        let current = getComputerChoice();

        switch (current) {
            case 1:
                ones++;
                break;
            case 2:
                twos++;
                break;
            case 3:
                threes++;
                break;
        }
    }

    console.log(`Number of ones = ${ones}`);
    console.log(`Number of twos = ${twos}`);
    console.log(`Number of threes = ${threes}`);
}

// Start of functions

function getComputerChoice() {
    return rand = Math.ceil(Math.random() * 3);
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

function setScore() {
    const computerScoreDisplay = document.querySelector(".computer-score");
    const playerScoreDisplay = document.querySelector(".player-score");
}

function playOneRound(button) {
    button.style.border = "2px solid rgba(215, 0, 30, 0.7)";

    const choiceDisplay = document.querySelector(".display-choice");
    const playerChoice = parseInt(button.id);
    const computerChoice = getComputerChoice();

    // Players Turn
    displayChoice(playerChoice);

    // Computers Turn
    let computerButton;
    setTimeout(() => {
        resetButtonsScale();
        choiceDisplay.innerText = "Computer chooses...";

        setTimeout(() => {
            computerButton = controlComputerButton(computerChoice);
            displayChoice(computerChoice);

            setTimeout(() => {
                resetButtonsScale();
                button.style.border = "0px";
                computerButton.style.border = "0px";
                choiceDisplay.innerText = "Player chooses...";
            }, 2000);

        }, 3000);

    }, 2000);


}
