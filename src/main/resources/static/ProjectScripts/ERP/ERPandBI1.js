
$ (function () {
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
  
         var flag=true;
         /*   var t=setInterval(function(){
            flag=!flag;
            /!*if(flag==true){
                $('#change').hide();
            }else{*!/
            $('#change').show();
            /!* }*!/
        },4500);
            setInterval(function () {
                $('#change').hide();
            },1000)*/
            /*setTimeout(function () {
                $('#change').show();
            },1000)
        setTimeout(function () {
            $('#change').hide();
         },52000)*/
    setTimeout(function () {
        $('#change1').show();
    },3880);
    setTimeout(function () {
        $('#change1').hide();
    },12800);
    setTimeout(function () {
        $('#change2').show();
    },18500);
    setTimeout(function () {
        $('#change2').hide();
    },25500);
    setTimeout(function () {
        $('#change3').show();
    },31000);
    setTimeout(function () {
        $('#change3').hide();
    },38500);
    setTimeout(function () {
        $('#change4').show();
    },45200);
    setTimeout(function () {
        $('#change4').hide();
    },52000);
    setInterval(function () {
        setInterval(function () {
            $('#change1').hide();
            $('#change2').hide();
            $('#change3').hide();
            $('#change4').hide();
        },100)
    },300000)
setInterval(function () {
    setTimeout(function () {
        $('#change1').show();
    },3880);
    setTimeout(function () {
        $('#change1').hide();
    },12800);
    setTimeout(function () {
        $('#change2').show();
    },18500);
    setTimeout(function () {
        $('#change2').hide();
    },25500);
        setTimeout(function () {
        $('#change3').show();
    },31000);
    setTimeout(function () {
        $('#change3').hide();
    },38500);
        setTimeout(function () {
        $('#change4').show();
    },45200);
    setTimeout(function () {
        $('#change4').hide();
    },52000);
},52700)
    
    });
