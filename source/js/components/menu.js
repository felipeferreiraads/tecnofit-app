import 'jquery-smooth-scroll'

$('header a, #banner a, .menu-mobile a').not('.open-menu, .close-menu').on('click', function (event) {
    event.preventDefault()
    $.smoothScroll({
        scrollTarget: $(this).attr('href'),
        speed: 1400
    })
})

$('.open-menu').on('click', function (e) {
    e.preventDefault()
    $('.menu-mobile').css('right', 0)
    $('.overlay-menu').fadeIn(300)
})

$('.overlay-menu, .close-menu, .menu-mobile a').on('click', function (e) {
    $('.menu-mobile').css('right', -300)
    $('.overlay-menu').fadeOut(300)
})