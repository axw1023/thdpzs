$(function () {

// IT页面
    getNumByAll() ;

});
$(document).ready(function () {
    setInterval("getNumByAll()", 5000);//6s一次
});

function  getNumByAll() {

$.ajax({
    type: "get",
    url: "/ITchar/getNumByAll",

    cache:false,
    success: function (data) {
        var html = "";
        var GZ2 = "";
        var name = "";
         for(var i=0;i<data.length;i++){    //遍历data数组
            var ls = data[i];


            name +="<span style='font-size: 15px;padding-right: 139px'>"+ls.type+"</span>"
         }


        var s = data[0].usenum + Math.ceil(Math.random() * 20 - 10);
         var d=data[1].usenum+ Math.ceil(Math.random()*20-10);
         var w=data[2].usenum;
        html +="<span style='font-size: 22px;padding-right: 132px' >"+data[0].allnum+"Ghz</span>";
        html +="<span style='font-size: 22px;padding-right: 149px' >"+data[1].allnum+"G</span>";
        html +="<span style='font-size: 22px;padding-right: 133px' >"+data[2].allnum+"T</span>";
        GZ2 +="<span style='font-size: 18px;padding-right: 105px'>"+s+"Ghz可用</span>"
        GZ2 +="<span style='font-size: 18px;padding-right: 123px'>"+d+"G可用</span>"
        GZ2 +="<span style='font-size: 18px;padding-right: 95px'>"+w+"T可用</span>"
        $("#GZ").html(html); //在html页面id=test的标签里显示html内容
        $("#GZ2").html(GZ2);
        $("#name").html(name);
    }




});

}