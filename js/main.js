"use strict";

// Array of all pieces and their rotated states
var classes = [" silver", " magenta", " yellow", " blue", " green", " cyan", " red"];
var pieces = [{
    // T
    class: classes[0],
    rotation: [[[0, 0, 0], [1, 1, 1], [0, 1, 0]], [[0, 1, 0], [1, 1, 0], [0, 1, 0]], [[0, 1, 0], [1, 1, 1], [0, 0, 0]], [[0, 1, 0], [0, 1, 1], [0, 1, 0]]]
}, {
    // J
    class: classes[1],
    rotation: [[[0, 0, 0], [1, 0, 0], [1, 1, 1]], [[1, 1, 0], [1, 0, 0], [1, 0, 0]], [[0, 0, 0], [1, 1, 1], [0, 0, 1]], [[0, 1, 0], [0, 1, 0], [1, 1, 0]]]
}, {
    // L
    class: classes[2],
    rotation: [[[0, 0, 0], [0, 0, 1], [1, 1, 1]], [[1, 0, 0], [1, 0, 0], [1, 1, 0]], [[0, 0, 0], [1, 1, 1], [1, 0, 0]], [[1, 1, 0], [0, 1, 0], [0, 1, 0]]]
}, {
    // S
    class: classes[3],
    rotation: [[[0, 0, 0], [0, 1, 1], [1, 1, 0]], [[1, 0, 0], [1, 1, 0], [0, 1, 0]]]
}, {
    // Z
    class: classes[4],
    rotation: [[[0, 0, 0], [1, 1, 0], [0, 1, 1]], [[0, 0, 1], [0, 1, 1], [0, 1, 0]]]
}, {
    // O
    class: classes[5],
    rotation: [[[0, 0, 0], [0, 1, 1], [0, 1, 1]]]
}, {
    // I
    class: classes[6],
    rotation: [[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]]]
}];
"use strict";

var playground = document.getElementById("playground");
var touchControlsButtons = document.getElementById("touchControlsButtons");
var touchArrowLeft = document.getElementById("touchArrowLeft");
var touchArrowUp = document.getElementById("touchArrowUp");
var touchArrowDown = document.getElementById("touchArrowDown");
var touchArrowRight = document.getElementById("touchArrowRight");

var basicClassname = "playgroundCell";
var numberOfRows = 20;
var numberOfColumns = 10;
var scoreRows = 0;
var level = 5;
var actualLevel = 5;
var rowsAtBeginning = 8;
var gameOver = true;
// logic layer = logicPlayground(2d array)
var logicPlayground = new Array();

var controls = document.getElementById("controls");
var startButton = document.getElementById("startButton");
var mainHaeding = document.getElementById("mainHeading");
var modal = document.getElementById("modal");
var modalLevel = document.getElementById("modalLevel");
var modalRows = document.getElementById("modalRows");
var levelButton = document.getElementById("levelButton");
var rowsButton = document.getElementById("rowsButton");
var levelNumberView = document.getElementById("levelNumberView");
var rowsNumberView = document.getElementById("rowsNumberView");

var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;

// MOBILE DETECTION
var isMobile = false; //initiate as false
// device detection
function checkIfMobile() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
}
var playgroundCellDimensions = 30;
function checkSetMobileLayout() {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
    var availableHeightForPlayground = innerHeight - 70;
    checkIfMobile();
    if (isMobile || innerWidth < 800) {
        availableHeightForPlayground = innerHeight - 120;
        touchControlsButtons.style.width = "100%";
        touchControlsButtons.className = "flexbox";
    } else {
        touchControlsButtons.className = "noDisplay";
    }
    var whRatio = availableHeightForPlayground / innerWidth;

    if (whRatio <= 2) {
        playgroundCellDimensions = Math.floor(availableHeightForPlayground / numberOfRows);
    } else {
        playgroundCellDimensions = Math.floor(innerWidth / numberOfColumns);
    }
    playground.style.height = playgroundCellDimensions * numberOfRows + "px";
    playground.style.width = playgroundCellDimensions * numberOfColumns + "px";

    clearWholePlayground();
    fillPlaygroundWithGrid();
}

