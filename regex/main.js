$(document).ready(function() {
    $('button').click(function() {
        if (!(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«0-9\\/<>?:;|=.,]{1,30}$/).test($('.fname').val())) {
            $('.fname-false').removeClass('d-none')
            $('.fname-false').addClass('d-block')
        } else {
            $('.fname-false').removeClass('d-block')
            $('.fname-false').addClass('d-none')
        }

        if (!(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«0-9\\/<>?:;|=.,]{1,30}$/).test($('.lname').val())) {
            $('.lname-false').removeClass('d-none')
            $('.lname-false').addClass('d-block')
        } else {
            $('.lname-false').removeClass('d-block')
            $('.lname-false').addClass('d-none')
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('.email').val()))) {
            $('.email-false').removeClass('d-none')
            $('.email-false').addClass('d-block')
        } else {
            $('.email-false').removeClass('d-block')
            $('.email-false').addClass('d-none')
        }
        if (!(/^(?=.*?\w)(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test($('.pass').val()))) {
            $('.pass-false').removeClass('d-none')
            $('.pass-false').addClass('d-block')
        } else {
            $('.pass-false').removeClass('d-block')
            $('.pass-false').addClass('d-none')
        }
    })
})