var currentPlayer = "X";
var nextPlayer = "O";
var playerSelections = [];
var playerXSelections = [];
var playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

handleClick = function (event) {
    
    var cell = event.target;
    console.log(cell.id);
    
    cell.innerHTML = currentPlayer;
    
    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }
    
    console.log("playerSelections", playerSelections);
    console.log("playerXSelections", playerXSelections);
    console.log("playerOSelections", playerOSelections);

    playerSelections.push(parseInt(cell.id));
    // Swap players


    let checklol = checkWinner();
    if (checklol==true) {
        alert("Player " + currentPlayer + " wins!")
        resetGame();
    }

    if (checkDraw()) {
        alert("Draw!");
        resetGame();
    }

    currentPlayer = nextPlayer;
}

var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

function checkWinner() {
    // Check if player has all values of each combination
    for (let check of winningCombinations) {
        let matches = 0;
        console.log("check", check);
        for (let check1 of playerSelections) {
            console.log("playerSelections", playerSelections);
            if (check.includes(check1)) {
                matches++
            }
            if (matches == 3) {
                return true
            }
        }
    }
    console.log();
}
function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
}

function resetGame() {
    playerXSelections = [];
    playerOSelections = [];
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
    }
}