
$ (function () {
    getYlyr();
    getHhjl2();
    getHhjl1();
    getFlt();
    getFkg();
    getDyflq();

});
var choose = 0;

var v1 = document.getElementById("3d1");
var v2 = document.getElementById("3d2");
var v3 = document.getElementById("3d3");

document.onkeydown= function(event){
    var num = event.keyCode;
    if(num == 13){
        choose ++ ;
        var flag = choose%3;
        if(flag == 1){
            //第一个视频播放
            v1.play();
            v2.pause();
            v3.pause();
        }
        if(flag == 2){

            //第二个视频播放
            v2.play();
            v1.pause();
            v3.pause();
        }
        if(flag == 0){
            //第三个视频播放
            v3.play();
            v2.pause();
            v1.pause();
            setTimeout(function () {
                $('#change1').show();
            },1600);
            setTimeout(function () {
                $('#change1').hide();
            },6900);
            setTimeout(function () {
                $('#change2').show();
            },11500);
            setTimeout(function () {
                $('#change2').hide();
            },16700);
            setTimeout(function () {
                $('#hh1').show();
            },19100);
            setTimeout(function () {
                $('#hh2').show();
            },19500);
            setTimeout(function () {
                $('#hh3').show();
            },19800);
            setTimeout(function () {
                $('#hh1').hide();
                $('#hh2').hide();
                $('#hh3').hide();
            },24500);
            setTimeout(function () {
                $('#change4').show();
            },28000);
            setTimeout(function () {
                $('#change4').hide();
            },32000);

        }
    }
};

document.getElementById("3d1").playbackRate=0.6;
document.getElementById("3d2").playbackRate=0.6;

function getYlyr() {
    $.ajax({
        type: "post",
        url: "/3Dfactory/6",
        async: false,
        success: function (data) {
            //更新数据
            $("#wdc1").val(data[0].diesel);
            $("#wdj1").val(data[1].diesel);
            $("#ll1").val(data[2].diesel);
            $("#lj1").val(data[3].diesel);
            $("#wdsc1").val(data[0].num);
            $("#wdsj1").val(data[1].num);
            $("#lls1").val(data[2].num);
            $("#ljs1").val(data[3].num);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}
function getDyflq() {
    $.ajax({
        type: "post",
        url: "/3Dfactory/1",
        async: false,
        success: function (data) {
            //更新数据
            $("#wdc2").val(data[0].diesel);
            $("#yl1").val(data[1].diesel);
            $("#yw1").val(data[2].diesel);
            $("#wdsc2").val(data[0].num);
            $("#yls1").val(data[1].num);
            $("#yws1").val(data[2].num);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}
function getHhjl2() {
    $.ajax({
        type: "post",
        url: "/3Dfactory/5",
        async: false,
        success: function (data) {
            //更新数据
            $("#wdj2").val(data[0].diesel);
            $("#wdsj2").val(data[0].num);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}
function getFlt() {
    $.ajax({
        type: "post",
        url: "/3Dfactory/3",
        async: false,
        success: function (data) {
            //更新数据
            $("#wdj3").val(data[0].diesel);
            $("#wdsj3").val(data[0].num);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}
function getHhjl1() {
    $.ajax({
        type: "post",
        url: "/3Dfactory/4",
        async: false,
        success: function (data) {
            //更新数据
            $("#wdz").val(data[0].diesel);
            $("#wdj4").val(data[1].diesel);
            $("#wdc3").val(data[2].diesel);
            $("#ll2").val(data[3].diesel);
            $("#lj2").val(data[4].diesel);
            $("#wdzs").val(data[0].num);
            $("#wdsj4").val(data[1].num);
            $("#wdsc3").val(data[2].num);
            $("#lls2").val(data[3].num);
            $("#ljs2").val(data[4].num);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}
function getFkg() {
    $.ajax({
        type: "post",
        url: "/3Dfactory/2",
        async: false,
        success: function (data) {
            //更新数据
            $("#yw2").val(data[0].diesel);
            $("#yws2").val(data[0].num);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}