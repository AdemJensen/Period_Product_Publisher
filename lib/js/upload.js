const SERVER_ROOT = "http://47.107.236.216/Flexible/";
const TAIL = ".php";
//URL: [SERVER_ROOT] + [API URL] + [TAIL]
//Sample: http://47.107.236.216/Flexible/speak/SpeakSubmit.php

let data = {};
let adder = 0;
function submit(has_password) {
    data = {};
    adder = 0;
    if (has_password) {
        let content = $("#content-private").val();
        let password = $("#content-password-private").val();
        if (content === "写下你想说的话吧") {
            swal({
                title: "注意",
                text: "你还没填写内容呢",
                icon: "warning",
                button: "好吧",
            });
            return;
        }
        let validation = validatePassword(password);
        if (validation === 1) {
            swal({
                title: "注意",
                text: "你还没设置密语呢",
                icon: "warning",
                button: "好吧",
            });
            return;
        }
        if (validation === 2) {
            swal({
                title: "注意",
                text: "密语不大合适呢，换一个吧",
                icon: "warning",
                button: "好吧",
            });
            return;
        }
        data = {
            password: hex_md5(password),
            content: encodeURI(content),
            img: content_img_private
        };
        adder = 3;
    } else {
        let content = $("#content-public").val();
        if (content === "写下你想说的话吧") {
            swal({
                title: "注意",
                text: "你还没填写内容呢",
                icon: "warning",
                button: "好吧",
            });
            return;
        }
        data = {
            content: encodeURI(content),
            img: content_img_public
        };
        adder = 0;
    }
    function submitData() {
        $("#loading-icon").show();
        $.ajax({
            method : 'POST',
            dataType : 'json',
            data : data,
            url : SERVER_ROOT + 'speak/SpeakSubmit' + TAIL,
            success : function(result){
                switch (result.code) {
                    case 0:
                        swal({
                            title: "成功",
                            text: "提交成功啦",
                            icon: "success",
                            button: "现在就去看看",
                        }).then(() => {
                            result.obj.img = Number(result.obj.img) + adder;
                            loadBox(result.obj);
                        });
                        break;
                    case 1:
                        swal({
                            title: "注意",
                            text: "密语已经被使用过了，请换一个吧",
                            icon: "warning",
                            button: "好吧",
                        });
                        break;
                    default:
                        swal({
                            title: "错误",
                            text: "真抱歉，提交失败了",
                            icon: "error",
                            button: "好吧",
                        });
                }
            },
            error : function() {
                swal({
                    title: "错误",
                    text: "真抱歉，提交失败了",
                    icon: "error",
                    button: "好吧",
                });
            },
            complete : function() {
                $("#loading-icon").hide();
            }
        });
    }
    let continueAction = true;
    if (data.img === 0) {
        continueAction = false;
        swal({
            title: "没选配图呢",
            text: "你不想选一个萌萌的配图嘛？",
            icon: "info",
            buttons: {
                cancel: "我回去配个图",
                confirm: {
                    text: "嗯，我确定",
                    value: true
                }
            }
        }).then((value) => {
            if (value) {
                submitData();
            }
        });
    } else {
        submitData();
    }
}

function validate(input, pic) {
    pic.html('<img src="resource/public/loading.gif" style="height: 80%;">');
    $.ajax({
        type : 'POST',
        dataType : 'json',
        data : { password : hex_md5($("#content-password-private").val()) },
        url : SERVER_ROOT + 'speak/CheckOutPassword' + TAIL,
        success : function(result){
            if (result.code < 0) {
                swal({
                    title: "错误",
                    text: "出现未知错误",
                    icon: "error",
                    button: "好吧",
                });
                input.val("出现未知错误");
                pic.html('<img src="resource/dialog-speak/public/fault.png" style="height: 80%;">');
            } else {
                if (result.code === 1) {
                    input.val("密语已被使用过了");
                    pic.html('<img src="resource/dialog-speak/public/fault.png" style="height: 80%;">');
                } else {
                    pic.html('<img src="resource/dialog-speak/public/ok.png" style="height: 80%;">');
                }
            }
        },
        error : function(){
            swal({
                title: "错误",
                text: "出现未知错误",
                icon: "error",
                button: "好吧",
            });
            input.val("出现未知错误");
            pic.html('<img src="resource/dialog-speak/public/fault.png" style="height: 80%;">');
        }
    });
}

function fetchPublic() {
    $("#loading-icon").show();
    $.ajax({
        type : 'POST',
        dataType : 'json',
        url : SERVER_ROOT + 'browse/BrowseList' + TAIL,
        success : function(result) {
            if (result.code < 0) {
                swal({
                    title: "错误",
                    text: "真抱歉，加载失败了",
                    icon: "error",
                    button: "好吧",
                });
            } else {
                loadBox(result.obj);
            }
        },
        error : function() {
            swal({
                title: "错误",
                text: "真抱歉，加载失败了",
                icon: "error",
                button: "好吧",
            });
        },
        complete : function() {
            $("#loading-icon").hide();
        }
    });
}

function fetchPrivate() {
    let password = $("#password").val();
    let validation = validatePassword(password);
    if (validation > 0) {
        swal({
            title: "注意",
            text: "密语格式好像不太对呢",
            icon: "warning",
            button: "好吧",
        });
        return;
    }
    $("#loading-icon").show();
    $.ajax({
        type : 'POST',
        dataType : 'json',
        data : { password : hex_md5(password) },
        url : SERVER_ROOT + 'browse/BrowseContent' + TAIL,
        success : function(result){
            let temp = Number(result.obj.img);
            if (temp !== 0) result.obj.img = temp + 3;
            switch (result.code) {
                case 0:
                    loadBox(result.obj);
                    break;
                case 1:
                    swal({
                        title: "注意",
                        text: "什么也没找到哦",
                        icon: "warning",
                        button: "好吧",
                    });
                    break;
                default:
                    swal({
                        title: "错误",
                        text: "真抱歉，加载失败了",
                        icon: "error",
                        button: "好吧",
                    });
            }

        },
        error : function(){
            swal({
                title: "错误",
                text: "真抱歉，加载失败了",
                icon: "error",
                button: "好吧",
            });
        },
        complete : function () {
            $("#loading-icon").hide();
        }
    });
}