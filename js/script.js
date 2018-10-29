function changeReadMore() {
    // console.log("Function needs to be implemented");
}

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$("button").on("click", function () {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
        el.text(el.data("text-original"));
    } else {
        el.data("text-original", el.text());
        el.text(el.data("text-swap"));
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#info-box-one').addClass('animated fadeInLeft');
        $('#info-box-two').addClass('animated fadeInRight');
    } else {
        $('#dynamic').removeClass('newClass');
    }
});

$('#third').on('click', function (event) {
    console.log("clicked");
    // $(".collapse").collapse('hide');
});
