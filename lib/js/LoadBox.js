function loadBox(content, isPrivate) {
    let obj = content;
    let contentment = $("#hear-content");
    let openAnotherBtn = $("#btn-open-another");
    contentment.html(decodeURI(obj.content));
    let picAdd;
    contentment.css("color", "black");
    if (isPrivate) {
        picAdd = 3;
        openAnotherBtn.hide();
    } else {
        picAdd = 0;
        openAnotherBtn.show();
    }
    if (obj.img > 0) {
        $("#hear-container").css(
            "background",
            "url('resource/public/associate" + (Number(obj.img) + picAdd) + ".png') no-repeat 100% 100%"
        ).css("background-size", "100% 100%");
    } else {
        $("#hear-container").css("background", "none");
    }
    $("#dialog-hear-content").fadeIn();
}
function hideAll() {
    $("#dialog-speak-private").hide();
    $("#dialog-speak-private-contents").hide();
    $("#dialog-speak-public").hide();
    $("#dialog-speak-public-contents").hide();
    $("#dialog-speak").hide();
    $("#dialog-speak-contents").hide();
}