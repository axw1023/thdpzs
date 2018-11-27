$(function(){

    var t=setTimeout(function(){

        $('#UPS').show();

    },100);
    var t1=setTimeout(function(){

        $('#bj').show();

    },300);
    var t2=setTimeout(function(){

        $('#wd').show();

    },600);
    var t3=setTimeout(function(){

        $('#wd1').show();

    },900);
    var she=setTimeout(function(){

        $('.she').show();

    },600);


    getSD() ;
});

$(document).ready(function () {
    setInterval("getSD()", 180000);//3min一次
});

function getSD() {
    $.ajax({
        type: "get",
        async: false,
        cache: false,

        url: "jf",
        success: function (SD) {
            var wd="";
            var shuidi="";

            wd+="<p class='D3'>"+SD[9].types+':&nbsp;'+SD[9].num+"A</p>";
            wd+="<p class='D3'>"+SD[10].types+':&nbsp;'+SD[10].num+"A</p>";
            wd+="<p class='D3'>"+SD[11].types+':&nbsp;'+SD[11].num+"A</p>";
            wd+="<p class='D3'>"+SD[12].types+':&nbsp;'+SD[12].num+"Min</p>";

            shuidi+="<p class='D3'>"+SD[2].types+':'+SD[2].num+"℃</p>";
            shuidi+="<p class='D3'>"+SD[3].types+':'+SD[3].num+"%</p>";

            $("#nr").html(wd); //在html页面id=test的标签里显示html内容
            $("#dading").html(shuidi);


        }


    });

}