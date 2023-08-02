function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

randomNumber1 = getRandomInt(1, 7);
randomNumber2 = getRandomInt(1, 7);

link1 = "images/dice" + randomNumber1 + ".png";
link2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", link1);
document.querySelector(".img2").setAttribute("src", link2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
