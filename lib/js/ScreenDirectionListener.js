let detectorDisplayed = false;

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
        if (detectMob()) {
            if(!mql.matches) {
                if (!detectorDisplayed) $("#screen-direction-detector").fadeIn();  // 横屏
                detectorDisplayed = true;
            } else {
                if (detectorDisplayed) $("#screen-direction-detector").fadeOut();
                detectorDisplayed = false;
            }
        } else {
            $("#device-detector").fadeIn(0);
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