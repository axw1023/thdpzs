$(function () {

// 成本构成
    setCbgc();
//上月能耗指标
    setSynhzb();
    //销售情况
    setXsqk();
    //海科装饰
    setHkzssl();
    //原料来源
    setYlly();
    //库存
    setKc();
    //计划执行率
    setJhzxl();
    
});
function getCbgc() {
    setCbgc();
    //result
}
function setCbgc() {
    var myChart = echarts.init(document.getElementById('cbgc'));

    // 指定图表的配置项和数据
    var  option = {
     /*   title : {
            text: '成本构成',
            x:'center',
            textStyle:{
                //文字颜色
                color:'#208198',
                // //字体风格,'normal','italic','oblique'
                // fontStyle:'normal',
                // //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                // fontWeight:'bold',
                // //字体系列
                // fontFamily:'sans-serif'
                // //字体大小
                // fontSize:18
            },
            subtextStyle:{
                //与textStyle类似
            },  
        },*/

        color:['#208198','#2EABCC','#AA625A'],  //饼图颜色

        tooltip: {
            trigger: 'item',
            /*formatter: "{a} <br/>{b}: {c} ({d}%)"*/
        },

        legend: {
            /*itemWidth: 6,   // 设置图例图形的宽
            itemHeight: 20,  // 设置图例图形的高*/
            //边框
            itemGap: 65,
            orient: 'vertical',
            x:'565',
            y:'116',
            data: ['生产','物流','人工'],
            textStyle:{
                color:'#92F1FF',
                fontSize:20
            }
        },
        //graphic是原生图形元素组件,可以支持的图形元素包括image, text, circle等等 除了下面的属性之外,还有onclick: function () {...}属性,具体的可参照echarts文档

        graphic:{
            type: 'text',
            // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
            // right: 10,
            // bottom: '10%',
            left: '160', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            //可设置颜色 字体等等
            style: {
                fill: '#92F1FF',  //text颜色
                text: '共380项',
                font: '33px Microsoft YaHei'
            }
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                
                center:['210','50%'],//圆形居中
                name:'成本构成',
                type:'pie',
                radius: ['65%', '91%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                  /*  emphasis: {
                        show: true,
                        formatter: "共{a|{c}}项",
                        rich:{
                            a:{
                                fontSize: 41
                            }
                        },
                      
                    }*/
                },
                labelLine: {
                    show:false
                },
                data:[
                    {value:335, name:'生产',itemStyle:{ color: {
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
                    {value:310, name:'物流',itemStyle:{ color: {
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
                    {value:234, name:'人工',itemStyle:{ color: {
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
                ]
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
   /* pieint=setInterval(function () {
        var dataLen = option.series.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex2
        });
        currentIndex2 = (currentIndex2 + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex2
        });

    }, 3000);*/
}
function setSynhzb() {
    var myChart = echarts.init(document.getElementById('synhzb'));

    // 指定图表的配置项和数据
    var  option = {
       /* title : {
            text: '上月能耗指标',
            x:'center',
            textStyle:{
                //文字颜色
                color:'#208198',
                // //字体风格,'normal','italic','oblique'
                // fontStyle:'normal',
                // //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                // fontWeight:'bold',
                // //字体系列
                // fontFamily:'sans-serif'
                // //字体大小
                // fontSize:18
            },
            subtextStyle:{},  //与textStyle类似
        },*/

        color:['#208198','#2EABCC','#AA625A'],  //饼图颜色

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        legend: {
            itemGap: 65,
            orient: 'vertical',
            x:'565',
            y:'116',
            data: ['蒸汽消耗','水电消耗'],
            textStyle:{
                color:'#92F1FF',
                fontSize:20
            }
        },
        //graphic是原生图形元素组件,可以支持的图形元素包括image, text, circle等等 除了下面的属性之外,还有onclick: function () {...}属性,具体的可参照echarts文档

        graphic:{
            type: 'text',
            // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
            // right: 10,
            // bottom: '10%',
            left: '160', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            //可设置颜色 字体等等
            style: {
                fill: '#92F1FF',  //text颜色
                text: '共380项',
                font: '33px Microsoft YaHei'
            }
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                center:['210','50%'],//圆形居中
                name:'上月能源消耗',
                type:'pie',
                radius: ['65%', '91%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            fontWeight: '#92F1FF'
                        }
                    }
                },
                labelLine: {
                    show:false
                },
                data:[
                    {value:335, name:'蒸汽消耗',itemStyle:{ color: {
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
                    {value:234, name:'水电消耗',itemStyle:{ color: {
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
                ]
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
function setXsqk() {
    var myChart = echarts.init(document.getElementById('xsqk'));

    // 指定图表的配置项和数据
    var  option = {
     /*   title : {
            text: '销售情况',
            x:'center',
            textStyle:{
                //文字颜色
                color:'#208198',
                // //字体风格,'normal','italic','oblique'
                // fontStyle:'normal',
                // //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                // fontWeight:'bold',
                // //字体系列
                // fontFamily:'sans-serif'
                // //字体大小
                // fontSize:18
            },
            subtextStyle:{},  //与textStyle类似
        },*/

        color:['#208198','#2EABCC','#AA625A','#563688','#603962','#808854'],  //饼图颜色

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        legend: {
            itemGap: 28,
            orient: 'vertical',
            x:'565',
            y:'50',
            data: ['汽油','柴油','液化气','丙烷','丙烯','石油焦'],
            textStyle:{
                color:'#92F1FF',
                fontSize:20
            }
        },
        //graphic是原生图形元素组件,可以支持的图形元素包括image, text, circle等等 除了下面的属性之外,还有onclick: function () {...}属性,具体的可参照echarts文档

        graphic:{
            type: 'text',
            // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
            // right: 10,
            // bottom: '10%',
            left: '160', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            //可设置颜色 字体等等
            style: {
                fill: '#92F1FF',  //text颜色
                text: '共380项',
                font: '33px Microsoft YaHei'
            }
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                center:['210','50%'],//圆形居中
                name:'访问来源',
                type:'pie',
                radius: ['65%', '91%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            fontWeight: '#92F1FF'
                        }
                    }
                },
                labelLine: {
                    show:false
                },
                data:[
                    {value:2354, name:'汽油',itemStyle:{ color: {
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
                    {value:3241, name:'柴油',itemStyle:{ color: {
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
                    {value:1356, name:'液化气',itemStyle:{ color: {
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
                    {value:2365, name:'丙烷',itemStyle:{ color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#FF6F2D' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#FF36BB' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }}},
                    {value:1241, name:'丙烯',itemStyle:{ color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#77ff1b' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#32FFC7' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }}},
                    {value:524, name:'石油焦',itemStyle:{ color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#D62CFF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#FF2186' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }}},
                ]
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}
function setHkzssl() {
    var myChart = echarts.init(document.getElementById('hkzssl'));

    // 指定图表的配置项和数据
    var  option = {
    /*    title: {
            show: true,
            text:'海科装饰收率',
            x:'center',
            textStyle: {
                //文字颜色
                color: '#208198',
            },
        },*/
/*        title : {
            text: '销售情况',
            x:'center',
            textStyle:{
                //文字颜色
                color:'#208198',
                  fontSize:18
                // //字体风格,'normal','italic','oblique'
                // fontStyle:'normal',
                // //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                // fontWeight:'bold',
                // //字体系列
                // fontFamily:'sans-serif'
                // //字体大小
                // fontSize:18
            },*/
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['目标','日收率','月收率'],
            /*left:,*/
            right: '4%',
            bottom: '80%',
            textStyle:{
                color:'#92F1FF',
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['常压装置','柴油加氢','柴油加氢','焦化装置','柴油改制','重催装置','气分/MTBE'],
                splitLine:{show: false},//去除网格
                axisLine: {
                    lineStyle: {
                        // 设置x轴颜色
                        color: 'rgba(1,1,1,0)'
                    }
                },

                axisLabel:{
                    type : 'category',
                    color:'#92F1FF',
                    interval: '0',
                    fontSize:20,
                   
                    
                    // rotate:-30,
                },
                
/*                textStyle: {
                    color: '#208198',
                    align: 'center',
                    whiteSpace: 'wrap',
                    lineHeight: 15,
                    height: 50,
                    fontSize: 1
                },*/
            /*    textStyle:{
                    color:'#208198',
                    fontSize:2,
                },*/
            }
        ],
        yAxis : [
            {
                splitLine:{show: false},//去除网格
                type : 'value',
                axisLabel: {
                    color: '#92F1FF',
                },
                axisLine: {
                    lineStyle: {
                        // 设置x轴颜色
                        color: 'rgba(1,1,1,0)'
                    }
                },

            }
        ],
        series : [
            {
                name:'目标',
                type:'bar',
                barWidth : 8,
                data:[320, 472, 411, 434, 320, 460, 260],
                itemStyle:{ color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#4360F1' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(122, 127, 255,0)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }}

            },
            {
                name:'日收率',
                type:'bar',
                barWidth : 8,
                data:[200, 442, 285, 314, 230, 300, 400],
                itemStyle:{ color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255, 169, 165,0)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }}

            },
            {
                name:'月收率',
                type:'bar',
                barWidth : 8,
                data:[200, 412, 280, 330, 410, 385, 310],
                itemStyle:{ color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'green' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(146, 255, 160,0)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }}

            },
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}
function setYlly() {
    var myChart = echarts.init(document.getElementById('ylly'));

    // 指定图表的配置项和数据
    var  option = {
   /*     title: {
            text: '原料来源',
            x:'center',
            textStyle: {
                //文字颜色
                color: '#208198',
            },
        },*/
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: [{
            type: 'category',
            data: ['汽油', '柴油', '液化气', '丙烷', '丙烯', '石油焦'],
            axisPointer: {
                type: 'none'
            },
            boundaryGap: true,
            axisLabel: {

                textStyle: {
                    color: '#51e5fc'
                }
            },
            axisLine: {
                lineStyle: {
                    // 设置x轴颜色
                    color: 'rgba(1,1,1,0)'
                }
            },

            axisTick: {
                show: false,
            },
        },
            {
                type: 'category',
                show: false,
                position: '',
                data: ['汽油', '柴油', '液化气', '丙烷', '丙烯', '石油焦'],
                offset:20,
                axisPointer: {
                    type: 'none',
                    label: {
                        show: false
                    }
                },
                boundaryGap: false,
            }
        ],
        yAxis: [{
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#51e5fc'
                },

            },
            offset: 6,
            axisLine: {
                lineStyle: {
                    // 设置x轴颜色
                    color: 'rgba(1,1,1,0)'
                }
            },

            axisTick: {
                show: false,
            },

        },
            {
                type: 'value',
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                }
            }
        ],
        series: [{

            type: 'bar',
            //                barWidth:27,
            barWidth : 12,
            
            data: [210, 470, 300, 480, 400, 500],
            itemStyle: {
                normal: {
                    barBorderRadius: 7,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#51e5fc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#06bbff' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                },
                emphasis: {
                    barBorderRadius: 7,
                }
            },
            barCategoryGap: '-20%',
        },

            {
               /* name: '所占比例',*/
                type:'line',
                symbol:'star',//拐点样式
                symbolSize: 8,//拐点大小
                /*yAxisIndex: 1,
                xAxisIndex: 1,*/
                data: [210, 470, 300, 480, 400, 500],
                itemStyle: {
                    normal: {
                        color: '#ee992f',
                    }
                },
                areaStyle: {
                    
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(255, 165,0,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(255, 165,0,0.2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                markPoint: {
                    data: [{
                        coord: ['0603', '140'],
                        symbol: 'image://img/circle1.png'
                    },
                        {
                            coord: ['0606', '170'],
                            symbol: 'image://img/circle2.png'
                        }, {
                            coord: ['0609', '125'],
                            symbol: 'image://img/circle1.png'
                        }


                    ],
                    label: {
                        normal: {
                            show: false
                        }
                    }
                },
                smooth: false
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}
function setKc() {
    var myChart = echarts.init(document.getElementById('kc'));

    // 指定图表的配置项和数据
    var  option = {
    /*    title: {
            text: '库存',
            x:'center',
            textStyle: {
                //文字颜色
                color: '#208198',
            },
        },*/

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: [{
            type: 'category',
            data: ['汽油', '柴油', '液化气', '丙烷', '丙烯', '石油焦'],
            axisPointer: {
                type: 'none'
            },
            boundaryGap: true,
            axisLabel: {

                textStyle: {
                    color: '#51e5fc'
                }
            },
            axisLine: {
                lineStyle: {
                    // 设置x轴颜色
                    color: 'rgba(1,1,1,0)'
                }
            },

            axisTick: {
                show: false,
            },
        },
            {
                type: 'category',
                show: false,
                position: '',
                data: ['汽油', '柴油', '液化气', '丙烷', '丙烯', '石油焦'],
                offset:20,
                axisPointer: {
                    type: 'none',
                    label: {
                        show: false
                    }
                },
                boundaryGap: false,
            }
        ],
        yAxis: [{
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#51e5fc'
                },

            },
            offset: 6,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#51e5fc'
                }
            },
            axisTick: {
                show: false,
            },

        },
            {
                type: 'value',
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                }
            }
        ],
        series: [{

            type: 'bar',
            //                barWidth:27,
            barWidth : 12,

            data: [210, 470, 300, 480, 400, 500],
            itemStyle: {
                normal: {
                    barBorderRadius: 7,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#51e5fc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#06bbff' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                },
                emphasis: {
                    barBorderRadius: 7,
                }
            },
            barCategoryGap: '-20%',
        },

            {
                /* name: '所占比例',*/
                type:'line',
                symbol:'star',//拐点样式
                symbolSize: 8,//拐点大小
                /*yAxisIndex: 1,
                xAxisIndex: 1,*/
                data: [210, 470, 300, 480, 400, 500],
                itemStyle: {
                    normal: {
                        color: '#06bbff',
                    }
                },
                areaStyle: {

                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0,0,255,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(0,0,255,0.2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                markPoint: {
                    data: [{
                        coord: ['0603', '140'],
                        symbol: 'image://img/circle1.png'
                    },
                        {
                            coord: ['0606', '170'],
                            symbol: 'image://img/circle2.png'
                        }, {
                            coord: ['0609', '125'],
                            symbol: 'image://img/circle1.png'
                        }


                    ],
                    label: {
                        normal: {
                            show: false
                        }
                    }
                },
                smooth: false
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}
function setJhzxl() {
    var myChart = echarts.init(document.getElementById('jhzxl'));

    // 指定图表的配置项和数据
    var option = {
        /*title : {
            text: '计划执行率',
                x:'center',
                textStyle: {
                    //文字颜色
                    color: '#208198',
            },
        },*/
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            top:'20%',
            containLabel: true
        },
        legend: {
         /*   symbol: 'diamond',     //设定为实心点*/
            symbol: 'circle',     //设定为实心点
            symbolSize: 8,   //设定实心点的大小
            x:'right',
            y:'top',
            data:['实际执行','计划执行'],
            textStyle: {
                color: '#51e5fc'
            },
            
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],

                axisLabel: {

                    textStyle: {
                        color: '#51e5fc'
                    }
                },
                
            }
        ],
        yAxis : {
            show:false,
            type : 'value',
            splitLine:{show: false},//去除网格线
        }
        ,
        series : [
            {
                name:'实际执行',
                type:'line',
                areaStyle: {
                    normal: {type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,0,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,0,255,0.2)'
                        }], false)
                    }
                },
                smooth:false,
                itemStyle: {
                    normal: {areaStyle: {type: 'default'},
                        color:'#00FCFF',
                        lineStyle:{
                            color:'#00FCFF'
                        }
                    }
                },
                data:[136,375,380,449,114,267,142,318,357,193,421,391]
            },
            {
                name:'计划执行',
                type:'line',
                areaStyle: {
                    normal: {
                        type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(48, 255, 28,0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(19, 37, 250,0.2)'
                        }], false)
                    }
                },
                symbol: 'circle',     //设定为实心点
                symbolSize: 8,   //设定实心点的大小
                smooth:false,
                itemStyle: {normal: {areaStyle: {type: 'default'},
                        color:'#3BFF40',
                        lineStyle:{
                            color:'#3BFF40'
                        }
                }
                
                },
                data:[610, 312, 221,654, 910, 630, 310, 521, 354, 560, 830, 310]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}