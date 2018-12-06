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
        url : 'http://47.107.236.216/Flexible/SpeakSubmit.php',
        success : function(result){
            notice("提交成功啦！", function() {
                loadBox(result);
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
    $("#notice").fadeIn();
}