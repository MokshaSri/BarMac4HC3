$('#username, #password').on('input', function() {
    if ($('#username').val() && $('#password').val()) {
        $('.login').addClass('buttonafter');
    } else {
        $('.login').removeClass('buttonafter');
    }
});