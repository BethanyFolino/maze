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

// let player = {
//   col: 0,
//   row: 0,
// };

// let finish = {
//   col: 0,
//   row: 0,
// };

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

      // div.dataset.y = mapRow;
      // div.dataset.x = mapColumn;

      if (colStr === "W") {
        div.className = "wall";
        rowDiv.append(div);
      } else if (colStr === "S") {
        div.className = "start";
        rowDiv.append(div);
        div.append(player);
      } else if (colStr === "F") {
        div.className = "finish";
        rowDiv.append(div);
      } else {
        div.className = "empty";
        rowDiv.append(div);
      }
    }
    maze.append(rowDiv);
  }
};
// let playerTop = 566; //absolute positioning
// let playerLeft = 9;
const movePlayer = function (evt) {
  player.element += `${evt.code}`;

  if (evt.code === "ArrowDown") {
    //I know that colStr doesn't work because colStr is inside the makeMaze function, but don't know what does work
    if (colStr !== "W") {
      colStr.append(player);
    }
    if (colStr === "F") {
      document.write("You won!");
    }
  } else if (evt.code === "Arrow Up") {
    if (colStr !== "W") {
      colStr.append(player);
    }
    if (colStr === "F") {
      document.write("You won!");
    }
  } else if (evt.code === "Arrow Right") {
    if (colStr !== "W") {
      colStr.append(player);
    }
    if (colStr === "F") {
      document.write("You won!");
    }
  } else if (evt.code === "Arrow Left") {
    if (colStr !== "W") {
      colStr.append(player);
    }
    if (colStr === "F") {
      document.write("You won!");
    }
  }
  // switch (evt.code) {
  //   case "ArrowRight":
  //     playerLeft = playerLeft + 50;
  //     document.querySelector(".player").style.left = playerLeft + "px";
  //     break;

  //   case "ArrowLeft":
  //     playerLeft = playerLeft - 50;
  //     document.querySelector(".player").style.left = playerLeft + "px";
  //     break;

  //   case "ArrowDown":
  //     playerTop = playerTop + 50;
  //     document.querySelector(".player").style.top = playerTop + "px";
  //     break;

  //   case "ArrowUp":
  //     playerTop = playerTop - 50;
  //     document.querySelector(".player").style.top = playerTop + "px";
  // }
};

document.addEventListener("keydown", movePlayer);
makeMaze(map);
