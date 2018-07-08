$(document).ready(function() {
    $(function () {
        // date & time
        $('form').on('click', '.parent-picker', function() {
            $(this).children('.datepicker-input').click();
        });
        $('form').on('click', '.datepicker-input', function() {
            if($(this).val() !== '') {
                $(this).parent().addClass('totop');
            }
        });

        $('.datetimepicker1').datetimepicker({
            locale: 'ru',
            format: 'YYYY-MM-DD HH:MM:SS'
        });

        var date = new Date();
        var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        var tomorrow = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1));

        $('.datetimepicker2').datetimepicker({
            locale: 'ru',
            format: 'DD.MM.YYYY',
            defaultDate: tomorrow,
            minDate: today
        });

        $('.datetimepicker1, .datetimepicker2').on("dp.change",function (e) {
            $(this).data('DateTimePicker').hide();
        });

        $('.timer1').datetimepicker({
            locale: 'ru',
            format: 'LT'//'HH:MM'
        });

        $('.timer2').datetimepicker({
            locale: 'ru',
            format: 'LT'//'HH:MM:SS'
        });

        $('.start8').datetimepicker({
            locale: 'ru',
            format: 'LT',
            defaultDate:moment(new Date).hours(8).minutes(0).seconds(0).milliseconds(0)
        });

        $('.finish17').datetimepicker({
            locale: 'ru',
            format: 'LT',
            defaultDate:moment(new Date).hours(17).minutes(0).seconds(0).milliseconds(0)
        });

        $('[id^="start-time-load"]').datetimepicker({
            locale: 'ru',
            format: 'DD.MM.YYYY HH:MM'
        });
        $('[id^="finish-time-load"]').datetimepicker({
            locale: 'ru',
            format: 'DD.MM.YYYY HH:MM',
            useCurrent: false //Important! See issue #1075
        });
        $('[id^="start-time-load"]').on("dp.change", function (e) {
            $('[id^="finish-time-load"]').data("DateTimePicker").minDate(e.date);
        });
        $('[id^="finish-time-load"]').on("dp.change", function (e) {
            $('[id^="start-time-load"]').data("DateTimePicker").maxDate(e.date);
        });
    });
});
