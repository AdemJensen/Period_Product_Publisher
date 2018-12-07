const SERVER_ROOT = "http://47.107.236.216/Flexible/";
let returnValue = -1;


function submit(has_password) {
    let data = {};
    if (has_password) {
        let content = $("#content-private").val();
        let password = $("#content-password-private").val();
        if (content === "写下你想说的话吧") {
            notice("你还没填写内容呢！", function() {
                closeNotice();
            });
            return;
        }
        let validation = validatePassword(password);
        if (validation === 1) {
            notice("你还没设置密语呢！", function() {
                closeNotice();
            });
            return;
        }
        if (validation === 2) {
            notice("密语不大合适呢，换一个吧", function() {
                closeNotice();
            });
            return;
        }
        data = {
            password: hex_md5(password),
            content: content,
            img: content_img_private
        };
    } else {
        let content = $("#content-public").val();
        if (content === "写下你想说的话吧") {
            notice("你还没填写内容呢！", function() {
                closeNotice();
            });
            return;
        }
        data = {
            content: content,
            img: content_img_public
        };
    }
    $.ajax({
        type : 'post',
        dataType : 'json',
        contentType: 'application/json',
        data : data,
        url : SERVER_ROOT + 'speak/SpeakSubmit.php',
        success : function(result){
            switch (result.code) {
                case 0:
                    notice("提交成功啦！", function() {
                        loadBox(result.obj);
                        closeNotice();
                    });
                    break;
                case 1:
                    notice("密语已被使用过了，换一个吧！", function() {
                        closeNotice();
                    });
                    break;
                default:
                    notice("真抱歉，提交失败了", function() {
                        closeNotice();
                    });
            }
        },
        error : function() {
            notice("真抱歉，提交失败了", function() {
                closeNotice();
            });
        }
    });
}

function validate(input, pic) {
    pic.html('<img src="resource/public/loading.gif" style="height: 80%;">');
    $.ajax({
        type : 'post',
        dataType : 'json',
        contentType: 'application/json',
        data : { password : $("#content-password-private").val() },
        url : SERVER_ROOT + 'speak/CheckOutPassword.php',
        success : function(result){
            if (result.code < 0) {
                notice("出现未知错误", function() {
                    closeNotice();
                });
                input.val("出现未知错误");
                pic.html('<img src="resource/dialog-speak/public/fault.png" style="height: 80%;">');
            } else {
                if (res === 1) {
                    input.val("密语已被使用过了");
                } else {
                    pic.html('<img src="resource/dialog-speak/public/ok.png" style="height: 80%;">');
                }
            }
        },
        error : function(){
            notice("出现未知错误", function() {
                closeNotice();
            });
            input.val("出现未知错误");
            pic.html('<img src="resource/dialog-speak/public/fault.png" style="height: 80%;">');
        }
    });
}

function fetchPublic() {
    $.ajax({
        type : 'post',
        dataType : 'json',
        contentType: 'application/json',
        url : SERVER_ROOT + 'browse/BrowseList.php',
        success : function(result){
            if (result.code < 0) {
                notice("真抱歉，加载失败了", function() {
                    closeNotice();
                });
            } else {
                loadBox(result.obj);
            }
        },
        error : function(){
            notice("真抱歉，加载失败了", function() {
                closeNotice();
            });
        }
    });
}

function fetchPrivate() {
    let password = $("#password").val();
    let validation = validatePassword(password);
    if (validation > 0) {
        notice("密语不大合适呢！", function() {
            closeNotice();
        });
        return;
    }
    $.ajax({
        type : 'post',
        dataType : 'json',
        contentType: 'application/json',
        data : { password : password },
        url : SERVER_ROOT + 'browse/BrowseContent.php',
        success : function(result){
            switch (result.code) {
                case 0:
                    loadBox(result.obj);
                    break;
                case 1:
                    notice("密语错误呢，什么也找不到哦！", function() {
                        closeNotice();
                    });
                    break;
                default:
                    notice("真抱歉，加载失败了", function() {
                        closeNotice();
                    });
            }

        },
        error : function(){
            notice("真抱歉，加载失败了", function() {
                closeNotice();
            });
        }
    });
}