jQuery(document).ready(function($) {

    let arr_views = [];
    let arr_likes = [];
    let arr_comments = [];
    let totalParameters = [];

    $('input[type="number"]').on("keyup", function() {
        sumaViews();
        sumaLikes();
        sumaComments();
        resultER();
    });

    for (let i = 1; i < 11; i++) {
        let j = i + 1;
        // campos views

        $("#view_" + i).on("change", function() {
            if (i == 10) {
                keyCalculatorView(i);
                var sumaView = sumaViews();
                totalParameters.push({ video: sumaView });
            } else {
                keyCalculatorView(i, j);
            }
            sumaViews();
            return;
        });
    }

    for (let i = 1; i < 11; i++) {
        let z = i + 1;
        // campos likes
        $("#like_view_" + i).on("change", function() {
            if (i == 10) {
                keyCalculatorLike(i);
                var sumaLike = sumaLikes();
            } else {
                keyCalculatorLike(i, z);
            }
            sumaLikes();
            return;
        });
    }

    for (let i = 1; i < 11; i++) {
        // campos comments
        $("#comment_view_" + i).on("change", function() {
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

    $("#n_follow_view_input").on("keyup", function() {
        resultER();
    });

    function resultER() {
        let avg_view = $("#results_view").val();
        let avg_like = $("#like_results_view").val();
        let avg_comment = $("#comment_results_view").val();
        let n_follow_view = $("#n_follow_view_input").val();
        ER = (((parseInt(avg_view) + parseInt(avg_like) + parseInt(avg_comment)) / parseInt(n_follow_view)) * 100);
        if (!isNaN(ER)) {
            $("#er_view").html(ER + '%');
            $("#ers_view").val(ER);
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

    function keyCalculatorView(id, idmas) {
        let view = $("#view_" + id).val();
        validateId(id, arr_views);
        arr_views.push({ id: id, value: view });
    }

    function keyCalculatorLike(id, idmas) {
        let like = $("#like_view_" + id).val();
        validateId(id, arr_likes);
        arr_likes.push({ id: id, value: like });
    }

    function keyCalculatorComments(id, idmas) {
        let comment = $("#comment_view_" + id).val();
        validateId(id, arr_comments);
        arr_comments.push({ id: id, value: comment });
    }

    function sumaViews() {
        let totalViews = 0;
        for (let i = 0; i < arr_views.length; i++) {
            totalViews += parseInt(arr_views[i]['value']);
        }
        totalViews = totalViews / 10;
        if (!isNaN(totalViews)) {
            $("#result_view").html(totalViews);
            $("#results_view").val(totalViews);
        }
    }


    function sumaLikes() {
        let totalike = 0;
        for (let i = 0; i < arr_likes.length; i++) {
            totalike += parseInt(arr_likes[i]['value']);
        }
        totalikes = totalike / 10;
        if (!isNaN(totalikes)) {
            $("#like_result_view").html(totalikes);
            $("#like_results_view").val(totalikes);
        }
    }

    function sumaComments() {
        let totalComment = 0;
        for (let i = 0; i < arr_comments.length; i++) {
            totalComment += parseInt(arr_comments[i]['value']);
        }
        totalComments = totalComment / 10;
        if (!isNaN(totalComments)) {
            $("#comment_result_view").html(totalComments);
            $("#comment_results_view").val(totalComments);
        }
    }
    $('#tablaUrls').DataTable();
});


function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea, input[type=email], input[type=tel], input[type=date]').val('');
    $form.find('input:radio, input:checkbox')
        .removeAttr('checked').removeAttr('selected');
}