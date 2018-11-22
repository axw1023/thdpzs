//变化趋势图
function setCharData(_d){
    var data=_d.map(function(item){
        return item.value
    });
    var names=getSevenDate();
    var option = {
        title: {
            show:false
        },
        legend: {
            show:false
        },
        tooltip: {
            show:false
        },
        xAxis: {
            type: 'category',
            show:true,
            axisTick: {
                show: false
            },
            axisLabel:{
                textStyle:{   //设置文字
                    color:'#9FCCFF',
                    fontSize:25
                }
            },
            axisLine:{
                show:false
            },
            data:names,

        },
        yAxis: {
            type: 'value',
            show:false,
            axisTick: {
            },
            splitLine: {
                show: false
            },
            axisLine:{
                show:false
            },
            axisLabel: {
                color:'#9FCCFF',
            },
        },
        grid: {
            top: 30,
            left: 15,
            right: 15,
            bottom:35
        },
        series:
            {
                name:'指标值',
                type:'line',
                smooth: false,
                symbol: 'circle',
                symbolSize: 10,
                sampling: 'average',
                label:{
                    show:true,
                    formatter:function(param){
                        return parseInt(_d[0].other_value)+param.value/1
                    },
                    textStyle:{
                        fontSize:22
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#8ec6ad'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'RGBA(40, 225, 184, 1)'
                        }, {
                            offset: 1,
                            color: 'RGBA(2, 172, 162, 0)'
                        }])
                    }
                },
                data: data
            }
    };
    myChart.setOption(option)
}
//点位相关性
function setPointData(_d){
    var name=_d.map(function(item){
        return item.name;
    });
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['正相关系数','负相关系数'],
            align: 'left',
            right: 10,
            textStyle: {
                color: "#9FCCFF",
                fontSize:20,
                padding:[0,0,0,8]
            },
            itemWidth: 20,
            itemHeight: 20,
            itemGap: 35
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '13%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: name,

            axisLine: {
                show: false,
                lineStyle: {
                    color: "#063374",
                    width: 1,
                    type: "solid"
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#9FCCFF",
                    fontSize:22
                },
                margin:15
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: "#9FCCFF",
                    fontSize:22
                }
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#00c7ff",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                show:false,
                lineStyle: {
                    color: "#063374",
                }
            }
        }],
        series: [
            {
                name: '正相关系数',
                type: 'bar',
                data: _d.map(function(item){
                    return item.value;
                }),
                barWidth: 10, //柱子宽度
                barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'RGBA(42, 156, 252, 1)'
                        }, {
                            offset: 1,
                            color: 'RGBA(42, 156, 252, 0.1)'
                        }]),
                    }
                }
            },
            {
                name: '负相关系数',
                type: 'bar',
                data: _d.map(function(item){
                    return item.other_value;
                }),
                barWidth: 10,
                barGap: 1,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'RGBA(40, 225, 184, 1)'
                        }, {
                            offset: 1,
                            color: 'RGBA(2, 172, 162, 0.1)'
                        }]),
                    }
                }
            }
        ]
    };
    pointChart.setOption(option);
}
//三个饼图
function setThreePie(_d){
    var option = {
        title:[
            {
                show:true,
                text:_d[0].name,
                top:230,
                left:60,
                textStyle:{
                    color:'#9FCCFF',
                    fontSize:22,
                    fontWeight:400
                }
             },
            {
                show:true,
                text: _d[1].name,
                top:230,
                left:215,
                textStyle:{
                    color:'#9FCCFF',
                    fontSize:22,
                    fontWeight:400,
                }
            }
            ,{
                show:true,
                text: _d[2].name,
                top:230,
                left:360,
                textStyle:{
                    color:'#9FCCFF',
                    fontSize:22,
                    fontWeight:400
                }
            }],
        tooltip: {
            show: false,
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            fontWeight:400,
        },
        legend: {
            show: false,
            itemGap: 12,
            data: ['01', '02']
        },
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                }
            }
        },
        series: [
            {
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['29.5%', '31.5%'],
                center: ['19.9%', '51.8%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                label:{
                    formatter:'{d}'
                },
                data: [{
                    value:_d[0].value,
                    name: '01',
                    itemStyle: {
                        normal: {
                            color:'#59b3ff',
                            shadowBlur:2,
                            shadowColor:'#59b3ff',
                            shadowOffsetY:-1,
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: '#00cefc' // 鼠标悬浮上去完成的圆环的颜色

                        }
                    },
                    label: {
                        show: true,
                        formatter:'{a|{d}}{b|%}',
                        position:'center',
                        color:'#68F1FC',
                        shadowBlur:3,
                        shadowColor:'#68F1FC',
                        rich:{
                            a:{
                                fontSize:16,
                                fontWeight:900,
                                verticalAlign:'bottom'
                            },
                            b:{
                                verticalAlign:'bottom'
                            }
                        }
                    }
                }, {
                    value: (100-_d[0].value),
                    name: 'invisible',
                    itemStyle:{
                        normal: {
                            color:'#283169',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur:-2,
                            shadowColor:'#283169',

                        }
                    }

                }]
            },
            {
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['29.5%', '31.5%'],
                center: ['49.8%', '51.8%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                label:{
                    formatter:'{d}'
                },
                data: [{
                    value: _d[1].value,
                    name: '01',
                    itemStyle: {
                        normal: {
                            color:'#59b3ff',
                            shadowBlur:2,
                            shadowColor:'#59b3ff',
                            shadowOffsetY:-1,
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: '#00cefc' // 鼠标悬浮上去完成的圆环的颜色

                        }
                    },
                    label: {
                        show: true,
                        formatter:'{a|{d}}{b|%}',
                        position:'center',
                        color:'#68F1FC',
                        rich:{
                            a:{
                                fontSize:16,
                                fontWeight:900,
                                verticalAlign:'bottom'
                            },
                            b:{
                                verticalAlign:'bottom'
                            }
                        }
                    }
                }, {
                    value: (100-_d[1].value),
                    name: 'invisible',
                    itemStyle:{
                        normal: {
                            color:'#283169',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur:-2,
                            shadowColor:'#283169',

                        }
                    }

                }]
            },
            {
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['29.5%', '31.5%'],
                center: ['79.5%', '51.8%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                label:{
                    formatter:'{d}'
                },
                data: [{
                    value:_d[2].value,
                    name: '01',
                    itemStyle: {
                        normal: {
                            color:'#59b3ff',
                            shadowBlur:2,
                            shadowColor:'#59b3ff',
                            shadowOffsetY:-1,
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: '#00cefc' // 鼠标悬浮上去完成的圆环的颜色

                        }
                    },
                    label: {
                        show: true,
                        formatter:'{a|{d}}{b|%}',
                        position:'center',
                        color:'#68F1FC',
                        rich:{
                            a:{
                                fontSize:16,
                                fontWeight:900,
                                verticalAlign:'bottom'
                            },
                            b:{
                                verticalAlign:'bottom'
                            }
                        }
                    }
                }, {
                    value: (100 - _d[2].value),
                    name: 'invisible',
                    itemStyle:{
                        normal: {
                            color:'#283169',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            shadowBlur:-2,
                            shadowColor:'#283169',

                        }
                    }

                }]
            }
        ]
    }
    threePie.setOption(option);
}

