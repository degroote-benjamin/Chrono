var value = ($(".timerses").text())
var actuel = "default"
var timer = null
value = value * 60

$("#bonjour").click(function() {
    if ($("#bonjour").hasClass("chrono")) {
        if (timer !== null) {
            return;
        }
        timer = setInterval(function() {
            value = value - 1;
            $("#bonjour").text(sec(value));
            swap()
        }, 1000);
        $("#bonjour").toggleClass('chrono chronos');
    } else if ($("#bonjour").hasClass("chronos")) {
        clearInterval(timer)
        timer = null
        $("#bonjour").toggleClass('chronos chrono');
    }
})



// init val in chrono
$("#bonjour").text(sec(value));


// break button
$('.gaucheb').click(function() {
    $(".timerbreak").text($(".timerbreak").text() - 1)
    if ($(".timerbreak").text() < 1) {
        $(".timerbreak").text(1)
    }
    if (actuel === "break") {
        value = ($(".timerbreak").text()) * 60
        $("#bonjour").text(sec(value));
        clearInterval(timer)
        timer = null
        $("#bonjour").toggleClass('chronos chrono');
    }
});

$('.droiteb').click(function() {
    $(".timerbreak").text(parseInt($(".timerbreak").text()) + 1)
    if (actuel === "break") {
        value = ($(".timerbreak").text()) * 60
        $("#bonjour").text(sec(value));
        clearInterval(timer)
        timer = null
        $("#bonjour").toggleClass('chronos chrono');
    }
});


// session button
$('.gauches').click(function() {
    $(".timerses").text($(".timerses").text() - 1)
    if ($(".timerses").text() < 1) {
        $(".timerses").text(1)
    }
    if (actuel === "default") {
        value = ($(".timerses").text()) * 60
        $("#bonjour").text(sec(value));
        clearInterval(timer)
        timer = null
        $("#bonjour").toggleClass('chronos chrono');
    }
});

$('.droites').click(function() {
    $(".timerses").text(parseInt($(".timerses").text()) + 1)
    if (actuel === "default") {
        value = ($(".timerses").text()) * 60
        $("#bonjour").text(sec(value));
        clearInterval(timer)
        timer = null
        $("#bonjour").toggleClass('chronos chrono');
    }
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
