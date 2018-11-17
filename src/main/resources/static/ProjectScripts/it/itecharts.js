$(function () {

// IT页面
    getNumByGrade() ;

});

var greate;

var data;
var scData=[];
var syData=[];
var jyData=[];
var ysData=[];


    var dom = document.getElementById("char");
    var myChart2 = echarts.init((dom));


    var currentIndex2 = -1;
    var pieint=null;

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
                data: [
                    { value:234, name:'致命',itemStyle:{ color: {
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
                    {value:234, name:'严重',itemStyle:{ color: {
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
                    {value:234, name:'警告',itemStyle:{ color: {
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
                    {value:135, name:'主要',itemStyle:{ color: {
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
        var dataLen = option.series.length;
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


function getNumByGrade() {
    $.ajax({
        type: "get",
        url: "getNumByGrade",
        async: false,
        // dataType : "json",
        cache:false,
        success: function (data) {
            debugger
        for(var i = 0;i < data.length;i++){
                delete data[i].sheetid;
        }
        var datas = data;


        },

        error: function (data) {
            alert("数据获取失败！")
        }
    });

}




