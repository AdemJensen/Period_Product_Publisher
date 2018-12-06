function notice(content, confirm) {
    $("#notice-content").html(content);
    $("#notice").fadeIn();
    $("#notice-confirm").click(function() {
        confirm();
    });
}

function closeNotice() {
    $("#notice").fadeOut();
}