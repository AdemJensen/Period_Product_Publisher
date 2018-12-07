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

    let pwHint = $("#set-pw-hint");
    $(".set-input-holder").focusin(function() {
        if ($(this).val() === "请设置一个密语吧" || $(this).val() === "密语已被使用过了" || $(this).val() === "密语不符合规范" || $(this).val() === "出现未知错误") {
            $(this).val("");
        }
        pwHint.html('');
    }).focusout(function() {
        if ($(this).val() === "") {
            $(this).val("请设置一个密语吧");
            pwHint.html("");
        } else {
            pwHint.html('<img src="resource/public/loading.gif" style="height: 80%;">');
            let res = validatePassword($(this).val());
            if (res === 2) {
                $(this).val("密语不符合规范");
                pwHint.html('<img src="resource/dialog-speak/public/fault.png" style="height: 80%;">');
                return;
            }
            validate($(this), pwHint);
        }
    });

    $("input").focusin(function() {
        inputFocus = true;
        if (detectorDisplayed) {
            $("#screen-direction-detector").fadeOut();
            detectorDisplayed = false;
        }
    }).focusout(function() {
        inputFocus = false;
    });

    $("textarea").focusin(function() {
        inputFocus = true;
        if (detectorDisplayed) {
            $("#screen-direction-detector").fadeOut();
            detectorDisplayed = false;
        }
    }).focusout(function() {
        inputFocus = false;
    });

});