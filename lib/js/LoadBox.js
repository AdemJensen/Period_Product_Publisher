function loadBox(content) {
    let obj = JSON.parse(content);
    $("#hear-content").html(obj.content);
    if (content.img > 0) {
        $("#hear-container").css("background-image", "url('resource/public/associate" + content.img + ".png')");
    } else {
        $("#hear-container").css("background-image", "none");
    }
    $("#dialog-hear-content").fadeIn();
}