// creating playground = fill playground with DIVs
function fillPlaygroundWithGrid() {
    for (var i = 0; i < numberOfRows; i++) {
        logicPlayground[i] = new Array();
        for (var j = 0; j < numberOfColumns; j++) {
            var cell = document.createElement("div");
            cell.className = basicClassname;
            cell.id = i + "_" + j;
            cell.style.height = playgroundCellDimensions + "px";
            cell.style.width = playgroundCellDimensions + "px";
            playground.appendChild(cell);
            // every position in logic playground is object containing color(class) and bool if the position is filled
            logicPlayground[i][j] = { isFilled: false, class: "" };
        }
    }
}
// clear playground
function clearWholePlayground() {
    while (playground.firstChild) {
        playground.removeChild(playground.firstChild);
    }
}

// draw playground
function drawPlayground() {
    for (var i = 0; i < logicPlayground.length; i++) {
        for (var j = 0; j < logicPlayground[i].length; j++) {
            var playgroundCell = document.getElementById(i + "_" + j);
            if (!logicPlayground[i][j].isFilled) {
                playgroundCell.className = basicClassname;
            } else {
                playgroundCell.className = basicClassname + " " + logicPlayground[i][j].class;
            }
        }
    }
}

checkSetMobileLayout();
"use strict";

// Player object: containing main attributes
var player = {
    positionX: -1,
    positionY: 3,
    class: " red",
    actualRotatePosition: 0,
    matrix: []

    // Drawing player (actual piece) on playground
};function drawPlayer() {
    for (var i = 0; i < player.matrix.length; i++) {
        for (var j = 0; j < player.matrix[i].length; j++) {
            if (player.positionX + i >= 0 && player.matrix[i][j] === 1) {
                var id = player.positionX + i + "_" + (player.positionY + j);
                var cell = document.getElementById(id);
                cell.className += player.class;
            }
        }
    }
}

// Creating NEW PIECE
var actualPiece = pieces[0];
var isNewPieceInPlayground = false;
function newPiece() {
    var random = Math.floor(Math.random() * pieces.length);
    actualPiece = pieces[random];
    fallingCounter = 0;
    // console.log(actualPiece);
    // console.log("New piece!: isPieceInPlayground: " + isNewPieceInPlayground + ", falling Counter: " + fallingCounter);

    isNewPieceInPlayground = true;
    player.positionY = 3;
    player.positionX = -2;
    player.actualRotatePosition = 0;
    player.class = actualPiece.class;
    player.matrix = actualPiece.rotation[0];
    fallingCounter = 0;
    // console.log("SetTimeout!: isPieceInPlayground: " + isNewPieceInPlayground + ", falling Counter: " + fallingCounter);
}

// If piece cannot be moved down, set piece to logic layer (logicPlayground)
function setPieceToLogic() {
    // console.log("Setting piece to logic");
    for (var i = 0; i < player.matrix.length; i++) {
        for (var j = 0; j < player.matrix[i].length; j++) {
            if (player.positionX + i >= 0 && player.matrix[i][j] === 1) {
                logicPlayground[i + player.positionX][j + player.positionY].isFilled = true;
                logicPlayground[i + player.positionX][j + player.positionY].class = player.class;
                //console.log(logicPlayground[i + player.positionX][j + player.positionY]);
            }
        }
    }
}

// ROTATE ACTUAL PIECE
function rotatePiece() {
    checkRotate();
    // console.log(canMove.rotate);

    if (isNewPieceInPlayground && canMove.rotate) {
        var numberOfRotatePosition = actualPiece.rotation.length;
        player.actualRotatePosition++;
        if (player.actualRotatePosition >= numberOfRotatePosition) {
            player.actualRotatePosition = 0;
        }
        player.matrix = actualPiece.rotation[player.actualRotatePosition];
    }
}

// CHECKING FULL ROW 
function checkFullRows() {
    var numberOfRowsToMoveDown = 0;
    for (var i = logicPlayground.length - 1; i >= 0; i--) {
        var isFullRow = true;
        for (var j = 0; j < logicPlayground[i].length; j++) {
            if (!logicPlayground[i][j].isFilled) {
                isFullRow = false;
                break;
            }
        }
        // if row is full, add 1 to help atribute
        if (isFullRow) {
            numberOfRowsToMoveDown++;
        }
        // Row is not full => moving actual row down
        if (!isFullRow && numberOfRowsToMoveDown > 0) {
            moveRowDown(numberOfRowsToMoveDown, i);
        }
    }
    scoreRows += numberOfRowsToMoveDown;
    updateScore();
}

