$(function () {
// IT页面
    getNumByGrade() ;
});
var itChart;
var itOption;
function bing(arr,rest) {
    var dom = document.getElementById("char");
    itChart = echarts.init((dom));
    itOption = {
        color: [
            "#6F41FF", "#FC363F",
            "#FF824E", "#25CDAA"],
        legend: {
            itemWidth: 6,   // 设置图例图形的宽
            itemHeight: 20,  // 设置图例图形的高
            itemGap: 47,
            formatter :'    {name}',
            orient: 'vertical',
            top: 'middle',
            data: ['正常', '服务停止', '关键', '严重','轻微'],
              show: true,
            y:'right',
            right:'47px',
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
                    emphasis:{
                        show: true,
                        formatter: ['{a|{b}：{c}项}\n','{b|共'+rest.BusinessDetailsView.TotalRecords+'项}'].join(''),
                        rich: {
                            a:{
                                fontSize: 25,
                                color: '#3bc5ff'
                            },
                            b: {
                                fontSize: 25,
                                color: '#3bc5ff',
                                height: 36
                            }
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [

                    { value:arr[4].value,name:arr[4].name,

                        itemStyle:{ color: {
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
                            }},

                    },
                    {value:arr[3].value,name:arr[3].name,itemStyle:{ color: {
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
                            }},
                        /*label: {
                            normal: {
                                show: false,}*/
                    },
                    {value:arr[2].value,name:arr[2].name,itemStyle:{ color: {
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
                            }},
                    },
                    {value:arr[1].value,name:arr[1].name,itemStyle:{ color: {
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
                            }},
                            }, {value:arr[0].value,name:arr[0].name,itemStyle:{ color: {
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
                            }}}
                ]
            }
        ]
    };
    itChart.setOption(itOption);
};


var currentIndex = -1;
setInterval(function () {
    var dataLen = itOption.series[0].data.length;
    // 取消之前高亮的图形
    itChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    itChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex
    });

}, 1500);



function getNumByGrade() {
    $.ajax({
        type: "get",
        url: "/BusinessDetailsView",

        cache:false,

        success: function (rest) {
            var arr=[{name:'轻微',value:0},{name:'严重',value:0},{name:'关键',value:0},{name:'服务停止',value:0},{name:'正常',value:0}]
        for(var i = 0;i < rest.BusinessDetailsView.Details.length;i++) {
            switch (parseInt(rest.BusinessDetailsView.Details[i].severity,10)){
                case 1:
                arr[0].value++;
                break;
                case 2:
                    arr[1].value++;
                    break;
                case 3:
                    arr[2].value++;
                    break;
                case 4:
                    arr[3].value++;
                    break;
                case 5:
                    arr[4].value++;
                    break;
            }


        }


          bing(arr,rest) ;


        }


    });

}




