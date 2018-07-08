(function($) {
    $(function() {
        var _dropdown;
        var settings = {autoReinitialise: true};
        $('.select-custom, .c-select__list--js').styler({
            selectPlaceholder: '',
            selectSearch: false,
            selectSmartPositioning: true,
            onFormStyled: function(){
                _dropdown = $('.jq-selectbox__dropdown');
                _dropdown.find('ul').wrap('<div class="scrollbar-macosx" style="max-height: 100%;"><div class="permanent"></div></div>');
            },
            onSelectOpened: function(){
                var _ul = $(this).find('.jq-selectbox__dropdown ul');
                var height = _ul.height();
                var _srollPane = _dropdown.find('.scrollbar-macosx');
                _srollPane.height(height);
                _ul.css('max-height', 'none');
                _srollPane.scrollbar().trigger('refresh');
            }
        });
    });
})(jQuery);