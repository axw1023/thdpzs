

$(function () {


    getCbgc();// 成本构成
    
    //上月能耗指标
    getSynhzb();
    //销售情况
    getXsqk();
    //海科装饰
    getHkzssl();
    //原料来源
    getYlly();
    //库存
    getKc();
    //计划执行率
    getJhzxl();
    //erp
    getErp();
});

function getCbgc() {
    $.ajax({
        type: "post",
        url: "/ERPandBI/cbgc",
        async: false,
        cache:false,
        success: function (data) {
            //debugger
            /*for(i=0;i<data.length;i++){
                var a=data[i]
                alert(a);
            }
           var jsonData = JSON.parse(data);
            for (x in jsonData) {  //遍历JSON格式的数组取元素, x代表下标

                for (y in jsonData[x].data) {
                    alert(jsonData[x].occurTime[y]) ;//依次获取 
                    alert(jsonData[x].data[y]);
                }
            }*/
            setCbgc(data);

            //setCbgc();
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });

}

function getErp() {
    $.ajax({
        type: "post",
        url: "/ERPandBI/erp",
        async: false,
        success: function (data) {
            //更新数据
            $("#qy2").val(data[0].num);
            $("#qy3").val(data[0].name);
            $("#cy2").val(data[1].num);
            $("#cy3").val(data[1].name);
            $("#yhq2").val(data[2].num);
            $("#yhq3").val(data[2].name);
            $("#bw2").val(data[3].num);
            $("#bw3").val(data[3].name);
             $("#bx2").val(data[4].num);
             $("#bx3").val(data[4].name);
             $("#syj2").val(data[5].num);
             $("#syj3").val(data[5].name);
             
        },   
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}

function getHkzssl() {
    $.ajax({
        type: "post",
        url: "/ERPandBI/hkzssl",
        async: false,
        success: function (data) {
            var name=[];
            var num=[];
            var num1=[];
            for(i=0;i<data.length;i++){
                name.push(data[i].name)
                num.push(data[i].num)
                num1.push(data[i].mou)
            }
            //更新数据
            setHkzssl(name,num,num1);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}

function getJhzxl() {
    $.ajax({
        type: "post",
        url: "/ERPandBI/jhzxl",
        async: false,
        success: function (data) {
            var name=[];
            var num=[];
            var num1=[];
            for(i=0;i<data.length;i++){
                name.push(data[i].name)
                num.push(data[i].num)
                num1.push(data[i].num1)
            }
            
            //更新数据
            setJhzxl(num1,num,name);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}

function getKc() {
    $.ajax({
        type: "post",
        url: "/ERPandBI/kc",
        async: false,
        success: function (data) {
            var name=[];
            var num=[];
            var num1=[];
            for(i=0;i<data.length;i++){
                name.push(data[i].name)
                num.push(data[i].num)
                num1.push(data[i].num1)
            }
            //更新数据
            setKc(num1,num,name);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}

function getSynhzb() {
    $.ajax({
        type: "post",
        url: "/ERPandBI/synhzb",
        async: false,
        success: function (data) {
            //更新数据
            setSynhzb(data);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}

function getXsqk() {
    $.ajax({
        type: "post",
        url: "/ERPandBI/xsqk",
        async: false,
        success: function (data) {
            //更新数据
            setXsqk(data);
        },
        error: function (data) {
            alert("数据获取失败！")
        }
    });
}

function getYlly() {
    $.ajax({
        type: "post",
        url: "/ERPandBI/ylly",
        async: false,
        success: function (data) {
            var name=[];
            var num=[];
            var num1=[];
            for(i=0;i<data.length;i++){
                name.push(data[i].name)
                num.push(data[i].num)
                num1.push(data[i].num1)
            }
            //更新数据
            setYlly(num1,num,name)
        },
    });
}

function setCbgc(data) {
    var myChart2 = echarts.init(document.getElementById('cbgc'));
    var currentIndex2= -1;
    var pieint=null;
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
            formatter :'    {name}',
            data: data.name,
            textStyle:{
                
                color:'#92F1FF',
                fontSize:20
            }
        },
        //graphic是原生图形元素组件,可以支持的图形元素包括image, text, circle等等 除了下面的属性之外,还有onclick: function () {...}属性,具体的可参照echarts文档

        graphic:{
            type: 'text',
            // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
            
            // bottom: '10%',
            left: '660', // 相对父元素居中
            top: '150',  // 相对父元素居中
            //可设置颜色 字体等等
           /* style: {
                fill: '#92F1FF',  //text颜色
                text: '',
                font: '33px Microsoft YaHei'
            }*/
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                
                center:['310','46.5%'],//圆形居中
                type:'pie',
                radius: ['50%', '65%'],
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
                    emphasis: {
                        show: true,
                        formatter: "共{a|{c}}吨",
                        rich:{
                            a:{
                                fontSize: 30
                            }
                        },
                        textStyle: {
                            fontSize: 15,
                            color: '#92F1FF'
                        }
                    },
                },
                labelLine: {
                    show:false
                },
               /* data:[{value:data[0].production,name:'生产'}]*/
                data:[
                    {value:data[0].num, name:data[0].name,itemStyle:{ color: {
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
                    {value:data[1].num, name:data[1].name,itemStyle:{ color: {
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
                    {value:data[2].num, name:data[2].name,itemStyle:{ color: {
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

function setSynhzb(data) {
    var myChart3 = echarts.init(document.getElementById('synhzb'));
    var currentIndex2= -1;
    var pieint=null;
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
            formatter :'    {name}',
            data: data.name,
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
           /* style: {
                fill: '#92F1FF',  //text颜色
                text: '共380项',
                font: '33px Microsoft YaHei'
            }*/
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                center:['310','46.5%'],//圆形居中
                type:'pie',
                radius: ['50%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                    emphasis: {
                        show: true,
                        formatter: "共{a|{c}}吨",
                        rich:{
                            a:{
                                fontSize: 30
                            }
                        },
                        textStyle: {
                            fontSize: 15,
                            color: '#92F1FF'
                        }
                    },
                    
                },
                labelLine: {
                    show:false
                },
                data:[
                    {value: data[0].num, name:data[0].name,itemStyle:{ color: {
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
                    {value:data[1].num, name:data[1].name,itemStyle:{ color: {
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
                    {value:data[2].num, name:data[2].name,itemStyle:{ color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#AA625A' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#91725F' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }}
                    },
                ]
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option);
    pieint=setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart3.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex2
        });
        currentIndex2 = (currentIndex2 + 1) % dataLen;
        // 高亮当前图形
        myChart3.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex2
        });

    }, 3000);
/*
    pieint1=setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart3.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex1
        });
        currentIndex1 = (currentIndex2 + 1) % dataLen;
        // 高亮当前图形
        myChart3.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex1
        });

    }, 3000);*/
}

function setXsqk(data) {
    var myChart4 = echarts.init(document.getElementById('xsqk'));
    var currentIndex2= -1;
    var pieint=null;
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
            formatter :'    {name}',
            data:data.name,
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
        },


        //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
        //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
        //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
        series: [
            {
                center:['310','46.5%'],//圆形居中
                type:'pie',
                radius: ['50%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                    emphasis: {
                        show: true,
                        formatter: "共{a|{c}}吨",
                        rich:{
                            a:{
                                fontSize: 30
                            }
                        },
                        textStyle: {
                            fontSize: 15,
                            color: '#92F1FF'
                        }
                    },
                },
                labelLine: {
                    show:false
                },
                data:[
                    {value: data[0].num, name:data[0].name,itemStyle:{ color: {
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
                    {value:data[1].num, name:data[1].name,itemStyle:{ color: {
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
                    {value:data[2].num, name:data[2].name,itemStyle:{ color: {
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
                    {value:data[3].num, name:data[3].name,itemStyle:{ color: {
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
                    {value:data[4].num, name:data[4].name,itemStyle:{ color: {
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
                    {value:data[5].num, name:data[5].name,itemStyle:{ color: {
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
    myChart4.setOption(option);
    pieint=setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart4.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex2
        });
        currentIndex2 = (currentIndex2 + 1) % dataLen;
        // 高亮当前图形
        myChart4.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex2
        });

    }, 3000);
}

function setHkzssl(name,num,num1) {
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
            data:['计划收率','实际收率'],
            /*left:,*/
            right: '4%',
            top:'5%',
            bottom: '80%',
            textStyle:{
                color:'#92F1FF',
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'15%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data:name,
               // data : [data[0].name,data[1].name,data[2].name,data[3].name,data[4].name,data[5].name,data[6].name],
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
           /* {
                name:'目标',
                type:'bar',
                barWidth : 8,
                data:[data[0].num,data[1].num,data[2].num,data[3].num,data[4].num,data[5].num,data[6].num],
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

            },*/
            {
                name:'计划收率',
                type:'bar',
                barWidth: 12, //柱子宽度
                barGap: 1, //柱子之间间距
                data:num,
                //data:[data[0].day,data[1].day,data[2].day,data[3].day,data[4].day,data[5].day,data[6].day],
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
                name:'实际收率',
                type:'bar',
                barWidth: 12, //柱子宽度
                barGap: 1, //柱子之间间距
                data:num1,
                //  data:[data[0].mou,data[1].mou,data[2].mou,data[3].mou,data[4].mou,data[5].mou,data[6].mou],
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

function setYlly(num1,num,name) {
    var myChart = echarts.init(document.getElementById('ylly'));

    // 指定图表的配置项和数据
 /*   var  option = {
   /!*     title: {
            text: '原料来源',
            x:'center',
            textStyle: {
                //文字颜色
                color: '#208198',
            },
        },*!/
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
            data: [data[0].name,data[1].name,data[2].name,data[3].name,data[4].name,data[5].name],
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
                data: [data[0].name,data[1].name,data[2].name,data[3].name,data[4].name,data[5].name],
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
            
            data: [data[0].num,data[1].num,data[2].num,data[3].num,data[4].num,data[5].num],
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
               /!* name: '所占比例',*!/
                type:'line',
                symbol:'star',//拐点样式
                symbolSize: 8,//拐点大小
                /!*yAxisIndex: 1,
                xAxisIndex: 1,*!/
                data: [data[0].num1,data[1].num1,data[2].num1,data[3].num1,data[4].num1,data[5].num1],
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
                                color: 'rgba(255, 165,0,0.6)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(255, 165,0,0)' // 100% 处的颜色
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
    };*/
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['上月','本月'],
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
            //data: [data[0].name,data[1].name,data[2].name,data[3].name,data[4].name,data[5].name],

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
                name: '上月',
                type: 'bar',
                data:num,
                // data: [data[0].num,data[1].num,data[2].num,data[3].num,data[4].num,data[5].num],
                barWidth: 25, //柱子宽度
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
                name: '本月',
                type: 'bar',
                data:num1,
                //data: [data[0].num1,data[1].num1,data[2].num1,data[3].num1,data[4].num1,data[5].num1],
                barWidth: 25,
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
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}

function setKc(num1,num,name) {
    var myChart = echarts.init(document.getElementById('kc'));

    // 指定图表的配置项和数据
/*    var  option = {
    /!*    title: {
            text: '库存',
            x:'center',
            textStyle: {
                //文字颜色
                color: '#208198',
            },
        },*!/

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
            data: [data[0].name,data[1].name,data[2].name,data[3].name,data[4].name,data[5].name],
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
                data: [data[0].name,data[1].name,data[2].name,data[3].name,data[4].name,data[5].name],
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

            data: [data[0].num,data[1].num,data[2].num,data[3].num,data[4].num,data[5].num],
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
                /!* name: '所占比例',*!/
                type:'line',
                symbol:'star',//拐点样式
                symbolSize: 8,//拐点大小
                /!*yAxisIndex: 1,
                xAxisIndex: 1,*!/
                data: [data[0].num1,data[1].num1,data[2].num1,data[3].num1,data[4].num1,data[5].num1],
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
                                color: 'rgba(0,0,255,0.6)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(0,0,255,0)' // 100% 处的颜色
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
    };*/
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['上月','本月'],
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
            //data: [data[0].name,data[1].name,data[2].name,data[3].name,data[4].name,data[5].name],

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
                name: '上月',
                type: 'bar',
                data:num,
                // data: [data[0].num,data[1].num,data[2].num,data[3].num,data[4].num,data[5].num],
                barWidth: 25, //柱子宽度
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
                name: '本月',
                type: 'bar',
                data:num1,
                //data: [data[0].num1,data[1].num1,data[2].num1,data[3].num1,data[4].num1,data[5].num1],
                barWidth: 25,
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

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}

function setJhzxl(num1,num,name) {
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
            data:['计划执行','实际执行'],
            textStyle: {
                color: '#51e5fc'
            },
            
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : name,

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
                name:'计划执行',
                type:'line',
                areaStyle: {
                    normal: {type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(256,169,46,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,0,255,0.2)'
                        }], false)
                    }
                },
                smooth:false,
                itemStyle: {
                    normal: {areaStyle: {type: 'default'},
                        color:'#FFA92E',
                        lineStyle:{
                            color:'#FFA92E'
                        }
                    }
                },
                data:num,
            },
            {
                name:'实际执行',
                type:'line',
                areaStyle: {
                    normal: {
                        type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(48, 255, 28,0.5)'
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
                data:num1,
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}
