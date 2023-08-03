// generate random color
function get_random_color() {
  var colors = ["green", "red", "yellow", "blue"];
  var random = Math.floor(Math.random() * 4);
  return colors[random];
}

// display the current level
function display_level(num) {
  return "Level " + num.toString();
}

// display game over
function display_game_over() {
  return "Game Over, Press Any Key to Restart";
}

// play sound
function play_color_sound(color) {
  var audio = new Audio(color + ".mp3");
  audio.play;
}

// get user input
function user_input() {
  var btn_color = "";
  $(".btn").click(function (evt) {
    btn_color = evt.target.id;
  });
  return btn_color;
}

// animate button press
function animate_press(color) {
  play_color_sound(color);
  $("#" + color).addClass("pushed");
  setTimeout(function () {}, 100);
  $("#" + color).removeClass("pushed");
}

// game over animations
function game_over() {
  play_color_sound("wrong");
  $(document).addClass("game-over");
  setTimeout(function () {}, 100);
  $(document).removeClass("game-over");
  $("h1").text(display_game_over());
}

// game controlling functions
//start
function start_game() {
  var colors = [];
  $(".btn").keypress(function () {
    progress_levels(colors);
  });
}

//keep progressing levels
function progress_levels(colors) {
  // choose a random color
  colors.push(get_random_color());

  //display level
  $("h1").display_level(colors.length);

  //play the sound and push corresponding to the color
  animate_press(colors[-1]);

  // get user-clicked button
  user_color = user_input();
  animate_press(user_color);

  //check if right color
  for (var i = 0; i < colors.length; i++) {
    if (colors[i] == user_color) {
    } else {
      game_over();
      return;
    }
  }
  progress_levels(colors);
}

// new game after game
while (true) {
  start_game();
}