// help function in checking full row => moving actual no full row down
function moveRowDown(numberOfRowsToMove, actualRow) {
    for (var i = 0; i < logicPlayground[actualRow].length; i++) {
        logicPlayground[actualRow + numberOfRowsToMove][i].isFilled = logicPlayground[actualRow][i].isFilled;
        logicPlayground[actualRow + numberOfRowsToMove][i].class = logicPlayground[actualRow][i].class;
    }
    // Fill top cells, if any row was moved down
    for (var i = 0; i < numberOfRowsToMove; i++) {
        for (var j = 0; j < logicPlayground[i].length; j++) {
            logicPlayground[i][j].isFilled = false;
            logicPlayground[i][j].class = basicClassname;
        }
    }
}
"use strict";

// Start new game after clickink on Start button
startButton.addEventListener("click", function () {
    starNewGame();
});

function starNewGame() {
    hideControlsDiv();
    playing = true;
    gameOver = false;
    canMove.down = true;
    checkSetMobileLayout();
    resetPlayground();
    setInitialRowsLevel();
    setMainHeading("ROWS: ");
    updateScore();
    newPiece();
    gameLoop();
}

// Checking inputs from Keyboard
var canMove = { left: true, right: true, down: true, rotate: true };
document.addEventListener("keydown", function (e) {
    if (canMove.down && playing) {
        // Checking side move options
        checkMove();
        // Left arrow -> Left move
        if (e.keyCode == 37) {
            // console.log(canMove.left);
            if (canMove.left) {
                player.positionY--;
            }
        }
        // Up arrow -> Rotate
        if (e.keyCode == 38) {
            rotatePiece();
        }
        // Right arrow -> Right move
        if (e.keyCode == 39) {
            // console.log(canMove.right);
            if (canMove.right) {
                player.positionY++;
            }
        }
        // Down arrow -> Hard down fall
        if (e.keyCode == 40) {
            if (player.positionX >= -1) {
                while (canMove.down) {
                    moveDown();
                }
            }
        }
    }
    // KEY ESC -> Paused Toggle
    if (e.keyCode == 27 || e.keyCode == 80) {
        if (!paused) {
            showControlsDiv();
            playing = false;
            paused = true;
        } else {
            if (!gameOver) {
                hideControlsDiv();
                playing = true;
                paused = false;

                fallingCounter = 0;
                gameLoop();
            }
        }
    }
    // ENTER KEY
    if (e.keyCode == 13) {
        if (!playing) {
            starNewGame();
        }
    }
});

// TOUCH ARROW CONTROLS
touchArrowLeft.addEventListener("touchstart", function () {
    if (canMove.down && playing) {
        // Checking side move options
        checkMove();
        // Left touch arrow -> Left move
        if (canMove.left) {
            player.positionY--;
        }
    }
});
touchArrowRight.addEventListener("touchstart", function () {
    if (canMove.down && playing) {
        // Checking side move options
        checkMove();
        // Right arrow -> Right move
        if (canMove.right) {
            player.positionY++;
        }
    }
});
touchArrowUp.addEventListener("touchstart", function () {
    if (canMove.down && playing) {
        // Checking side move options
        checkMove();
        // Up arrow -> Rotate
        rotatePiece();
    }
});
touchArrowDown.addEventListener("touchstart", function () {
    if (canMove.down && playing) {
        // Checking side move options
        checkMove();
        if (player.positionX >= -1) {
            while (canMove.down) {
                moveDown();
            }
        }
    }
});

// MODAL
// OPEN MODAL
function openModal(modalContent) {
    if (modalContent === "modalLevel") {
        modalLevel.style.display = "flex";
    }
    if (modalContent === "modalRows") {
        modalRows.style.display = "flex";
    }
    modal.style.display = "flex";
};
// CLOSE MODAL
function closeModal() {
    modalLevel.style.display = "none";
    modalRows.style.display = "none";
    modal.style.display = "none";
}
modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        closeModal();
    }
});

// Buttons
levelButton.addEventListener("click", function () {
    openModal("modalLevel");
});
rowsButton.addEventListener("click", function () {
    openModal("modalRows");
});

