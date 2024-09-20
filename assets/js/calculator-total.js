jQuery(document).ready(function($) {

    $('input[type="number"]').on("keyup", function() {
        let ers = parseInt($("#ers").val());
        let ers_view = parseInt($("#ers_view").val());
        let erTotal = 0;

        if (!isNaN(ers) || !isNaN(ers_view)) {
            ers = parseInt($("#ers").val());
            ers_view = parseInt($("#ers_view").val());
            erTotal = (ers + ers_view) / 2;
            if (!isNaN(erTotal)) {
                $("#er_total").html(erTotal + '%');
            }
        }
    });


    $('.custom-select').on("change", function() {
        console.log($('.custom-select').val());
        if ($('.custom-select').val() == 1) {
            $('#youtube-appear').css('display', 'block');
            $('#ins-appear').css('display', 'none');
            $('#twitter-appear').css('display', 'none');
            $('#facebook-appear').css('display', 'none');
            $('#tiktok-appear').css('display', 'none');
        } else if ($('.custom-select').val() == 2) {
            $('#ins-appear').css('display', 'block');
            $('#youtube-appear').css('display', 'none');
            $('#twitter-appear').css('display', 'none');
            $('#facebook-appear').css('display', 'none');
            $('#tiktok-appear').css('display', 'none');
        } else if ($('.custom-select').val() == 3) {
            $('#twitter-appear').css('display', 'block');
            $('#ins-appear').css('display', 'none');
            $('#youtube-appear').css('display', 'none');
            $('#facebook-appear').css('display', 'none');
            $('#tiktok-appear').css('display', 'none');
        } else if ($('.custom-select').val() == 4) {
            $('#facebook-appear').css('display', 'block');
            $('#twitter-appear').css('display', 'none');
            $('#ins-appear').css('display', 'none');
            $('#youtube-appear').css('display', 'none');
            $('#tiktok-appear').css('display', 'none');
        } else if ($('.custom-select').val() == 5) {
            $('#tiktok-appear').css('display', 'block');
            $('#facebook-appear').css('display', 'none');
            $('#twitter-appear').css('display', 'none');
            $('#ins-appear').css('display', 'none');
            $('#youtube-appear').css('display', 'none');
        }
    });

});