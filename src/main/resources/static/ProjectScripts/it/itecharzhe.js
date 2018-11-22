
$(function () {

// IT页面
    getNumByLiu() ;

});

function cross (shijian,shuchu,shuru) {

    var dom = document.getElementById("charzhe");
    var myChart1 = echarts.init((dom));

//背景特效
    window.onload = function () {

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

    option = {
        color: [ '#6049D3', '#08E3A1'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#071424'
                }
            }
        },
        legend: {
            symbol: 'diamond',     //设定为实心点
            // itemWidth: 6,   // 设置图例图形的宽
            // itemHeight: 20,  // 设置图例图形的高
            textStyle: {
                color: '#92F1FF',
                fontSize: 20


            },
            right: '1%',
            data: [ '接受', '发送']
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        // 设置x轴颜色
                        color: 'rgba(1,1,1,0)'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: "#92F1FF" //刻度线标签颜色
                },


                boundaryGap: false,

                data:  shijian
                /*.map(function (str) {
                    return str.replace(' ', '\n')
                })*/
            }
        ],


        yAxis: [
            {

                axisLabel: {
                    color: "#92F1FF" //刻度线标签颜色
                },
                axisLine: {
                    lineStyle: {
                        // 设置x轴颜色
                        color: 'rgba(1,1,1,0)'
                    }
                },
                splitLine: {show: false}//去除网格线
                // show: false//隐藏y轴
            }

        ],
        series: [

            {
                symbol: 'circle',     //设定为实心点
                symbolSize: 8,   //设定实心点的大小
                name: '接受',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#0ABD8E',
                        lineStyle: {

                            color: '#0ABD8E'
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(8,227,161,0.45)'

                        }, {
                            offset: 0.45,
                            color: 'rgba(8,227,161,0.30)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(8,227,161,0.00)'
                            }])
                    }

                },
                data: shuru


            },
            {
                symbol: 'circle',     //设定为实心点
                symbolSize: 8,   //设定实心点的大小
                name: '发送',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#2BA1E7',
                        lineStyle: {

                            color: '#2BA1E7'
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(43,161,231,0.45)'

                        }, {
                            offset: 0.45,
                            color: 'rgba(43,161,231,0.30)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(43,161,231,0.00)'
                            }])
                    }
                },
                data: shuchu

            }
        ]
    };

    myChart1.setOption(option);

}


// var t=setInterval(getNumByLiu,3000);

function getNumByLiu() {
    $.ajax({
        type: "get",
        async: false,
        cache: false,
        dataType:'json',
        url: "getNumByLiu",

        success: function (LIU) {
           var shuru=[];
           var shuchu=[];
           var shijian=[];

      debugger
            for(var i=0;i<LIU.length;i++){    //遍历data数组
                 shuru.push(LIU[i].intraffic);
                shuchu.push(LIU[i].outtraffic);
                shijian.push(LIU[i].time);
            }



            cross(shijian,shuchu,shuru);

        }

    });

}