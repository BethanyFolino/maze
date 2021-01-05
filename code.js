//Got some assistance from Randy's maze demo, Cesar Ramos, Marcel Cornett, maze deep dive

const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

let playerLocation = {
  col: 0,
  row: 0,
};

let finish = {
  col: 0,
  row: 0,
};

let maze = document.getElementById("maze");

let player = document.createElement("div");
player.className = "player";

let makeMaze = function (model) {
  for (let mapRow = 0; mapRow < model.length; mapRow++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    let rowStr = model[mapRow];

    for (let mapColumn = 0; mapColumn < model[mapRow].length; mapColumn++) {
      let colStr = rowStr[mapColumn];
      let div = document.createElement("div");
      div.id = mapRow + "-" + mapColumn;

      if (colStr === "W") {
        div.className = "wall";
        rowDiv.append(div);
      } else if (colStr === "S") {
        div.className = "start";
        rowDiv.append(div);
        div.append(player);
        playerLocation.row = mapRow;
        playerLocation.col = mapColumn;
      } else if (colStr === "F") {
        div.className = "finish";
        rowDiv.append(div);
        finish.row = mapRow;
        finish.col = mapColumn;
      } else {
        div.className = "empty";
        rowDiv.append(div);
      }
    }
    maze.append(rowDiv);
  }
};

const movePlayer = function (evt) {
  player.element += `${evt.code}`;

  if (evt.code === "ArrowDown") {
    let destinationRow = (playerLocation.row += 1);
    let destinationId = destinationRow + "-" + playerLocation.col;

    if (map[destinationRow][playerLocation.col] === "W") {
      destinationRow = playerLocation.row += -1;
    } else if (map[destinationRow][playerLocation.col] !== "W") {
      document
        .getElementById(destinationId)
        .append(document.querySelector(".player"));
    }
  } else if (evt.code === "ArrowUp") {
    let destinationRow = (playerLocation.row += -1);
    let destinationId = destinationRow + "-" + playerLocation.col;

    if (map[destinationRow][playerLocation.col] === "W") {
      destinationRow = playerLocation.row += 1;
    } else if (map[destinationRow][playerLocation.col] !== "W") {
      document
        .getElementById(destinationId)
        .append(document.querySelector(".player"));
    }
  } else if (evt.code === "ArrowRight") {
    let destinationColumn = (playerLocation.col += 1);
    let destinationId = playerLocation.row + "-" + destinationColumn;

    if (map[playerLocation.row][destinationColumn] === "W") {
      destinationColumn = playerLocation.col += -1;
    } else if (map[playerLocation.row][destinationColumn] !== "W") {
      document
        .getElementById(destinationId)
        .append(document.querySelector(".player"));
    }
  } else if (evt.code === "ArrowLeft") {
    let destinationColumn = (playerLocation.col += -1);
    let destinationId = playerLocation.row + "-" + destinationColumn;

    if (map[playerLocation.row][destinationColumn] === "W") {
      destinationColumn = playerLocation.col += 1;
    } else if (map[playerLocation.row][destinationColumn] !== "W") {
      document
        .getElementById(destinationId)
        .append(document.querySelector(".player"));
    }
  }
  if (map[playerLocation.row][playerLocation.col] === "F") {
    let winMessage = "You won! Grogu found the knob!";
    let message = document.getElementById("message");
    message.append(winMessage);
  }
};

document.addEventListener("keydown", movePlayer);
makeMaze(map);
