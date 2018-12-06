function loadBox(content) {
    let obj = JSON.parse(content.obj);
    $("#hear-content").html(obj.content);
    //Lack of background
    $("#dialog-hear-content").fadeIn();
}