// JavaScript Document
$('#agreement').scroll(function(event) {
    var scroller = $(this)
        , cnt = $('.content', this);
        
    if (scroller.scrollTop() + scroller.height() >= cnt.height()) {
        $('#confirm').removeAttr('disabled');
    }
    else {
        $('#confirm').attr('disabled', 'disabled');
    }
});