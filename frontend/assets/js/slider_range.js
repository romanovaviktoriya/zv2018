// (function($) {

window.onload = function() {

    // var nonLinearSlider = document.getElementById('slider-non-linear');
    //
    // noUiSlider.create(nonLinearSlider, {
    //     start: [ 20 ],
    //     connect: [true, false],
    //     range: {
    //         'min': [  0 ],
    //         '30%': [  30 ],
    //         '70%': [  70 ],
    //         'max': [ 100 ]
    //     }
    // });

    // var nonLinearSliderValueElement = document.getElementById('slider-non-linear-value');
    //
    // // Show the value for the *last* moved handle.
    // nonLinearSlider.noUiSlider.on('update', function( values, handle ) {
    //     nonLinearSliderValueElement.innerHTML = values[handle];
    // });

    var snapSlider = document.getElementById('slider-snap');

    noUiSlider.create(snapSlider, {
        start: [ 0, 0 ],
        snap: true,
        connect: true,
        range: {
            'min': [0],
            '10%': [10],
            '20%': [20],
            '30%': [30],
            '40%': [40],
            '50%': [50],
            '60%': [60],
            '70%': [70],
            '80%': [80],
            '90%': [90],
            'max': [100]
        },
        format: {
            to: function ( value ) {
                return value + '';
            },
            from: function ( value ) {
                return value;
            }
        }
    });


    var snapValues = [
        document.getElementById('slider-snap-value-lower'),
        document.getElementById('slider-snap-value-upper')
    ];

    snapSlider.noUiSlider.on('update', function( values, handle ) {
        snapValues[handle].innerHTML = values[handle];
    });

    var inputNumber = document.getElementById('hidden-slider-snap-value-upper');

    snapSlider.noUiSlider.on('update', function( values, handle ) {

        var value = values[handle];

        if ( handle ) {
            var str = 'Радиус ' + value + ' км'
            inputNumber.value = str;
        }
    });

    inputNumber.addEventListener('change', function(){
        html5Slider.noUiSlider.set([null, this.value]);
    });

};

// })(jQuery);