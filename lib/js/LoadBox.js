function loadBox(content) {
    let obj = JSON.parse(content);
    let contentment = $("#hear-content");
    contentment.html(obj.content);
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