$('.reqAndRes').addClass('d-none')
$('.responseStatus').addClass('d-none')

$('select').change(function () {
    if ($('option:selected').val() == 'GET') {
        $('.reqAndRes').removeClass('d-none')
        $('.responseStatus').removeClass('d-none')
        $('.request').addClass('d-none')
    } else if ($('option:selected').val() == 'POST') {
        $('.reqAndRes').removeClass('d-none')
        $('.responseStatus').removeClass('d-none')
        $('.request').removeClass('d-none')
        $('.reponse').removeClass('d-none')
    } else {
        $('.reqAndRes').addClass('d-none')
        $('.responseStatus').addClass('d-none')
    }
})

$('button').click(function(){
    if ($('option:selected').val() == 'GET') {
        if ($('input').val() == '') {
            return
        }
        $.ajax({
            url: `${$('input').val()}`,
            type:'get',
            success: function (response,status,header) {
                $('.responseBody').eq(0).text(JSON.stringify(response.data))
                $('.responseStatus').eq(0).text('Plain Text : ' + header
                .getResponseHeader('content-type').split(';')[0].split('/')[1] + ', ' + 'Status' + header.status)
                // get "json" from "application/json; charset=utf-8" string
            },
            error:function(err) {
                $('.responseBody').eq(0).text(err.statusText);
                $('.responseStatus').eq(0).text('Response type : ' + err
                .getResponseHeader('content-type').split(';')[0] + ', ' + 'Status' + err.status)
            }
        })
    }

    if ($('option:selected').val() == 'POST') {
        if ($('input').val() == '' | $('.requestBody').val() == '') {
            return
        }
        $.ajax({
            url: `${$('input').val()}`,
            type: 'post',
            data: $('.requestBody').val(),
            contentType: 'application/json',
            success: function (response,status,header) {
                $('.responseBody').text(JSON.stringify(response));
                $('.responseStatus').text('Plain Text : ' + header
                .getResponseHeader('content-type').split(';')[0].split('/')[1] + ', ' + 'Status ' + header.status)
                // get "json" from "application/json; charset=utf-8" string
            },
            error:function(err) {
                $('.responseBody').eq(0).text(err.statusText);
                $('.responseStatus').eq(0).text('Response type : ' + err
                .getResponseHeader('content-type').split(';')[0] + ', ' + 'Status' + err.status)
            }
        })
    }
})