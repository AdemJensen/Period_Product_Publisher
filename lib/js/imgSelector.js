let content_img_public = 0;
let content_img_private = 0;

$(document).ready(function() {
    $("[content-img-public-serial]").click(function() {
        let clicked = Number($(this).attr("content-img-public-serial"));
        if (content_img_public === clicked) {
            $(this).css("border", "dashed white 2px");
            content_img_public = 0;
        } else {
            if (content_img_public !== 0) {
                $("[content-img-public-serial='" + content_img_public + "']").css("border", "dashed white 2px");
            }
            $(this).css("border", "solid white 2px");
            content_img_public = clicked;
        }
    });

    $("[content-img-private-serial]").click(function() {
        let clicked = Number($(this).attr("content-img-private-serial"));
        if (content_img_private === clicked) {
            $(this).css("border", "dashed white 2px");
            content_img_private = 0;
        } else {
            if (content_img_private !== 0) {
                $("[content-img-private-serial='" + (content_img_private) + "']").css("border", "dashed white 2px");
            }
            $(this).css("border", "solid white 2px");
            content_img_private = clicked;
        }
    });
});