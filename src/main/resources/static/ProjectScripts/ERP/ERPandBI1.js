
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
});

