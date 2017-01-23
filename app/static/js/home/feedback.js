$(function(){
    var feedbackInfo = {
        init:function(){
            $("#form_feedback .feed-btnbox button").click(function (event) {
                event.preventDefault();

                if(!checkFeedbackInfo()){
                    return false;
                };
                var content = $.trim($("#content").val());
                var name = $.trim($("#name").val());
                var mobile = $.trim($("#mobile").val());
                var email = $.trim($("#email").val());

                var form = $("#form_feedback");
                $.atmeUtil.ajaxSubmit(form,feedbackInfo.onSaveSuccess);

            });

            var checkFeedbackInfo = function () {
    
                if($("#form_feedback").find("#name").val() == null || $("#form_feedback").find("#name").val().trim() == '') {
                    layer.msg("请填写称呼！",{icon: 2,skin: 'layer-ext-moon'});
                    return false;
                };
                if($("#form_feedback").find("#content").val() == null || $("#form_feedback").find("#content").val().trim() == '') {
                    layer.msg("请填写反馈意见内容！",{icon: 2,skin: 'layer-ext-moon'});
                    return false;
                };
    
                var mobileNum =  $("#form_feedback").find("#mobile").val();
                var emailNum = $("#form_feedback").find("#email").val();
                if((mobileNum == null || mobileNum.trim() == '' ) && (emailNum == null || emailNum.trim() == '' )) {
                    layer.msg("请选填手机或者邮箱！",{icon: 2,skin: 'layer-ext-moon'});
                    return false;
                };
                var flag = false;
                if(mobileNum != null && mobileNum.trim() != '') {
                    if($.atmeUtil.checkMobile(mobileNum)) {
                        flag = true;
                    } else {
                        return false;
                    }
                }

                if(emailNum != null && emailNum.trim() != '') {
                    if($.atmeUtil.checkEmail(emailNum)) {
                        flag = true;
                    } else {
                        return false;
                    }
                }
                return flag;
            }
        },
        onSaveSuccess : function (data) {
            layer.msg("提交成功，谢谢您的反馈！",{icon: 1,skin: 'layer-ext-moon'});
            feedbackInfo.cleanFeedInfo();
        },
        //清空个人联系方式内容
        cleanFeedInfo : function(){
            $("#form_feedback").find("#content").val("");
            $("#form_feedback").find("#name").val("");
            $("#form_feedback").find("#mobile").val("");
            $("#form_feedback").find("#email").val("");
        }

    };

    feedbackInfo.init();
});