function loadBox(content) {
    let obj = content;
    let contentment = $("#hear-content");
    contentment.html(decodeURI(obj.content));
    if (obj.img > 0) {
        $("#hear-container").css(
            "background",
            "url('resource/public/associate" + obj.img + ".png') no-repeat 100% 100%"
        ).css("background-size", "100% 100%");
        contentment.css(
            "background",
            "rgba(0,0,0,0.3)"
        );
    } else {
        $("#hear-container").css("background", "none");
        contentment.css("background", "none");
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