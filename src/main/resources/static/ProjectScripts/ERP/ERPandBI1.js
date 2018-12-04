
$ (function () {
    getYlyr();
    getHhjl2();
    getHhjl1();
    getFlt();
    getFkg();
    getDyflq();
//背景特效
    window.onload = function() {

        var config = {
            vx: 4,
            vy: 4,
            height: 2,
            width: 2,
            count: 40,
            color: "121, 162, 185",
            stroke: "130,255,255",
            dist: 6000,
            e_dist: 20000,
            max_conn: 10
        }

        CanvasParticle(config);
    }

    document.getElementById("3d1").playbackRate=0.6;
    document.getElementById("3d2").playbackRate=0.6;

    setTimeout(function () {
        $('#change1').show();
    },3000);
    setTimeout(function () {
        $('#change1').hide();
    },7000);
    setTimeout(function () {
        $('#change2').show();
    },12000);
    setTimeout(function () {
        $('#change2').hide();
    },17000);
    setTimeout(function () {
        $('#hh1').show();
    },19700);
    setTimeout(function () {
        $('#hh2').show();
    },20000);
    setTimeout(function () {
        $('#hh3').show();
    },20300);
    setTimeout(function () {
        $('#hh1').hide();
        $('#hh2').hide();
        $('#hh3').hide();
    },24800);
    setTimeout(function () {
        $('#change4').show();
    },28300);
    setTimeout(function () {
        $('#change4').hide();
    },32000);


    setInterval(function () {
        setInterval(function () {
            $('#change1').hide();
            $('#change2').hide();
            $('#hh1').hide();
            $('#hh2').hide();
            $('#hh3').hide();
            $('#change4').hide();
        },100)
    },200000)

    setInterval(function () {
        setTimeout(function () {
            $('#change1').show();
        },2970);
        setTimeout(function () {
            $('#change1').hide();
        },7000);
        setTimeout(function () {
            $('#change2').show();
        },12000);
        setTimeout(function () {
            $('#change2').hide();
        },17000);
        setTimeout(function () {
            $('#hh1').show();
        },19700);
        setTimeout(function () {
            $('#hh2').show();
        },20000);
        setTimeout(function () {
            $('#hh3').show();
        },20300);
        setTimeout(function () {
            $('#hh1').hide();
            $('#hh2').hide();
            $('#hh3').hide();
        },24800);
        setTimeout(function () {
            $('#change4').show();
        },28300);
        setTimeout(function () {
            $('#change4').hide();
        },32000);
    },32200)
    
    });
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