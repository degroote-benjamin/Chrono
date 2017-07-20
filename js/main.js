var timer = null,
    interval = 1000,
    value = 1000;

$(".chrono").click(function() {
  if (timer !== null) return;
  timer = setInterval(function () {
      value = value-1;
      $(".chrono").val(value);
  }, interval);
});

$("#input").click(function() {
  clearInterval(timer);
  timer = null
});