//获取温度图数据
function getTemData(){
    var _d=$.ajax({
        type: 'get',
        url: '/BigData/getTemData',
        dataType: 'json'
    });
    return _d;
}
//温度图
function setTemChar(_d){
    var value=_d.map(function(item){
        return item.value;
    });
    var name=_d.map(function(item){
        return item.name;
    });
    var img1;
    var img2;
    if(_d[0].status==1){
        img1='image://../../images/BigData/up.png';
        img2='image://../../images/BigData/down.png'
    }else{
        img1='image://../../images/BigData/down.png';
        img2='image://../../images/BigData/up.png'
    }

    var option = {
        tooltip: {
            show:false,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show:false,
            align: 'left',
            right: 10,
            textStyle: {
                color: "#9FCCFF",
                fontSize:20,
                padding:[0,0,0,8]
            },
            itemWidth: 20,
            itemHeight: 20,
            itemGap: 35
        },
        grid: {
            left: '0%',
            right: '10%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: name,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#063374",
                    width: 1,
                    type: "solid"
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                interval:0,
                textStyle: {
                    color: "#9FCCFF",
                    fontSize:22
                },
                margin:20
            },
        }],
        yAxis: [{
            show:false,
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: "#9FCCFF",
                    fontSize:22
                }
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#00c7ff",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                show:false,
                lineStyle: {
                    color: "#063374",
                }
            }
        }],

        series: [
            {
                name: '温度',
                type: 'bar',
                markPoint:{
                    data:[{
                        x:180,
                        y:120,
                        symbol:img1,
                        symbolSize :[20,60],
                        symbolKeepAspect:true
                    },
                        {
                            x:460,
                            y:150,
                            symbol:img2,
                            symbolSize :[20,60],
                            symbolKeepAspect:true
                        }]
                },
                data: value,
                barWidth: 52, //柱子宽度
                barGap: 1, //柱子之间间距
                label:{

                    normal:{
                        show: true,
                        formatter:function(param){
                            return param.value-parseInt(_d[0].other_value);
                        },
                        position:'top',
                        color:'#68F1FC',
                        fontSize:22,
                        offset:[0,-20]
                    },


                },
                itemStyle: {
                    normal: {
                        shadowBlur:10,
                        shadowColor:'#68F1FC',
                        shadowOffsetY:3,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: 'RGBA(34, 124, 202, 1)'
                        },{
                            offset: .5,
                            color: 'RGBA(38, 218, 179, 1)'
                        },{
                            offset: 0,
                            color: 'RGBA(176, 206, 150, 1)'
                        }]),
                    }
                },

            },
            { //分隔
                "type": "pictorialBar",
                itemStyle: {
                    color: "#000"
                },
                "symbolRepeat": "fixed",
                "symbolMargin": "4",
                symbol: 'rect',
                "symbolClip": true,
                "symbolSize": [52, 1],
                "symbolPosition": "start",
                data: value,
            },

        ]
    };
    temChar.setOption(option);
}

