// add click event listener to h1 element and change the color of the h1 element
$("button").click(function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
