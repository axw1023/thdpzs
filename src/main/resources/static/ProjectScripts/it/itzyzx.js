$(function () {

// IT页面
    getNumByAll() ;

});


function  getNumByAll() {

$.ajax({
    type: "get",
    url: "getNumByAll",
    async: false,
    cache:false,
    success: function (data) {
        debugger
        var html = "";
        var GZ2 = "";
        var name = "";
         for(var i=0;i<data.length;i++){    //遍历data数组
            var ls = data[i];
            html +="<span style='font-size: 24px;padding-right: 111px' >"+ls.allnum+"GHz</span>";
            GZ2 +="<span style='font-size: 18px;padding-right: 100px'>"+ls.usenum+"Ghz可用</span>"
            name +="<span style='font-size: 24px;padding-right: 152px'>"+ls.type+"</span>"
         }
        $("#GZ").html(html); //在html页面id=test的标签里显示html内容
        $("#GZ2").html(GZ2);
        $("#name").html(name);
    }




});

}