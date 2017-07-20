var value = ($(".timerses").text())

$(".chrono").text(($(".timerses").text())*60);

$('.chrono').on('click', function() {

  setInterval(function () {
        value = value-1;
    }, 1000);
})

$('.gaucheb').click(function(){
    $(".timerbreak").text($(".timerbreak").text()-1)
});

$('.droiteb').click(function(){
    $(".timerbreak").text(parseInt($(".timerbreak").text())+1)
});

$('.gauches').click(function(){
    $(".timerses").text($(".timerses").text()-1)
});

$('.droites').click(function(){
    $(".timerses").text(parseInt($(".timerses").text())+1)
});
