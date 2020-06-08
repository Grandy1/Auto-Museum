jQuery(document).ready(function() {

    var degrees = 0,
        timer = setInterval(function() {

            degrees++;
            jQuery('boddy').css('background-image', 'linear-gradient(' + degrees + 'deg, #efefbb, #d4d3dd');
        }, 60000 / 360);
})