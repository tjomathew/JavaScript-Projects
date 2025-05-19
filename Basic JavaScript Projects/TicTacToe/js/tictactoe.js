
let activePlayer = 'X'; 
let selectedSquares = [];
function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        
        
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);
        audio('./media/place.mp3');
        checkWinConditions();
        
        
        activePlayer = activePlayer === 'X' ? 'O' : 'X';
        
    
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(computersTurn, 1000);
        }
    }
    return true;
}


function computersTurn() { 
    let success = false;
    let pickASquare; 
    
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickASquare)) { 
            success = true;
        }
    }
    enableClick();
}


function checkWinConditions() {
    // X wins (uppercase 'X')
    if (arrayIncludes('0X', '1X', '2X')) drawWinLine(50, 100, 558, 100);
    else if (arrayIncludes('3X', '4X', '5X')) drawWinLine(50, 304, 558, 304);
    // ... (other X conditions)

    // O wins (using zero '0' not letter 'O')
    else if (arrayIncludes('00', '10', '20')) drawWinLine(50, 100, 558, 100);
    else if (arrayIncludes('30', '40', '50')) drawWinLine(50, 304, 558, 304);
    // ... (other 0 conditions)

    // Tie condition
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(resetGame, 500); 
    }
}


function arrayIncludes(...elements) {
    return elements.every(element => selectedSquares.includes(element));
}

function audio(soundFile) {
    new Audio(soundFile).play();
}

function disableClick() {
    document.getElementById('game-board').style.pointerEvents = 'none';
}

function enableClick() { // Added this missing function
    document.getElementById('game-board').style.pointerEvents = 'auto';
}

function resetGame() {
    selectedSquares = [];
    activePlayer = 'X';
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundImage = '';
    });
    enableClick();
}

const body = document.body;


function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(() => { body.style.pointerEvents = 'auto'; }, 1000);
}


function audio(audioURL) {
    new Audio(audioURL).play();
}


function computersTurn() {
    
    disableClick();
    
    
    setTimeout(() => {
        let success = false;
        let pickASquare;
        
        
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (!selectedSquares.some(el => el.startsWith(pickASquare))) {
                // Simulate click on the chosen square
                const square = document.getElementById(pickASquare);
                if (square) {
                    square.click();
                    success = true;
                }
            }
        }
        
        
        body.style.pointerEvents = 'auto';
    }, 1000); 
}

// Canvas drawing functions for win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    
    // Set initial coordinates
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    // Store canvas context in global variable for other functions
    window.winCanvas = c;
    window.winCanvasDimensions = { width: 608, height: 608 };

    // Disable clicking during win animation
    disableClick();
    
    // Play win sound
    audio('./media/winGame.mp3');
    
    // Start the animation
    animateLineDrawing();
    
    // Reset after animation completes
    setTimeout(function() {
        clearCanvas();
        resetGame();
    }, 1000);

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        
        // Set line properties
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        c.stroke();

        // Animation logic for different line directions
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) x += 10;
            if (y < y2) y += 10;
            if (x >= x2 && y >= y2) cancelAnimationFrame(animationLoop);
        }
        else if (x1 <= x2 && y1 >= y2) {
            if (x < x2) x += 10;
            if (y > y2) y -= 10;
            if (x >= x2 && y <= y2) cancelAnimationFrame(animationLoop);
        }
    }
}

function clearCanvas() {
    const c = window.winCanvas;
    if (c) {
        const animFrame = requestAnimationFrame(() => {
            c.clearRect(0, 0, window.winCanvasDimensions.width, window.winCanvasDimensions.height);
            cancelAnimationFrame(animFrame);
        });
    }
}
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}