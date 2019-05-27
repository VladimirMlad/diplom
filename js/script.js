
$(function(){
    $('.zapis').click(function () {
        $('.modal-shadow').show();
        $('.modal-window').show();
    });

    $('.modal-shadow').click(function () {
        $('.modal-shadow').hide();
        $('.modal-window').hide();
    });

    $('.close').click(function () {
        $('.modal-shadow').hide();
        $('.modal-window').hide();
    });
});

$(function(){
    $('.phone').click(function () {
        $('.modal-shadow-phone').show();
        $('.modal-window-phone').show();
    });

    $('.modal-shadow-phone').click(function () {
        $('.modal-shadow-phone').hide();
        $('.modal-window-phone').hide();
    });

    $('.close-phone').click(function () {
        $('.modal-shadow-phone').hide();
        $('.modal-window-phone').hide();
    });
});

$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $(".phonemask").mask("8(999) 999-99-99");
});

