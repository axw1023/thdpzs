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
        title : {
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
        },

        color:['#208198','#2EABCC','#AA625A'],  //饼图颜色

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        legend: {
            //边框
            
            orient: 'vertical',
            x:'right',
            y:'top',
            data: ['生产','物流','人工'],
            textStyle:{
                color:'white'
            }
        },
        //graphic是原生图形元素组件,可以支持的图形元素包括image, text, circle等等 除了下面的属性之外,还有onclick: function () {...}属性,具体的可参照echarts文档

        graphic:{
            type: 'text',
            // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
            // right: 10,
            // bottom: '10%',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            //可设置颜色 字体等等
            style: {
                fill: 'white',  //text颜色
                text: '共380项',
                font: '20px Microsoft YaHei'
            }
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                name:'成本构成',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    show: false,
                    position: 'outside',
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    show:false
                },
                data:[
                    {value:335, name:'生产'},
                    {value:310, name:'物流'},
                    {value:234, name:'人工'},
                ]
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
function setSynhzb() {
    var myChart = echarts.init(document.getElementById('synhzb'));

    // 指定图表的配置项和数据
    var  option = {
        title : {
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
        },

        color:['#208198','#2EABCC','#AA625A'],  //饼图颜色

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        legend: {
            orient: 'vertical',
            x:'right',
            y:'top',
            data: ['蒸汽消耗','水电消耗'],
            textStyle:{
                color:'white'
            }
        },
        //graphic是原生图形元素组件,可以支持的图形元素包括image, text, circle等等 除了下面的属性之外,还有onclick: function () {...}属性,具体的可参照echarts文档

        graphic:{
            type: 'text',
            // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
            // right: 10,
            // bottom: '10%',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            //可设置颜色 字体等等
            style: {
                fill: 'white',  //text颜色
                text: '共380项',
                font: '20px Microsoft YaHei'
            }
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                name:'上月能源消耗',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    show: false,
                    position: 'outside',
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    show:false
                },
                data:[
                    {value:335, name:'蒸汽消耗'},
                    {value:234, name:'水电消耗'},
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
        title : {
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
        },

        color:['#208198','#2EABCC','#AA625A','#563688','#603962','#808854'],  //饼图颜色

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        legend: {
            orient: 'vertical',
            x:'right',
            y:'top',
            data: ['汽油','柴油','液化气','丙烷','丙烯','石油焦'],
            textStyle:{
                color:'white'
            }
        },
        //graphic是原生图形元素组件,可以支持的图形元素包括image, text, circle等等 除了下面的属性之外,还有onclick: function () {...}属性,具体的可参照echarts文档

        graphic:{
            type: 'text',
            // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
            // right: 10,
            // bottom: '10%',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            //可设置颜色 字体等等
            style: {
                fill: 'white',  //text颜色
                text: '共383项',
                font: '20px Microsoft YaHei'
            }
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    show: false,
                    position: 'outside',
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    show:false
                },
                data:[
                    {value:2354, name:'汽油'},
                    {value:3241, name:'柴油'},
                    {value:1356, name:'液化气'},
                    {value:2365, name:'丙烷'},
                    {value:1241, name:'丙烯'},
                    {value:524, name:'石油焦'},
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
        title: {
            show: true,
            text:'海科装饰收率',
            x:'center',
            textStyle: {
                //文字颜色
                color: '#208198',
            },
        },
/*        title : {
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
                color:'#208198',
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
                axisLabel:{
                    type : 'category',
                    color:'red',
                    interval: '0',
                    fontSize:10,
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
                type : 'value'
            }
        ],
        series : [
            {
                name:'目标',
                type:'bar',
                barWidth : 8,
                data:[320, 472, 411, 434, 320, 460, 260]
            },
            {
                name:'日收率',
                type:'bar',
                barWidth : 8,
                data:[200, 442, 285, 314, 230, 300, 400]
            },
            {
                name:'月收率',
                type:'bar',
                barWidth : 8,
                data:[200, 412, 280, 330, 410, 385, 310]
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
                    color: '#EE8F57'
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
                show: true,
                lineStyle: {
                    color: '#EE8F57'
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
        title: {
            text: '折线图堆叠',
            x:'center',
            textStyle: {
                //文字颜色
                color: '#208198',
            },
        },

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
                    color: '#51e5fc'
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
                show: true,
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
        title : {
            text: '食品生产情况',
            subtext: '每年企业新办/注销许可证趋势'
        },
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            top:'15%',
            containLabel: true
        },
        legend: {
            data:['新办数','注销数']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
            }
        ],
        yAxis : {
            type : 'value'
        }
        ,
        series : [
            {
                name:'新办数',
                type:'line',
                areaStyle: {
                    normal: {type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(199, 37, 50,0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(199, 37, 50,0.2)'
                        }], false)
                    }
                },
                smooth:true,
                itemStyle: {
                    normal: {areaStyle: {type: 'default'}}
                },
                data:[136,375,380,449,114,267,142,318,357,193,421,391]
            },
            {
                name:'注销数',
                type:'line',
                areaStyle: {
                    normal: {type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(19, 37, 250,0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(19, 37, 250,0.2)'
                        }], false)
                    }
                },
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[610, 312, 221,654, 910, 630, 310, 521, 354, 560, 830, 310]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}