//历史曲线图
function setThreeData(_d){
    var data1=[];
    var data2=[];
    var data3=[];
    var name=[];
    var names=getSevenDate();
    for(var i=0;i<_d.length;i++){
        if(i<4){
            data1.push([names[2*i],_d[i].value]);
            name[0]=_d[i].name;
        }else if(i<7){
            data2.push([names[2*(i-4)+1],_d[i].value]);
            name[1]=_d[i].name;
        }else{
            data3.push([names[i-7],_d[i].value]);
            name[2]=_d[i].name;
        }
    }
    var option = {
        title: {
            show:false
        },
        legend: {
            top:'top',
            left:'right',
            textStyle:{
                color:'#9FCCFF',
                fontSize:20
            },
            itemWidth: 20,
            itemHeight: 20,
            itemGap: 35,
            show:true,
            data:[{name:name[0],icon:'roundRect'},
                {name:name[1],icon:'roundRect'},
                {name:name[2],icon:'roundRect'}]
        },
        tooltip: {
        },
        xAxis:{
            type: 'category',
            show:true,
            axisTick: {
                show: false
            },
            axisLabel:{
                textStyle:{   //设置文字
                    color:'#9FCCFF',
                    fontSize:25
                }
                ,margin:15
            },
            axisLine:{
                show:false
            }
        },
        yAxis:{
            type: 'value',
            show: true,
            axisTick: {
                show:false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#9FCCFF',
                fontSize:22,
                formatter:function(param){
                    return (param/1+parseInt(_d[0].other_value))+'%';
                }

            }
        } ,
        grid:{
            top: 40,
            left: 80,
            right: 20,
            bottom:50
        },
        series:
            [
                {
                    name:name[2],
                    type:'line',
                    smooth: false,
                    symbol: 'circle',
                    symbolSize: 10,
                    sampling: 'average',
                    lineStyle:{
                        color:'#28E1B8'
                    },
                    itemStyle: {
                        normal: {
                            color: '#28E1B8'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'RGBA(40, 225, 184, 0.6)'
                            }, {
                                offset: 1,
                                color: 'RGBA(2, 172, 162, 0)'
                            }])
                        }
                    },
                    data:data3
                },
                {
                    name:name[0],
                    type:'line',
                    smooth: false,
                    symbol: 'circle',
                    symbolSize: 10,
                    sampling: 'average',
                    lineStyle:{
                        color:'#FF944D'
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF944D'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'RGBA(255, 148, 77, 0.6)'
                            }, {
                                offset: 1,
                                color: 'RGBA(255, 148, 77, 0)'
                            }])
                        }
                    },
                    data: data1
                },
                {
                    name:name[1],
                    type:'line',
                    smooth: false,
                    symbol: 'circle',
                    symbolSize: 10,
                    sampling: 'average',
                    lineStyle:{
                        color:'#59B3FF'
                    },
                    itemStyle: {
                        normal: {
                            color: '#59B3FF'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'RGBA(89, 179, 255, .6)'
                            }, {
                                offset: 1,
                                color: 'RGBA(89, 179, 255, 0)'
                            }])
                        }
                    },
                    data:data2
                }

            ]
    }
    three_line.setOption(option)
}

