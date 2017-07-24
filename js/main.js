var value = ($(".timerses").text())
var actuel = "default"
var start = "stop"
var timer
value = value * 60

$(".chrono").click(function(){
  timer = setInterval(function() {
      value = value - 1;
      $(".chrono").text(sec(value));
      swap()
  }, 1000);
})

// init val in chrono
$(".chrono").text(sec(value));


// break button
$('.gaucheb').click(function() {
    $(".timerbreak").text($(".timerbreak").text() - 1)
    if ($(".timerbreak").text() < 1) {
        $(".timerbreak").text(1)
    }
    clearInterval(timer)
});

$('.droiteb').click(function() {
    $(".timerbreak").text(parseInt($(".timerbreak").text()) + 1)
    clearInterval(timer)
});


// session button
$('.gauches').click(function() {
    $(".timerses").text($(".timerses").text() - 1)
    if ($(".timerses").text() < 1) {
        $(".timerses").text(1)
    }
    value = ($(".timerses").text()) * 60
    $(".chrono").text(sec(value));
    clearInterval(timer)
});

$('.droites').click(function() {
    $(".timerses").text(parseInt($(".timerses").text()) + 1)
    value = ($(".timerses").text()) * 60
    $(".chrono").text(sec(value));
    clearInterval(timer)
});


// function for minute
function sec(d) {
    d = Number(d);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    return m + ":" + s
}


// function for swap break and session
function swap() {
    if (actuel == "default" && value == 0) {
        value = ($(".timerbreak").text()) * 60
        actuel = "break"
    } else if (actuel == "break" && value == 0) {
        value = ($(".timerses").text()) * 60
        actuel = "default"
    }
}