// GET NUMBER from ID ELEMENT
function getNumberFromId(idOfElement) {
    return idOfElement.split("_")[1];
}
// MODAL LEVEL CONTROLS/SET BUTTONS
var levelButtons = document.getElementsByClassName("modalItemL");
for (var i = 0; i < levelButtons.length; i++) {
    levelButtons[i].addEventListener("click", function () {
        var numberOfLevel = getNumberFromId(this.id);
        level = numberOfLevel;
        levelNumberView.innerText = numberOfLevel;
        closeModal();
    });
}
// MODAL ROWS CONTROLS/SET BUTTONS
var rowsButtons = document.getElementsByClassName("modalItemR");
for (var i = 0; i < rowsButtons.length; i++) {
    rowsButtons[i].addEventListener("click", function () {
        var numberOfRowsHelp = getNumberFromId(this.id);
        rowsAtBeginning = numberOfRowsHelp;
        rowsNumberView.innerText = numberOfRowsHelp;
        closeModal();
    });
}
"use strict";

// Setting main heading, change from TETRIS to SCORE
function setMainHeading(str) {
    if (str.length > 0) {
        mainHaeding.innerText = str;
    }
}

var scoreRowsView = document.getElementById("filledRowsView");
function updateScore() {
    scoreRowsView.innerText = scoreRows;
}

// Check, if the piece can be moved to left and right side
function checkMove() {
    if (isNewPieceInPlayground) {
        canMove.left = true;
        canMove.right = true;
        for (var i = 0; i < player.matrix.length; i++) {
            for (var j = 0; j < player.matrix[i].length; j++) {
                if (player.positionX + i >= 0 && player.matrix[i][j] === 1) {
                    // move left
                    if (player.positionY + j - 1 < 0 || logicPlayground[i + player.positionX][player.positionY + j - 1].isFilled) {
                        canMove.left = false;
                    }
                    // move right
                    if (player.positionY + j + 1 >= numberOfColumns || logicPlayground[i + player.positionX][player.positionY + j + 1].isFilled) {
                        canMove.right = false;
                    }
                }
            }
        }
    }
}

// Checking, if piece can be moved down -> continue to function: moveDown
function checkMoveDown() {
    canMove.down = true;
    for (var i = 0; i < player.matrix.length; i++) {
        for (var j = 0; j < player.matrix[i].length; j++) {
            if (player.positionX + i >= 0 && player.matrix[i][j] === 1) {
                // MOVE DOWN
                if (player.positionX + i + 1 >= numberOfRows || logicPlayground[i + player.positionX + 1][j + player.positionY].isFilled) {
                    canMove.down = false;
                    isNewPieceInPlayground = false;
                    break;
                }
            }
        }
    }
}

// CHCECKING IF PIECE CAN BE ROTATE IN DIFFERENT EDGE SITUATION
function checkRotate() {
    canMove.rotate = true;
    var numberOfRotatePosition = actualPiece.rotation.length;
    var nextRotatePosition = player.actualRotatePosition + 1;
    if (nextRotatePosition >= numberOfRotatePosition) {
        nextRotatePosition = 0;
    }
    var nextRotatePiece = actualPiece.rotation[nextRotatePosition];
    var numberOfSquersInPiece = actualPiece.rotation[0].length;
    // LEFT AND RIGHT EDGE CONTROL ROTATE
    if (player.positionY < 0 || player.positionY > numberOfColumns - numberOfSquersInPiece) {
        var canRotateLeftEdge = true;
        var canRotateRightEdge = true;
        for (var i = 0; i < nextRotatePiece.length; i++) {
            for (var j = 0; j < nextRotatePiece[i].length; j++) {
                if (player.positionX + i >= 0 && nextRotatePiece[i][j] === 1) {
                    // rotate
                    if (logicPlayground[i + player.positionX][0 + j].isFilled) {
                        canRotateLeftEdge = false;
                    }
                    if (logicPlayground[i + player.positionX][numberOfColumns - numberOfSquersInPiece + j].isFilled) {
                        canRotateRightEdge = false;
                    }
                }
            }
        }
        // If player is in the left edge and can rotate, correct player position Y to 0
        if (player.positionY < 0 && canRotateLeftEdge) {
            player.positionY = 0;
        }
        // If player is in the right edge and can rotate, correct player position Y
        if (player.positionY > numberOfColumns - numberOfSquersInPiece && canRotateRightEdge) {
            player.positionY = numberOfColumns - numberOfSquersInPiece;
        }
    }
    // ACTUAL CHECKING IS PIECE CAN BE ROTATE
    for (var i = 0; i < nextRotatePiece.length; i++) {
        for (var j = 0; j < nextRotatePiece[i].length; j++) {
            if (player.positionX + i >= 0 && nextRotatePiece[i][j] === 1) {
                // rotate
                if (typeof logicPlayground[i + player.positionX][player.positionY + j] === "undefined" || logicPlayground[i + player.positionX][player.positionY + j].isFilled) {
                    canMove.rotate = false;
                    break;
                }
            }
        }
    }
}

