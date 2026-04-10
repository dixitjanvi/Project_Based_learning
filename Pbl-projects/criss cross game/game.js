let currentPlayer = "X";
let gameActive = true;

function handleClick(index) {
    if (!gameActive) return;

    const square = document.getElementById("square" + index);

    if (square.textContent === "") {
        square.textContent = currentPlayer;

        if (checkWinner()) {
            alert(currentPlayer + " wins!");
            gameActive = false;
        } else if (isDraw()) {
            alert("It's a draw!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        const sa = document.getElementById("square" + a).textContent;
        const sb = document.getElementById("square" + b).textContent;
        const sc = document.getElementById("square" + c).textContent;
        return sa && sa === sb && sb === sc;
    });
}

function isDraw() {
    for (let i = 0; i < 9; i++) {
        if (document.getElementById("square" + i).textContent === "") {
            return false;
        }
    }
    return true;
}

function restartGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById("square" + i).textContent = "";
    }
    currentPlayer = "X";
    gameActive = true;
}


