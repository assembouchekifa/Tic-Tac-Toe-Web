let turn, titel;
titel = document.querySelector(".titre");
turn = "X";
let summon = [];
function game(id) {
  let elem = document.getElementById(id);
  if (turn === "X" && elem.innerHTML == "") {
    elem.innerHTML = "X";
    elem.classList.add("x");
    turn = "O";
    titel.innerHTML = "Turn : O";
  } else if (turn === "O" && elem.innerHTML == "") {
    elem.innerHTML = "O";
    elem.classList.add("o");
    turn = "X";
    titel.innerHTML = "Turn : X";
  }
  winner();
}
function winner() {
  for (let index = 1; index <= 9; index++) {
    summon[index] = document.getElementById("caro" + index).innerHTML;
  }
  if (summon[1] == summon[2] && summon[3] == summon[2] && summon[1] != "") {
    drsa(1, 2, 3);
  } else if (
    summon[4] == summon[5] &&
    summon[5] == summon[6] &&
    summon[6] != ""
  ) {
    drsa(4, 5, 6);
  } else if (
    summon[7] == summon[8] &&
    summon[8] == summon[9] &&
    summon[9] != ""
  ) {
    drsa(7, 8, 9);
  } else if (
    summon[1] == summon[4] &&
    summon[4] == summon[7] &&
    summon[1] != ""
  ) {
    drsa(1, 4, 7);
  } else if (
    summon[5] == summon[2] &&
    summon[8] == summon[2] &&
    summon[8] != ""
  ) {
    drsa(5, 2, 8);
  } else if (
    summon[3] == summon[6] &&
    summon[3] == summon[9] &&
    summon[3] != ""
  ) {
    drsa(3, 6, 9);
  } else if (
    summon[1] == summon[5] &&
    summon[1] == summon[9] &&
    summon[1] != ""
  ) {
    drsa(1, 5, 9);
  } else if (
    summon[3] == summon[5] &&
    summon[3] == summon[7] &&
    summon[3] != ""
  ) {
    drsa(3, 5, 7);
  } else if (
    summon[1] != "" &&
    summon[2] != "" &&
    summon[3] != "" &&
    summon[4] != "" &&
    summon[5] != "" &&
    summon[6] != "" &&
    summon[7] != "" &&
    summon[8] != "" &&
    summon[9] != ""
  ) {
    titel.innerHTML = "DRAW";
    setInterval(function () {
      titel.innerHTML += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
function drsa(nu1, nu2, nu3) {
  titel.innerHTML = summon[nu1] + " He is the winner";
  document.getElementById("caro" + nu1).style.color = "#006600";
  document.getElementById("caro" + nu2).style.color = "#006600";
  document.getElementById("caro" + nu3).style.color = "#006600";
  setInterval(function () {
    titel.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
}
