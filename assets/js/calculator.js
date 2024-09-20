jQuery(document).ready(function($) {
    let arr_likes = [];
    let arr_comments = [];
    let totalParameters = [];

    $("#like_1").focus();

    $('input[type="number"]').on("keyup", function() {
        sumaLikes();
        sumaComments();
        resultER();
    });

    for (let i = 1; i < 11; i++) {
        let j = i + 1;
        // campos likes
        $("#like_" + i).on("keyup", function() {
            if (i == 10) {
                keyCalculatorLike(i);
                var sumaLike = sumaLikes();
                totalParameters.push({ like: sumaLike });
            } else {
                keyCalculatorLike(i, j);
            }
            sumaLikes();
            return;
        });
    }

    for (let i = 1; i < 11; i++) {
        // campos comments
        $("#comment_" + i).on("keyup", function() {
            let k = i + 1;
            if (i == 10) {
                keyCalculatorComments(i);
                var sumaComment = sumaComments();
                totalParameters.push({ comment: sumaComment });
            } else {
                keyCalculatorComments(i, k);
            }
            sumaComments();
            return;
        });
    }

    $("#n_follow").on("keyup", function() {
        resultER();
    });

    function resultER() {
        let avg_like = $("#like_results").val();
        let avg_comment = $("#comment_results").val();
        n_follow = parseInt($("#n_follow").val());
        ER = (((parseInt(avg_like) + parseInt(avg_comment)) / n_follow) * 100);
        if (!isNaN(ER)) {
            $("#er").html(ER + '%');
            $("#ers").val(ER);
        }
    }

    function validateId(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (id == arr[i]['id']) {
                let indexForDelete = arr.findIndex(aprobacion => aprobacion.id === id);
                //Eliminando item
                arr.splice(indexForDelete, 1);
            }
        }
    }

    function keyCalculatorLike(id, idmas) {
        let like = $("#like_" + id).val();
        validateId(id, arr_likes);
        arr_likes.push({ id: id, value: like });
    }

    function keyCalculatorComments(id, idmas) {
        let comment = $("#comment_" + id).val();
        validateId(id, arr_comments);
        arr_comments.push({ id: id, value: comment });
    }

    function sumaLikes() {
        let totalike = 0;
        for (let i = 0; i < arr_likes.length; i++) {
            totalike += parseInt(arr_likes[i]['value']);
        }
        totalikes = totalike / 10;

        if (!isNaN(totalikes)) {
            $("#like_result").html(Math.ceil(totalikes));
            $("#like_results").val(totalikes);
        }
    }

    function sumaComments() {
        let totalComment = 0;
        for (let i = 0; i < arr_comments.length; i++) {
            totalComment += parseInt(arr_comments[i]['value']);
        }
        totalComments = totalComment / 10;
        if (!isNaN(totalComments)) {
            $("#comment_result").html(totalComments);
            $("#comment_results").val(totalComments);
        }
    }

    $('#tablaUrls').DataTable();

});


function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea, input[type=email], input[type=tel], input[type=date]').val('');
    $form.find('input:radio, input:checkbox')
        .removeAttr('checked').removeAttr('selected');
}