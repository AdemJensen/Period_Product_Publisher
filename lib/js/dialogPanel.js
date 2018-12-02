$(document).ready(function() {
    $(".dialog").fadeOut(0);
    //对话框展开按钮被按下，先淡入整体再淡入里面的元素
    $("[dialog-target]").click(function(){
        var targetID = $(this).attr("dialog-target");
        $(targetID).fadeIn(200);
        setTimeout(function(){$(targetID).children(".dialog-content-fade").fadeIn();}, 200);
    });

    //对话框内的隐藏按钮被按下，先淡出里面的元素再淡出整体
    $("[dialog-close-target]").click(function(){
        var targetID = $(this).attr("dialog-close-target");
        $(targetID).children(".dialog-content-fade").fadeOut(200);
        setTimeout(function(){$(targetID).fadeOut();}, 200);
    });

});