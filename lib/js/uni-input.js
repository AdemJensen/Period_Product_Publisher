$(document).ready(function() {
    $(".pass-input-holder").focusin(function() {
        if ($(this).val() === "请输入TA的密语") {
            $(this).val("");
        }
    }).focusout(function() {
        if ($(this).val() === "") {
            $(this).val("请输入TA的密语");
        }
    });

    $(".cont-text-area").focusin(function() {
        if ($(this).val() === "写下你想说的话吧") {
            $(this).val("");
        }
    }).focusout(function() {
        if ($(this).val() === "") {
            $(this).val("写下你想说的话吧");
        }
    });

    $(".set-input-holder").focusin(function() {
        if ($(this).val() === "请设置一个密语吧" || $(this).val() === "密语已被使用过了" || $(this).val() === "密语不符合规范") {
            $(this).val("");
        }
    }).focusout(function() {
        if ($(this).val() === "") {
            $(this).val("请设置一个密语吧");
            $("#set-pw-hint").html("");
        } else {
            $("#set-pw-hint").html('<img src="resource/public/loading.gif" style="height: 80%;">');
        }
    });

});