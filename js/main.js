var value = ($(".timerses").text()) * 60

$(".chrono").text(sec(value));

$('.gaucheb').click(function() {
    $(".timerbreak").text($(".timerbreak").text() - 1)
    if($(".timerbreak").text()<1){
      $(".timerbreak").text(1)
    }
});

$('.droiteb').click(function() {
    $(".timerbreak").text(parseInt($(".timerbreak").text()) + 1)
});

$('.gauches').click(function() {
    $(".timerses").text($(".timerses").text() - 1)
    if($(".timerses").text()<1){
      $(".timerses").text(1)
    }
    value = ($(".timerses").text()) * 60
    $(".chrono").text(sec(value));
});

$('.droites').click(function() {
    $(".timerses").text(parseInt($(".timerses").text()) + 1)
    value = ($(".timerses").text()) * 60
    $(".chrono").text(sec(value));
});


function sec(d) {
    d = Number(d);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    if( m <10){
      m = "0" + m
    }
    if(s<10){
      s = "0" + s 
    }
    return m + ":" + s
}


    setInterval(function() {
        value = value - 1;
        $(".chrono").text(sec(value));
    }, 1000);
