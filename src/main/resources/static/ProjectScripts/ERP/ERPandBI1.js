
$ (function () {
    getErp();
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
    document.getElementById("3d3").playbackRate=0.6;
    
    setTimeout(function () {
        $('#change1').show();
    },3950);
    setTimeout(function () {
        $('#change1').hide();
    },12800);
    setTimeout(function () {
        $('#change2').show();
    },19700);
    setTimeout(function () {
        $('#change2').hide();
    },27500);
    setTimeout(function () {
        $('#hh1').show();
    },33600);
    setTimeout(function () {
        $('#hh2').show();
    },32800);
    setTimeout(function () {
        $('#hh3').show();
    },32000);
    setTimeout(function () {
        $('#hh1').hide();
        $('#hh2').hide();
        $('#hh3').hide();
    },40900);
    setTimeout(function () {
        $('#change4').show();
    },46700);
    setTimeout(function () {
        $('#change4').hide();
    },53500);
    
    
    setInterval(function () {
        setInterval(function () {
            $('#change1').hide();
            $('#change2').hide();
            $('#hh1').hide();
            $('#hh2').hide();
            $('#hh3').hide();
            $('#change4').hide();
        },100)
    },300000)
    
setInterval(function () {
    setTimeout(function () {
        $('#change1').show();
    },3950);
    setTimeout(function () {
        $('#change1').hide();
    },12800);
    setTimeout(function () {
        $('#change2').show();
    },19700);
    setTimeout(function () {
        $('#change2').hide();
    },27500);
    setTimeout(function () {
        $('#hh1').show();
    },33600);
    setTimeout(function () {
        $('#hh2').show();
    },32800);
    setTimeout(function () {
        $('#hh3').show();
    },32000);
    setTimeout(function () {
        $('#hh1').hide();
        $('#hh2').hide();
        $('#hh3').hide();
    },40900);
    setTimeout(function () {
        $('#change4').show();
    },46700);
    setTimeout(function () {
        $('#change4').hide();
    },53000);
},53700)
    
    });
function getErp() {
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