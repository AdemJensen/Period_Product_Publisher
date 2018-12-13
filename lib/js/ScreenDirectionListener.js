let detectorDisplayed = false;
let inputFocus = false;

$(document).ready(function() {
    $("#loading").fadeIn(0);
    function detectMob() {
        return (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i));
    }


    let mql = window.matchMedia('(orientation: portrait)');
    console.log(mql);
    function handleOrientationChange(mql) {
        if (inputFocus) return;
        if (detectMob()) {
            if(!mql.matches) {
                if (!detectorDisplayed) {
                    $("#screen-direction-detector").fadeIn();
                    swal({
                        title: "提示",
                        text: "为了您的使用体验，请使用竖屏浏览",
                        icon: "info",
                        button: false,
                        closeOnClickOutside: false,
                        closeOnEsc: false
                    });
                }  // 横屏
                detectorDisplayed = true;
            } else {
                if (detectorDisplayed) {
                    $("#screen-direction-detector").fadeOut();
                    swal.close();
                }
                detectorDisplayed = false;
            }
        } else {
            $("#device-detector").fadeIn(0);
            swal({
                title: "注意",
                text: "为了您的使用体验，强烈建议您使用手机浏览",
                icon: "warning",
                button: "我坚持要使用电脑浏览",
                closeOnClickOutside: false,
                closeOnEsc: false
            }).then(() => {
                $("#device-detector").fadeOut(0);
            });
        }
    }

    // 输出当前屏幕模式
    handleOrientationChange(mql);
    // 监听屏幕模式变化
    mql.addListener(handleOrientationChange);
});

window.onload = function() {
    $("#loading").fadeOut();
};