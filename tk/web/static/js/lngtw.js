$(document).ready(function () {
    // Show JS-objects and hide non JS objects
    $('.js').show();
    $('.nojs').hide();

    // Keep session
    $('#content').everyTime(300000, function(){
        $.get('/ping');
    });

    // Initialize counter
    messageEventListener();
    $('#message').change(messageEventListener);
    $('#message').keyup(messageEventListener);

    // Initialize color changing
    $('input[name="font-color"]').change(function(){
        $('#message').css('color', $('input[name="font-color"]:checked').val());
    });

    $('input[name="background-color"]').change(function(){
        $('#message').css('background-color', $('input[name="background-color"]:checked').val());
    });

    // For iPhone
    var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', true).change();
        });
    }

    // Init twitter widget
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});

function messageEventListener() {
    if ($('#message').size() > 0 && $('#counter').empty().size() > 0) {
        var length = $('#message').val().length;
        $('#counter').text(length);
        if (length > 1300) {
            $('#counter').css('color', 'red');
        } else if (length > 140) {
            $('#counter').css('color', 'green');
        } else {
            $('#counter').css('color', 'gray');
        }
    }
}
