$(document).ready(function() {
  $("#generate").click(generateRandomNumber);
});

function generateRandomNumber() {
  var min = Number($("#min").val());
  var max = Number($("#max").val());
  $("#result").html(getRandomInteger(min, max + 1));
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
