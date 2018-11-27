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

        cache: false,

        url: "/ITchar/SD",
        success: function (DA) {
            var wd="";
            var shuidi="";

            wd+="<p class='D3'>"+DA[7].name+'&nbsp;:&nbsp;'+DA[7].value+"A</p>";
            wd+="<p class='D3'>"+DA[8].name+'&nbsp;:&nbsp;'+DA[8].value+"A</p>";
            wd+="<p class='D3'>"+DA[9].name+'&nbsp;:&nbsp;'+DA[9].value+"A</p>";
            wd+="<p class='D3'>"+DA[10].name+'&nbsp;:&nbsp;'+DA[10].value+"Min</p>";

            shuidi+="<p class='D3'>"+DA[11].name+'&nbsp;:&nbsp;'+DA[11].value+"℃</p>";
            shuidi+="<p class='D3'>"+DA[0].name+'&nbsp;:&nbsp;'+DA[0].value+"%</p>";

            $("#nr").html(wd); //在html页面id=test的标签里显示html内容
            $("#dading").html(shuidi);


        }


    });

}