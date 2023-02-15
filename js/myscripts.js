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
    this.wins = 0;
    this.losses = 0;
    this.notification = "testing";
  }
  roll() {
    this.die1.rolls();
    this.die2.rolls();
    this.sum = this.die1.rolls() + this.die2.rolls();
    // console.log(this.sum);
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

  //keep track of wins and losses
  gameStats(){
    if(this.game_status == "Winner"){
      this.wins += 1;
    }else if(this.game_status == "Loser"){
      this.losses += 1;
    }
  }
  gameNotifications(){
    if(this.game_status == "Winner"){
      this.notification = "Congratulations You won!";
    }else if(this.game_status == "Loser"){
      this.notification = "Sorry you lost";
    }
  }

}

let craps = new Craps();
let start = document.getElementById("craps");
let reset = document.getElementById("reset");

//my ui vars
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let sum = document.getElementById("sum");
let point = document.getElementById("point");
let roll_number = document.getElementById("roll_number");
let game_status = document.getElementById("game_status");
let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
let notification = document.getElementById("notification");
let popToast = document.getElementById("liveToast");



//onload default state
window.addEventListener("load", function (e) {
  sum.innerHTML = craps.sum;
  point.innerHTML = craps.point;
  roll_number.innerHTML = craps.roll_number;
  game_status.innerHTML = craps.game_status;
  wins.innerHTML = craps.wins;
  losses.innerHTML = craps.losses;
  notification.innerHTML = craps.notification;
  //append css class to 
  popToast.classList.add("hide"); 
  //default faces
  die1.src = "./img/1.png";
  die2.src = "./img/1.png";
  //hide reset button
  reset.classList.add("invisible");
 
})

//start/roll
start.addEventListener("click", function (e) {
  craps.roll();
  craps.gameStats();
  craps.gameNotifications();
  die1.src = "./img/" + craps.die1.face + ".png";
  die2.src = "./img/" + craps.die2.face + ".png";
  point.innerHTML = craps.point
  sum.innerHTML = craps.sum;
  game_status.innerHTML = craps.game_status;
  roll_number.innerHTML = craps.roll_number;
  wins.innerHTML = craps.wins;
  losses.innerHTML = craps.losses;
  //show notification
  if (craps.game_status == "Winner" || craps.game_status == "Loser") {
    notification.innerHTML = craps.notification;
    popToast.classList.add("show");
  } 
  // console.log(craps);

  //disable roll button after win or loss
  if (craps.game_status == "Winner" || craps.game_status == "Loser") {
    start.classList.add("disabled");
    reset.classList.remove("invisible");
    reset.classList.add("visible");
  }

});
//reset game and state
reset.addEventListener("click", function (e) {
  craps.resetGame();
  popToast.classList.remove("show");
  point.innerHTML = craps.point
  sum.innerHTML = craps.sum;
  game_status.innerHTML = craps.game_status;
  roll_number.innerHTML = craps.roll_number;
  die1.src = "./img/1.png";
  die2.src = "./img/1.png";
  //remove/add disble class
  start.classList.remove("disabled");
  reset.classList.remove("visible");
  reset.classList.add("invisible");
  

});
 

