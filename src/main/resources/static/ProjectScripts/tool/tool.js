
// 页面跳转
$(document).keydown(function(event){
    $.ajax({
        url: "/getTurnToPage",
        type: "get",
        async: false,
        data: {mapper: "/tool/index"},
        success: function (data) {
            if(event.keyCode == 39){
                window.location.href=data[1];
            }else if(event.keyCode == 37){
                window.location.href=data[0];
            }else if(event.keyCode == 27){
                window.location.href="/";
            }
        }
    });
});