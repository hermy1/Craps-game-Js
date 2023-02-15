/*
app: Craps game vanilla JS
class: INF255
HM: 3
*/

window.addEventListener("click", function (e) {});

class Die {
  constructor(number_sides = 6) {
    this.number_sides = number_sides;
    this.face = 0;
  }
  rolls() {
    this.face = Math.floor(Math.random() * this.number_sides) + 1;
    return this.face;
  }
}

class Craps {
  constructor() {
    this.die1 = new Die();
    this.die2 = new Die();
    this.point = 0;
    this.sum = 0;
    this.roll_number = 1;
    this.game_status = "ongoing";
  }
  roll() {
    this.die1.rolls();
    this.die2.rolls();
    this.sum = this.die1.rolls() + this.die2.rolls();
    console.log(this.sum);
    // this.roll_number++;
    if (this.roll_number == 1) {
      if (this.sum == 7 || this.sum == 11) {
        this.game_status = "Winner";
      } else if (this.sum == 2 || this.sum == 3 || this.sum == 12) {
        this.game_status = "Loser";
      } else {
        this.point = this.sum;
        this.roll_number += 1;
      }
    } else {
      if (this.sum == this.point) {
        this.game_status = "Winner";
      } else if (this.sum == 7) {
        this.game_status = "Loser";
      } else {
        self.roll_number += 1;
      }
    }
  }
 resetGame() {
    this.die1 = new Die();
    this.die2 = new Die();
    this.point = 0;
    this.sum = 0;
    this.roll_number = 1;
    this.game_status = "ongoing";
  }
}

let craps = new Craps();
let start = document.getElementById("craps");
let reset = document.getElementById("reset");

//ui values
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let sum = document.getElementById("sum");
let point = document.getElementById("point");
let roll_number = document.getElementById("roll_number");
let game_status = document.getElementById("game_status");

window.addEventListener("load", function (e) {
  // die1.innerHTML = craps.die1.face;
  // die2.innerHTML = craps.die2.face;
  sum.innerHTML = craps.sum;
  point.innerHTML = craps.point;
  roll_number.innerHTML = craps.roll_number;
  game_status.innerHTML = craps.game_status;
})
start.addEventListener("click", function (e) {
  craps.roll();
  point.innerHTML = craps.point
  sum.innerHTML = craps.sum;
  game_status.innerHTML = craps.game_status;
  roll_number.innerHTML = craps.roll_number;
  console.log(craps);


});
reset.addEventListener("click", function (e) {
  craps.resetGame();
  point.innerHTML = craps.point
  sum.innerHTML = craps.sum;
  game_status.innerHTML = craps.game_status;
  roll_number.innerHTML = craps.roll_number;
  console.log(craps);
});
// function roll(){
//   craps.roll();
//   document.getElementById("die1").innerHTML = craps.die1.face;
//   document.getElementById("die2").innerHTML = craps.die2.face;
//   document.getElementById("sum").innerHTML = craps.sum;
//   document.getElementById("point").innerHTML = craps.point;
//   document.getElementById("roll_number").innerHTML = craps.roll_number;
//   document.getElementById("game_status").innerHTML = craps.game_status;
// }

// function new_game(){
//   craps = new Craps();
//   document.getElementById("die1").innerHTML = craps.die1.face;
//   document.getElementById("die2").innerHTML = craps.die2.face;
//   document.getElementById("sum").innerHTML = craps.sum;
//   document.getElementById("point").innerHTML = craps.point;
//   document.getElementById("roll_number").innerHTML = craps.roll_number;
//   document.getElementById("game_status").innerHTML = craps.game_status;
// }
