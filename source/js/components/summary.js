$('summary').click(function(){
    if (!$(this).parent('details').attr('open')){
        $(this).children('img').css('transform', 'rotate(180deg)')
    } else {
        $(this).children('img').css('transform', 'rotate(0deg)')
    }
})