// check, if new piece can fit in the playground, if not = game over
function checkGameOver() {
    for (var i = 0; i < player.matrix.length; i++) {
        for (var j = 0; j < player.matrix[i].length; j++) {
            // console.log(player.matrix[i][j]);
            if (player.positionX + i >= 0 && player.matrix[i][j] === 1) {
                if (logicPlayground[i + player.positionX][j + player.positionY].isFilled) {
                    playing = false;
                    setMainHeading("GAME OVER: ");
                    gameOver = true;
                    showControlsDiv();
                    break;
                }
            }
        }
    }
}

// Reset Playground
function resetPlayground() {
    for (var i = 0; i < logicPlayground.length; i++) {
        for (var j = 0; j < logicPlayground[i].length; j++) {
            logicPlayground[i][j].isFilled = false;
            logicPlayground[i][j].class = basicClassname;
        }
    }
    scoreRows = 0;
    paused = false;
    actualLevel = level;
}

function showControlsDiv() {
    controls.style.display = "block";
}
function hideControlsDiv() {
    controls.style.display = "none";
}

// SET SPEED
function setSpeed() {
    if (actualLevel < 9) {
        return 1000 - 100 * actualLevel - 50;
    } else {
        return (11 - actualLevel) * 50;
    }
}

// Check actual level
function checkActualSpeedLevel() {
    var helpLevelRows = Math.floor(scoreRows / 10);
    if (helpLevelRows > actualLevel && helpLevelRows <= 10) {
        actualLevel = helpLevelRows;
    }
}

// Set initial NO FULL ROWS according to level
function setInitialRowsLevel() {
    for (var i = 0; i < rowsAtBeginning; i++) {
        var helpArray = randomInitialRowsLevel();
        for (var j = 0; j < logicPlayground[i].length; j++) {
            if (helpArray[j] === 1) {
                logicPlayground[logicPlayground.length - 1 - i][j].isFilled = true;
                logicPlayground[logicPlayground.length - 1 - i][j].class += classes[Math.floor(Math.random() * classes.length)];
            }
        }
    }
}
function randomInitialRowsLevel() {
    var rowArray = new Array();
    for (var i = 0; i < numberOfColumns; i++) {
        var helpRandom = Math.random();
        if (helpRandom > 0.2) {
            rowArray[i] = 1;
        } else {
            rowArray[i] = 0;
        }
    }
    helpRandom = Math.floor(Math.random() * 9) + 1;
    if (rowArray[helpRandom] != 0) {
        rowArray[helpRandom] = 0;
    }
    return rowArray;
}
"use strict";

// Bool, if we are in playing mode
var playing = false;
var paused = false;
// Creating divs in Playground
//fillPlaygroundWithGrid();

// Move down piece or create new piece or game over
function moveDown() {
    checkMoveDown();
    if (canMove.down) {
        player.positionX++;
    } else {
        setPieceToLogic();
        checkFullRows();
        newPiece();
    }
}

// GAME LOOP
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
var myRequest;
var lastTime = 0;
var fallingInterval = 1000;
var fallingCounter = 0;
var waitOneGameLoop = false;
// Actual loop
function gameLoop() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    checkGameOver();
    if (playing && !gameOver) {
        checkActualSpeedLevel();
        fallingInterval = setSpeed();
        drawPlayground();
        if (canMove.down && !gameOver) {
            drawPlayer();
        }
        var deltaTime = time - lastTime;
        lastTime = time;
        fallingCounter += deltaTime;
        if (fallingCounter >= fallingInterval) {
            if (!waitOneGameLoop) {
                checkMoveDown();
                if (canMove.down) {
                    player.positionX++;
                } else {
                    waitOneGameLoop = true;
                    setPieceToLogic();
                    checkFullRows();
                    newPiece();
                }
                fallingCounter = 0;
            } else {
                waitOneGameLoop = false;
            }
        }
        myRequest = requestAnimationFrame(gameLoop);
    } else {
        cancelAnimationFrame(myRequest);
    }
}