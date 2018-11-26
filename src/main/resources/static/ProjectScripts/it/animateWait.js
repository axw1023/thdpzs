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

function getSD() {
    $.ajax({
        type: "get",
        async: false,
        cache: false,

        url: "",
        success: function (SD) {
            var wd="";
            var sd="";

            for (var i = 0; i <SD.length ; i++) {


            }


            $("").html(wd); //在html页面id=test的标签里显示html内容
            $("").html(sd);
            $("").html(name);

        }


    });

}