function getCoordData(){
    var _d=$.ajax({
        type: 'get',
        url: '/BigData/getCoordData',
        dataType: 'json'
    });
    return _d;
}

function setCoordData(_d){
    var data1={
        first: _d.first
    }
    var html1 = template('tpl1',data1);
    document.getElementById('first').innerHTML = html1;
  var data2={
        second: _d.second
    }
    var html2 = template('tpl2',data2);
    document.getElementById('second').innerHTML = html2;
     var data3={
         three: _d.three
    }
    var html3 = template('tpl3',data3);
    document.getElementById('three').innerHTML = html3;
    beginLayerShow(_d.layer);
}
var layerFlag=null;
var layerData=[];

//显示气泡
function beginLayerShow(data){
    layerData=data;
    if(layerFlag){
        clearInterval(layerFlag)
        layerFlag=null;
    }
    setInterval(function(){
        layerNum++;
        if(layerNum>layerData.length-1){
            layerNum=0;
        }
        var data={
            item: layerData[layerNum]
        }
        var html = template('tpl4',data);
        document.getElementById('layer').innerHTML = html;
        var top=layerData[layerNum].layer_coord_y+'px';
        var left=layerData[layerNum].layer_coord_x+'px'
        $("#layer").css({top:top,left:left});
    },layerData[0].time);

}

//获取点位信息
function getPointList(){
    var _d=$.ajax({
        type: 'get',
        url: '/BigData/getPointData',
        dataType: 'json'
    });
    return _d;
}
function setPointList(_d){
    var data={
        point:_d
    };
    var html = template('tpl5',data);
    document.getElementById('point').innerHTML = html;
}


//获取投料信息
function getFeedList(){
    var _d=$.ajax({
        type: 'get',
        url: '/BigData/getFeedData',
        dataType: 'json'
    });
    return _d;
}

//设置投料信息
function setFeedList(_d){
    var data={
        feed:_d
    };
    var html = template('tpl6',data);
    document.getElementById('feed').innerHTML = html;
}

//获取变化趋势
function getCharData(){
    var _d=$.ajax({
        type: 'get',
        url: '/BigData/getCharData',
        dataType: 'json'
    });
    return _d;
}

//获取三个饼图数据
function getThreePie(){
    var _d=$.ajax({
        type: 'get',
        url: '/BigData/getThreePie',
        dataType: 'json'
    });
    return _d;
}
//获取最近七天
function getSevenDate(){
    var myDate=new Date()
    var year =myDate.getFullYear()
    var month=myDate.getMonth()
    var myDay=myDate.getDate();
    var arr=[];
    for(var i=1;i<8;i++){
        var Date1=new Date(year,month,myDay-i)
        var year1 =Date1.getFullYear()
        var month1=Date1.getMonth()+1
        var day1=Date1.getDate();
        month1=parseInt(month1)<10?"0"+month1:month1
        day1=parseInt(day1)<10?"0"+day1:day1
        arr.push(day1+'日');
    }
    return arr.reverse();
}

//获取最后的三条折线数据
function getThreeLine(){
    var _d=$.ajax({
        type: 'get',
        url: '/BigData/getThreeLine',
        dataType: 'json'
    });
    return _d;
}

//获取双柱图
function getDoubleBar(){
    var _d=$.ajax({
        type: 'get',
        url: '/BigData/getDoubleBar',
        dataType: 'json'
    });
    return _d;

}