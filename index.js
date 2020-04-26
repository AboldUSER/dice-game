var dicebutton = document.getElementsByClassName("diceButton")[0];
dicebutton.onclick = function diceroll() {
  var dice1 = document.querySelector("img.img1");
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var image1 = "images/dice" + randomNumber1 + ".png";
  dice1.setAttribute("src", image1);
  var dice2 = document.querySelector("img.img2");
  var randomNumber2 = Math.ceil(Math.random() * 6);
  var image2 = "images/dice" + randomNumber2 + ".png";
  dice2.setAttribute("src", image2);
  var victoryText = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    victoryText.innerHTML = ("Player 1 Wins");
  } else if (randomNumber1 < randomNumber2) {
    victoryText.innerHTML = ("Player 2 Wins");
  } else {
    victoryText.innerHTML = ("Draw")
  }
}