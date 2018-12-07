function notice(content, confirm) {
    $("#notice-content").html(content);
    $("#notice-confirm").click(function() {
        confirm();
    });
    $("#notice").fadeIn();
}

function closeNotice() {
    $("#notice").fadeOut();
}