$(function () {

// IT页面
    getNumByAll() ;

});


function  getNumByAll() {

$.ajax({
    type: "get",
    url: "/ITchar/getNumByAll",
    async: false,
    cache:false,
    success: function (data) {
        debugger
        var html = "";
        for(var i=0;i<data.length;i++){    //遍历data数组
            var ls = data[i];
            html +="<span>测试："+ls.type+"</span>";
        }
        $("").html(html); //在html页面id=test的标签里显示html内容
    }




});

}