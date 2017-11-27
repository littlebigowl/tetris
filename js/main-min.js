function checkIfMobile() {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0);
  }function checkSetMobileLayout() {
    innerWidth = window.innerWidth;var e = (innerHeight = window.innerHeight) - 70;checkIfMobile(), isMobile && (e = innerHeight - 120, touchControlsButtons.style.width = "100%", touchControlsButtons.style.display = "flex");playgroundCellDimensions = e / innerWidth <= 2 ? Math.floor(e / numberOfRows) : Math.floor(innerWidth / numberOfColumns), playground.style.height = playgroundCellDimensions * numberOfRows + "px", playground.style.width = playgroundCellDimensions * numberOfColumns + "px";
  }function fillPlaygroundWithGrid() {
    for (var e = 0; e < numberOfRows; e++) {
      logicPlayground[e] = new Array();for (var o = 0; o < numberOfColumns; o++) {
        var n = document.createElement("div");n.className = basicClassname, n.id = e + "_" + o, n.style.height = playgroundCellDimensions + "px", n.style.width = playgroundCellDimensions + "px", playground.appendChild(n), logicPlayground[e][o] = { isFilled: !1, class: "" };
      }
    }
  }function drawPlayground() {
    for (var e = 0; e < logicPlayground.length; e++) {
      for (var o = 0; o < logicPlayground[e].length; o++) {
        var n = document.getElementById(e + "_" + o);logicPlayground[e][o].isFilled ? n.className = basicClassname + " " + logicPlayground[e][o].class : n.className = basicClassname;
      }
    }
  }function drawPlayer() {
    for (var e = 0; e < player.matrix.length; e++) {
      for (var o = 0; o < player.matrix[e].length; o++) {
        if (player.positionX + e >= 0 && 1 === player.matrix[e][o]) {
          var n = player.positionX + e + "_" + (player.positionY + o);document.getElementById(n).className += player.class;
        }
      }
    }
  }function newPiece() {
    var e = Math.floor(Math.random() * pieces.length);actualPiece = pieces[e], fallingCounter = 0, isNewPieceInPlayground = !0, player.positionY = 3, player.positionX = -2, player.actualRotatePosition = 0, player.class = actualPiece.class, player.matrix = actualPiece.rotation[0], fallingCounter = 0;
  }function setPieceToLogic() {
    for (var e = 0; e < player.matrix.length; e++) {
      for (var o = 0; o < player.matrix[e].length; o++) {
        player.positionX + e >= 0 && 1 === player.matrix[e][o] && (logicPlayground[e + player.positionX][o + player.positionY].isFilled = !0, logicPlayground[e + player.positionX][o + player.positionY].class = player.class);
      }
    }
  }function rotatePiece() {
    if (checkRotate(), isNewPieceInPlayground && canMove.rotate) {
      var e = actualPiece.rotation.length;player.actualRotatePosition++, player.actualRotatePosition >= e && (player.actualRotatePosition = 0), player.matrix = actualPiece.rotation[player.actualRotatePosition];
    }
  }function checkFullRows() {
    for (var e = 0, o = logicPlayground.length - 1; o >= 0; o--) {
      for (var n = !0, a = 0; a < logicPlayground[o].length; a++) {
        if (!logicPlayground[o][a].isFilled) {
          n = !1;break;
        }
      }n && e++, !n && e > 0 && moveRowDown(e, o);
    }scoreRows += e, updateScore();
  }function moveRowDown(e, o) {
    for (n = 0; n < logicPlayground[o].length; n++) {
      logicPlayground[o + e][n].isFilled = logicPlayground[o][n].isFilled, logicPlayground[o + e][n].class = logicPlayground[o][n].class;
    }for (var n = 0; n < e; n++) {
      for (var a = 0; a < logicPlayground[n].length; a++) {
        logicPlayground[n][a].isFilled = !1, logicPlayground[n][a].class = basicClassname;
      }
    }
  }function starNewGame() {
    hideControlsDiv(), playing = !0, gameOver = !1, canMove.down = !0, checkSetMobileLayout(), resetPlayground(), setInitialRowsLevel(), setMainHeading("ROWS: "), updateScore(), newPiece(), gameLoop();
  }function openModal(e) {
    "modalLevel" === e && (modalLevel.style.display = "flex"), "modalRows" === e && (modalRows.style.display = "flex"), modal.style.display = "flex";
  }function closeModal() {
    modalLevel.style.display = "none", modalRows.style.display = "none", modal.style.display = "none";
  }function getNumberFromId(e) {
    return e.split("_")[1];
  }function setMainHeading(e) {
    e.length > 0 && (mainHaeding.innerText = e);
  }function updateScore() {
    scoreRowsView.innerText = scoreRows;
  }function checkMove() {
    if (isNewPieceInPlayground) {
      canMove.left = !0, canMove.right = !0;for (var e = 0; e < player.matrix.length; e++) {
        for (var o = 0; o < player.matrix[e].length; o++) {
          player.positionX + e >= 0 && 1 === player.matrix[e][o] && ((player.positionY + o - 1 < 0 || logicPlayground[e + player.positionX][player.positionY + o - 1].isFilled) && (canMove.left = !1), (player.positionY + o + 1 >= numberOfColumns || logicPlayground[e + player.positionX][player.positionY + o + 1].isFilled) && (canMove.right = !1));
        }
      }
    }
  }function checkMoveDown() {
    canMove.down = !0;for (var e = 0; e < player.matrix.length; e++) {
      for (var o = 0; o < player.matrix[e].length; o++) {
        if (player.positionX + e >= 0 && 1 === player.matrix[e][o] && (player.positionX + e + 1 >= numberOfRows || logicPlayground[e + player.positionX + 1][o + player.positionY].isFilled)) {
          canMove.down = !1, isNewPieceInPlayground = !1;break;
        }
      }
    }
  }function checkRotate() {
    canMove.rotate = !0;var e = actualPiece.rotation.length,
        o = player.actualRotatePosition + 1;o >= e && (o = 0);var n = actualPiece.rotation[o],
        a = actualPiece.rotation[0].length;if (player.positionY < 0 || player.positionY > numberOfColumns - a) {
      for (var i = !0, t = !0, l = 0; l < n.length; l++) {
        for (r = 0; r < n[l].length; r++) {
          player.positionX + l >= 0 && 1 === n[l][r] && (logicPlayground[l + player.positionX][0 + r].isFilled && (i = !1), logicPlayground[l + player.positionX][numberOfColumns - a + r].isFilled && (t = !1));
        }
      }player.positionY < 0 && i && (player.positionY = 0), player.positionY > numberOfColumns - a && t && (player.positionY = numberOfColumns - a);
    }for (l = 0; l < n.length; l++) {
      for (var r = 0; r < n[l].length; r++) {
        if (player.positionX + l >= 0 && 1 === n[l][r] && (void 0 === logicPlayground[l + player.positionX][player.positionY + r] || logicPlayground[l + player.positionX][player.positionY + r].isFilled)) {
          canMove.rotate = !1;break;
        }
      }
    }
  }function checkGameOver() {
    for (var e = 0; e < player.matrix.length; e++) {
      for (var o = 0; o < player.matrix[e].length; o++) {
        if (player.positionX + e >= 0 && 1 === player.matrix[e][o] && logicPlayground[e + player.positionX][o + player.positionY].isFilled) {
          playing = !1, setMainHeading("GAME OVER: "), gameOver = !0, showControlsDiv();break;
        }
      }
    }
  }function resetPlayground() {
    for (var e = 0; e < logicPlayground.length; e++) {
      for (var o = 0; o < logicPlayground[e].length; o++) {
        logicPlayground[e][o].isFilled = !1, logicPlayground[e][o].class = basicClassname;
      }
    }scoreRows = 0, paused = !1, actualLevel = level;
  }function showControlsDiv() {
    controls.style.display = "block";
  }function hideControlsDiv() {
    controls.style.display = "none";
  }function setSpeed() {
    return actualLevel < 9 ? 1e3 - 100 * actualLevel - 50 : 50 * (11 - actualLevel);
  }function checkActualSpeedLevel() {
    var e = Math.floor(scoreRows / 10);e > actualLevel && e <= 10 && (actualLevel = e);
  }function setInitialRowsLevel() {
    for (var e = 0; e < rowsAtBeginning; e++) {
      for (var o = randomInitialRowsLevel(), n = 0; n < logicPlayground[e].length; n++) {
        1 === o[n] && (logicPlayground[logicPlayground.length - 1 - e][n].isFilled = !0, logicPlayground[logicPlayground.length - 1 - e][n].class += classes[Math.floor(Math.random() * classes.length)]);
      }
    }
  }function randomInitialRowsLevel() {
    for (var e = new Array(), o = 0; o < numberOfColumns; o++) {
      var n = Math.random();e[o] = n > .2 ? 1 : 0;
    }return n = Math.floor(9 * Math.random()) + 1, 0 != e[n] && (e[n] = 0), e;
  }function moveDown() {
    checkMoveDown(), canMove.down ? player.positionX++ : (setPieceToLogic(), checkFullRows(), newPiece());
  }function gameLoop() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (checkGameOver(), playing && !gameOver) {
      checkActualSpeedLevel(), fallingInterval = setSpeed(), drawPlayground(), canMove.down && !gameOver && drawPlayer();var o = e - lastTime;lastTime = e, (fallingCounter += o) >= fallingInterval && (waitOneGameLoop ? waitOneGameLoop = !1 : (checkMoveDown(), canMove.down ? player.positionX++ : (waitOneGameLoop = !0, setPieceToLogic(), checkFullRows(), newPiece()), fallingCounter = 0)), myRequest = requestAnimationFrame(gameLoop);
    } else cancelAnimationFrame(myRequest);
  }var classes = [" silver", " magenta", " yellow", " blue", " green", " cyan", " red"];var pieces = [{ class: classes[0], rotation: [[[0, 0, 0], [1, 1, 1], [0, 1, 0]], [[0, 1, 0], [1, 1, 0], [0, 1, 0]], [[0, 1, 0], [1, 1, 1], [0, 0, 0]], [[0, 1, 0], [0, 1, 1], [0, 1, 0]]] }, { class: classes[1], rotation: [[[0, 0, 0], [1, 0, 0], [1, 1, 1]], [[1, 1, 0], [1, 0, 0], [1, 0, 0]], [[0, 0, 0], [1, 1, 1], [0, 0, 1]], [[0, 1, 0], [0, 1, 0], [1, 1, 0]]] }, { class: classes[2], rotation: [[[0, 0, 0], [0, 0, 1], [1, 1, 1]], [[1, 0, 0], [1, 0, 0], [1, 1, 0]], [[0, 0, 0], [1, 1, 1], [1, 0, 0]], [[1, 1, 0], [0, 1, 0], [0, 1, 0]]] }, { class: classes[3], rotation: [[[0, 0, 0], [0, 1, 1], [1, 1, 0]], [[1, 0, 0], [1, 1, 0], [0, 1, 0]]] }, { class: classes[4], rotation: [[[0, 0, 0], [1, 1, 0], [0, 1, 1]], [[0, 0, 1], [0, 1, 1], [0, 1, 0]]] }, { class: classes[5], rotation: [[[0, 0, 0], [0, 1, 1], [0, 1, 1]]] }, { class: classes[6], rotation: [[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]]] }];var playground = document.getElementById("playground"),
      touchControlsButtons = document.getElementById("touchControlsButtons"),
      touchArrowLeft = document.getElementById("touchArrowLeft"),
      touchArrowUp = document.getElementById("touchArrowUp"),
      touchArrowDown = document.getElementById("touchArrowDown"),
      touchArrowRight = document.getElementById("touchArrowRight"),
      basicClassname = "playgroundCell",
      numberOfRows = 20,
      numberOfColumns = 10,
      scoreRows = 0,
      level = 5,
      actualLevel = 5,
      rowsAtBeginning = 8,
      gameOver = !0,
      controls = document.getElementById("controls"),
      startButton = document.getElementById("startButton"),
      mainHaeding = document.getElementById("mainHeading"),
      modal = document.getElementById("modal"),
      modalLevel = document.getElementById("modalLevel"),
      modalRows = document.getElementById("modalRows"),
      levelButton = document.getElementById("levelButton"),
      rowsButton = document.getElementById("rowsButton"),
      levelNumberView = document.getElementById("levelNumberView"),
      rowsNumberView = document.getElementById("rowsNumberView"),
      innerWidth = window.innerWidth,
      innerHeight = window.innerHeight,
      isMobile = !1,
      playgroundCellDimensions = 30;checkSetMobileLayout();var logicPlayground = new Array(),
      player = { positionX: -1, positionY: 3, class: " red", actualRotatePosition: 0, matrix: [] },
      actualPiece = pieces[0],
      isNewPieceInPlayground = !1;startButton.addEventListener("click", function () {
    starNewGame();
  });var canMove = { left: !0, right: !0, down: !0, rotate: !0 };document.addEventListener("keydown", function (e) {
    if (canMove.down && playing && (checkMove(), 37 == e.keyCode && canMove.left && player.positionY--, 38 == e.keyCode && rotatePiece(), 39 == e.keyCode && canMove.right && player.positionY++, 40 == e.keyCode && player.positionX >= -1)) for (; canMove.down;) {
      moveDown();
    }27 != e.keyCode && 80 != e.keyCode || (paused ? gameOver || (hideControlsDiv(), playing = !0, paused = !1, fallingCounter = 0, gameLoop()) : (showControlsDiv(), playing = !1, paused = !0)), 13 == e.keyCode && (playing || starNewGame());
  }), touchArrowLeft.addEventListener("click", function () {
    canMove.down && playing && (checkMove(), canMove.left && player.positionY--);
  }), touchArrowRight.addEventListener("click", function () {
    canMove.down && playing && (checkMove(), canMove.right && player.positionY++);
  }), touchArrowUp.addEventListener("click", function () {
    canMove.down && playing && (checkMove(), rotatePiece());
  }), touchArrowDown.addEventListener("click", function () {
    if (canMove.down && playing && (checkMove(), player.positionX >= -1)) for (; canMove.down;) {
      moveDown();
    }
  }), modal.addEventListener("click", function (e) {
    e.target == modal && closeModal();
  }), levelButton.addEventListener("click", function () {
    openModal("modalLevel");
  }), rowsButton.addEventListener("click", function () {
    openModal("modalRows");
  });for (var levelButtons = document.getElementsByClassName("modalItemL"), i = 0; i < levelButtons.length; i++) {
    levelButtons[i].addEventListener("click", function () {
      var e = getNumberFromId(this.id);level = e, levelNumberView.innerText = e, closeModal();
    });
  }for (var rowsButtons = document.getElementsByClassName("modalItemR"), i = 0; i < rowsButtons.length; i++) {
    rowsButtons[i].addEventListener("click", function () {
      var e = getNumberFromId(this.id);rowsAtBeginning = e, rowsNumberView.innerText = e, closeModal();
    });
  }var scoreRowsView = document.getElementById("filledRowsView"),
      playing = !1,
      paused = !1;fillPlaygroundWithGrid();var myRequest,
      requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
      lastTime = 0,
      fallingInterval = 1e3,
      fallingCounter = 0,
      waitOneGameLoop = !1;