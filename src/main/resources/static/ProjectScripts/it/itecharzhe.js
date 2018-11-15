var dom = document.getElementById("charzhe");
var myChart1 = echarts.init((dom));

//初始加载背景特效
window.onload = function() {
    //配置
    var config = {
        vx: 4,	//小球x轴速度,正为右，负为左
        vy: 4,	//小球y轴速度
        height: 2,	//小球高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 300,		//点个数
        color: "121, 162, 185", 	//点颜色
        stroke: "130,255,255", 		//线条颜色
        dist: 6000, 	//点吸附距离
        e_dist: 20000, 	//鼠标吸附加速距离
        max_conn: 10 	//点到点最大连接数
    }

    //调用
    CanvasParticle(config);
}
// var grade;warn
// var currentIndex2 = -1;
// var pieint=null;
// getNumByGrade();
option = {

    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#071424'
            }
        }
    },
    legend: {

        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    // toolbox: {
    //         feature: {
    //             saveAsImage: {}
    //         }
    // },下载工具
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',

            axisLine: {
                lineStyle: {
                    // 设置x轴颜色
                    color: 'rgba(1,1,1,0)'
                }
            },
            axisLabel: {
                color: "#1D9F88" //刻度线标签颜色
            },

            boundaryGap : false,

            // show: false,//隐藏x轴
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                color: "#1d9f88" //刻度线标签颜色
            },
            axisLine: {
                lineStyle: {
                    // 设置x轴颜色
                    color: 'rgba(1,1,1,0)'
                }
            },
            splitLine:{show: false},//去除网格线
            // show: false//隐藏y轴
        },

    ],
    series : [

        {  symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            name:'邮件营销',
            type:'line',
            stack: '总量',

            areaStyle: { },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {

            },
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            name:'直接访问',
            type:'line',
            stack: '总量',
            itemStyle : {
                normal : {
                    color:'rgb(200,126,97)',
                    lineStyle:{

                        color:'rgb(200,126,97)'
                    }
                }
            },
            areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0,1, [{
                        offset: 0,
                        color: 'rgba(200,126,97,0.45)',

                    }, {
                        offset: 0.34,
                        color: 'rgba(200,126,97,0.30)'
                    },
                        {
                            offset: 1,
                            color: 'rgba(200,126,97,0.00)'
                        }])
                }},
            data:[320, 111, 4891, 2000, 390, 330, 320]
        },
        {
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top'
            //     }
            // },
            itemStyle : {
                normal : {
                    color:'#724FF4',
                    lineStyle:{

                        color:'#724FF4'
                    }
                }
            },
            areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0,1, [{
                        offset: 0,
                        color: 'rgba(26,31,75,0.45)',

                    }, {
                        offset: 0.34,
                        color: 'rgba(26,31,75,0.30)'
                    },
                        {
                            offset: 1,
                            color: 'rgba(26,31,75,0.00)'
                        }])
                }},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

myChart1.setOption(option);

// pieint=setInterval(function () {
//     var dataLen = option.series.length;
//     // 取消之前高亮的图形
//     myChart2.dispatchAction({
//         type: 'downplay',
//         seriesIndex: 0,
//         dataIndex: currentIndex2
//     });
//     currentIndex2 = (currentIndex2 + 1) % dataLen;
//     // 高亮当前图形
//     myChart2.dispatchAction({
//         type: 'highlight',
//         seriesIndex: 0,
//         dataIndex: currentIndex2
//     });
//
// }, 3000);





function getNumByGrade() {
    $.ajax({
        type: "get",
        async: false,
        cache: false,
        data: {"method": "grade"},
        url: $appRoot + "QytjServlet",
        dataType: "json",
        success: function (data) {
            grade = data.data;
            for (var i = 0; i < grade.length; i++) {
                if (grade[i]['name'] == '生产企业') {
                    $('#dj1').text(grade[i]['value']);
                }
                else if (grade[i]['name'] == '经营企业') {
                    $('#dj2').text(grade[i]['value']);
                }
                else if (grade[i]['name'] == '使用企业') {
                    $('#dj3').text(grade[i]['value']);
                }
                else if (grade[i]['name'] == '运输企业') {

                    $('#dj4').text(grade[i]['value']);
                }
            }

        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });

}