(function($) {
    $.fn.toggleCheckboxes = function(container) {
        checkboxes = container.find(':checkbox').not(this);
        if(this.is(':checked')) {
            checkboxes.prop('checked', true);
            checkboxes.closest('.table_row').addClass('illumination');
        } else {
            checkboxes.prop('checked', false);
            checkboxes.closest('.table_row').removeClass('illumination');
        }
    }
}(jQuery));

$('.my_timeslots').on('change', 'input[id^="all_check"]', function() {
    $(this).toggleCheckboxes($(this).closest('.table_actual_orders'));
});

$('input[id^="check_item"]').each(function(i) {
    $(this).on({ click: function (event) {
        thischeck = $(this);
        if(thischeck.prop('checked')) {
            thischeck.closest('.table_row').addClass('illumination');
            $(this).closest('.my_timeslots').find('.group_footer').show();
        } else if(!thischeck.prop('checked')){
            thischeck.closest('.table_row').removeClass('illumination');
        }
    }
    });
});

$(document).ready(function() {
    function showToggleFooter() {
        var checkboxes_checked = $('.my_timeslots .table_body input[type="checkbox"]:checked').length;
        if(checkboxes_checked > 0) {
            $('.my_timeslots').find('.group_footer').removeClass('hide');
        } else {
            $('.my_timeslots').find('.group_footer').addClass('hide');
        }
    }

    showToggleFooter();

    $('.my_timeslots').on('load change', 'input[type="checkbox"]', function() {
        showToggleFooter();
    });
});
