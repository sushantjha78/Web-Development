const drums = document.querySelectorAll(".drum");
total_num = drums.length;

let instruments = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass",
};

for (i = 0; i < total_num; i++) {
  ["click", "keydown"].forEach((evt) =>
    drums[i].addEventListener(evt, function (evt) {
      if (evt.type === "click") {
        var audio = new Audio("sounds/" + instruments[this.innerHTML] + ".mp3");
        audio.play();
        animatekey(this.innerHTML);
      } else if (evt.type === "keypress") {
        var audio = new Audio("sounds/" + instruments[evt.key] + ".mp3");
        audio.play();
        animatekey(evt.key);
      }
    })
  );
}


function animatekey(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
  }