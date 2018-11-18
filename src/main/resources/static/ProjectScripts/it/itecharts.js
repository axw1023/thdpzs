$(function () {

// IT页面
    getNumByGrade() ;

});
var currentIndex2 = -1;
var pieint=null;
function bing(rest) {
    var dom = document.getElementById("char");
    var myChart2 = echarts.init((dom));





    option = {
        color: [

            "#6F41FF", "#FC363F",
            "#FF824E", "#25CDAA"],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        legend: {

            itemWidth: 6,   // 设置图例图形的宽
            itemHeight: 20,  // 设置图例图形的高
            itemGap: 65,
            formatter :'    {name}',
            orient: 'vertical',
            top: 'middle',
            data: ['致命', '严重', '警告', '主要'],
            show: true,
            y:'right',
            right:'75px',

            textStyle: {
                color: '#92F1FF',
                fontSize: 20

            }

        },
        series: [

            {

                type: 'pie',
                radius: ['65%', '91%'],
                center: ['30%', '50%'],
                avoidLabelOverlap: false,

                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        formatter: "共{a|{c}}项",
                        rich:{
                            a:{
                                fontSize: 41
                            }
                        },
                        textStyle: {
                            fontSize: 25,
                            color: '#92F1FF'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },

                // data:[{value:rest[0].num,name:rest[0].type}]

                data: [

                    { value:rest[0].num,name:rest[0].type,itemStyle:{ color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#4360F1' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#4C31A9' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }}

                    },
                    {value:rest[1].num,name:rest[1].type,itemStyle:{ color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#FF5959' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#7F3C70' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }}
                    },
                    {value:rest[2].num,name:rest[2].type,itemStyle:{ color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#91725F' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#DE7665' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }}},
                    {value:rest[3].num,name:rest[3].type,itemStyle:{ color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#02ACA2' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#28E1B8' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }}}

                ]
            }
        ]
    };
    myChart2.setOption(option);

    pieint=setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart2.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex2
        });
        currentIndex2 = (currentIndex2 + 1) % dataLen;
        // 高亮当前图形
        myChart2.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex2
        });

    }, 3000);
}





function getNumByGrade() {
    $.ajax({
        type: "get",
        url: "getNumByGrade",
        async: false,
        cache:false,

        success: function (rest) {


        for(var i = 0;i < rest.length;i++) {
            delete rest[i].sheetid;

        }


          bing(rest) ;


        },

        error: function (rest) {
            alert("数据获取失败！")
        }
    });

}




