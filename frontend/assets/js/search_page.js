(function($) {
    $(document).ready(function(){
        $('input[name="quick_search"]').keyup(function(){
            searchToPage($(this), $('.list_district_selection_form li'));
        });

        function searchToPage(element, where) {
            _this = element;
            $.each(where, function() {
                if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                    $(this).hide();
                else
                    $(this).show();
            });
        }
    });
})(jQuery);