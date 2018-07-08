(function($) {
    $('.modal #phone').inputmask({
        'mask': '+79999999999',
    });
    $('.modal #code').inputmask({
        'mask': '9999',
        'placeholder': ''
    });
    $('.modal #my_name, .modal #my_surname').inputmask({
        'mask': 'a{2,}',
        'placeholder': ''
    });
    /*
    $('.date input').inputmask({
        alias: 'datetime'
    });
    $('#send-mail').inputmask({
        alias: "email"
    });
    $('#change-under-weight-count').inputmask({
        'mask': '0.9{0,2}',
        'placeholder': '0'
    });
    $('#change-price-count').inputmask({
        'mask': '9.9{0,2}',
        'placeholder': '0'
    });
    $('#max-new-loading-count').inputmask({
        'mask': '99'
    });
    $('#min-new-loading-count').inputmask({
        'mask': '99'
    });
    $('#permissible-disproportion').inputmask({
        'mask': '0.99',
        'placeholder': '0'
    });
    $('#price-disproportion-val').inputmask({
        'mask': '9{1,3}.9{0,2}',
        'placeholder': '0'
    });
    $('#change-loading-speed').inputmask({
        'mask': '99',
        'placeholder': ''
    });
    $('#size-tons').inputmask({
        'mask': '9{2,6}',
        'placeholder': ''
    });
    //
    $('#price-disproportion-val').inputmask({
        'mask': '9{2,5}',
        'placeholder': ''
    });
    $('#number-trucks-loading').inputmask({
        'mask': '9{1,2}',
        'placeholder': '0'
    });
    $('#shipper-inn').inputmask({
        'mask': '(9{10})|(9{12})',
        'placeholder': ''
    });
    $('#shipper-inn-up').inputmask({
        'mask': ['9{10}', '9{12}'],
        'placeholder': ''
    });*/
})(jQuery);