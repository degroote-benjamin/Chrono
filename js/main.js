var value = ($(".timerses").text())
var actuel = "default"
var timer = null
value = value * 60
$('.session').css('background-color', 'blue');

$("#bonjour").click(function() {
    if ($("#bonjour").hasClass("chrono")) {
          animationcolor()
        if (timer !== null) {
            return;
        }
        timer = setInterval(function() {
            value = value - 1;
            $(".timer").text(minute(value));
            swap()
        }, 1000);
        $("#bonjour").toggleClass('chrono chronos');
    } else if ($("#bonjour").hasClass("chronos")) {
        clearInterval(timer)
        timer = null
        $("#bonjour").toggleClass('chronos chrono');
        $('.session').stop()
    }
})


// init val in chrono
$(".timer").text(minute(value));


// break button
$('.gaucheb').click(function() {
    $(".timerbreak").text($(".timerbreak").text() - 1)
    if ($(".timerbreak").text() < 1) {
        $(".timerbreak").text(1)
    }
    if (actuel === "break") {
        value = ($(".timerbreak").text()) * 60
        $(".timer").text(minute(value));
        clearInterval(timer)
        timer = null
$("#bonjour").removeClass("chronos").addClass("chrono")    }
});

$('.droiteb').click(function() {
    $(".timerbreak").text(parseInt($(".timerbreak").text()) + 1)
    if (actuel === "break") {
        value = ($(".timerbreak").text()) * 60
        $(".timer").text(minute(value));
        clearInterval(timer)
        timer = null
        $("#bonjour").removeClass("chronos").addClass("chrono")
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
        $(".timer").text(minute(value));
        clearInterval(timer)
        timer = null
$("#bonjour").removeClass("chronos").addClass("chrono")    }
});

$('.droites').click(function() {
    $(".timerses").text(parseInt($(".timerses").text()) + 1)
    if (actuel === "default") {
        value = ($(".timerses").text()) * 60
        $(".timer").text(minute(value));
        clearInterval(timer)
        timer = null
$("#bonjour").removeClass("chronos").addClass("chrono")    }
});


// function for minute
function minute(d) {
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
        $('.session').css('background-color', 'red');
        $('.session').width('0px')
        $('.session').height('0px')
        animationcolor()
    } else if (actuel == "break" && value == 0) {
        value = ($(".timerses").text()) * 60
        actuel = "default"
        $('.session').css('background-color', 'blue');
        $('.session').width('0px')
        $('.session').height('0px')
        animationcolor()
    }
}

function animationcolor() {
        $('.session').animate({
            height: '100%',
            width: '100%',
        }, (value * 1000));
}
