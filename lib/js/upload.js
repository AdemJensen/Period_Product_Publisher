const SERVER_ROOT = "http://47.107.236.216/Flexible/";

function submit(has_password) {
    let data = {};
    if (has_password) {
        data = {
            password: $("#content-password-private").val(),
            content: $("#content-private").val(),
            img: content_img_private
        };
    } else {
        data = {
            content: $("#content-public").val(),
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
            notice("提交成功啦！", function() {
                loadBox(result.obj);
                closeNotice();
            });
        },
        error : function(){
            notice("真抱歉，提交失败了", function() {
                closeNotice();
            });
        }
    });
}

function validate() {
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
            }
            return result.code;
        },
        error : function(){
            notice("出现未知错误", function() {
                closeNotice();
            });
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
    $.ajax({
        type : 'post',
        dataType : 'json',
        contentType: 'application/json',
        data : { password : $("#password").val() },
        url : SERVER_ROOT + 'browse/BrowseContent.php',
        success : function(result){
            loadBox(result.obj);
        },
        error : function(){
            notice("真抱歉，加载失败了", function() {
                closeNotice();
            });
        }
    });
}