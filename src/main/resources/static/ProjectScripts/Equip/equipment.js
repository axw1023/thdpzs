//页面加载函数
$(function(){
    equpEcharts.init();
    dataFormat.init();


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
});
var numBar = echarts.init(document.getElementById('equipNum'));
var warningPie = echarts.init(document.getElementById('warning'));
var defectLevelPie = echarts.init(document.getElementById('defectLevel'));


var dataFormat = {
    _equip_num_init: function(){
        $.ajax({
            url: '/equip/num/list',
            type: 'GET',
            caches : false
        }).then(function(data){
            var contentStr = '';
            $.each(data,function(i,n){
                contentStr +='<div class="left-content-1-title lc'+(i+1)+'">';
                contentStr +='<label>'+n.equipTypeName+'</label>';
                contentStr +='<div>'+n.equipNum+'</div> </div>';
            });
            $('.left-content-1').html(contentStr);
        });
    },
    _poll_table_format: function(){
        $.ajax({
            url: '/equip/inspect/sta/list',
            cache: false,
            type: 'GET'
        }).then(function(data){
            var contentStr = '';
            $.each(data,function(i,n){
                var clazz = 'low yello-low';
                if(n.inspectPercent==100){
                    clazz = 'low green-low'
                }
                contentStr += '<tr><td class="td1">'+n.inspectAreaName+'</td>';
                if(!n.inspectNum||n.inspectNum==0)contentStr += '<td></td>'
                contentStr += '<td class="td3">'+n.inspectNum+'</td>';
                contentStr += '<td class="td4"> <span style="width: '+7*n.inspectPercent+'px;" class="'+clazz+'"></span> '+n.inspectPercent+'%</td></tr>';
            });
            $('#pollContent').html(contentStr);
        });
    },
    _job_recode_init: function(){
        $.ajax({
            url: '/equip/job/record/list',
            type: 'get',
            cache: false
        }).then(function(data){
            var contentStr = '';
            $.each(data,function(i,n){
                contentStr += '<div class="center8 c8-'+(i+1)+'">';
                contentStr += '<label>'+n.jobRecordName+'</label>';
                contentStr += '<div>'+n.jobRecordNum+'</div> </div>';
            });
            $('.center8-list').html(contentStr);
        });
    },
    _waste_init: function(){
        $.ajax({
            url: '/equip/waste/list',
            type: 'GET',
            cache: false
        }).then(function(data){
            var waste1 = '';
            var waste2 = '';
            var wasteArr1 = $.map(data,function(n){
                if(n.wasteTypeId == 'type1'){
                    return n;
                }
            });

            var wasteArr2 = $.map(data,function(n){
                if(n.wasteTypeId == 'type2'){
                    return n;
                }
            });

            var h1 = 246/(wasteArr1.length);
            var h2 = 246/(wasteArr2.length);

            $.each(wasteArr1,function(i,n){
                waste1 += '<tr style="height: '+h1+'px;">';
                waste1 += '<td>'+n.wasteName+'</td>';
                if(!n.rtConcentration||n.rtConcentration==0)waste1 += '<td></td>'
                else  waste1 += '<td>'+n.rtConcentration+'</td>';
                waste1 += '<td> ≤ '+n.controlRates+'</td>';
                waste1 += '</tr>';
            });
            $("#wasteContent1").html(waste1);

            $.each(wasteArr2,function(i,n){
                waste2 += '<tr  style="height: '+h2+'px;">';
                waste2 += '<td>'+n.wasteName+'</td>';
               if(n.so2Concentration<n.so2Standard||n.so2Standard==null||n.so2Standard=='') waste2 += '<td style="color: greenyellow;">'+n.so2Concentration+'</td>';
               else waste2 += '<td style="color: red;">'+n.so2Concentration+'</td>';
                if(n.so2Standard==null ||n.so2Standard == "")waste2+="<td></td>"
                else waste2 += '<td>'+n.so2Standard+'</td>';

                if(n.noConcentration<n.noStandard||n.noStandard==null||n.noStandard=='') waste2 += '<td style="color: greenyellow;">'+n.noConcentration+'</td>';
                else waste2 += '<td style="color: red;">'+n.noConcentration+'</td>';
                if(n.noStandard==null ||n.noStandard == "")waste2+="<td></td>"
                else waste2 += '<td>'+n.noStandard+'</td>';

                if(n.ycConcentration<n.ycStandard||n.ycStandard==null||n.ycStandard=='') waste2 += '<td style="color: greenyellow;">'+n.ycConcentration+'</td>';
                else waste2 += '<td style="color: red;">'+n.ycConcentration+'</td>';
                if(n.ycStandard==null ||n.ycStandard == "")waste2+="<td></td>"
                else waste2 += '<td>'+n.ycStandard+'</td>';
                waste2+= '</tr>'
            });
            $("#wasteContent2").html(waste2);
        });
    },
    init: function(){
        dataFormat._equip_num_init();
        dataFormat._poll_table_format();
        dataFormat._job_recode_init();
        dataFormat._waste_init();
    }
}

var equpEcharts = {
    _defectLevel_init: function(){
        $.ajax({
            url: '/equip/defect/list',
            type: 'GET',
            cache: false
        }).then(function(data){
            var defectOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    data: data.legendData,
                    y: '20%',
                    itemGap: 49,
                    align:'left',
                    left: '406px',
                    itemWidth: 6,
                    itemHeight: 20 ,
                    textStyle:{
                        fontSize: 22,
                        fontFamily: 'MicrosoftYaHei',
                        fontWeight: 400,
                        color: 'rgba(104,241,252,1)',
                        lineHeight: '89px',
                        padding: [0,0,0,25]
                    },
                    formatter: function(text){
                        return  text;
                    }
                },
                color: [{
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
                },{
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
                },{
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
                }
                ],
                    series: [
                    {
                        name:'缺陷级别分析',
                        type:'pie',
                        radius: ['45%', '60%'],
                        center: ['30%','50%'],
                        avoidLabelOverlap: false,
                        label: {

                            normal: {
                                show: false,
                                position: 'center'
                            },

                            emphasis:{
                                show: true,
                                formatter: ['{a|{b}：{c}项}\n','{b|共'+data.sum+'项}'].join(''),
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
                        data:data.seriesData
                    }
                ]
            };
            defectLevelPie.setOption(defectOption);

            var currentIndex = -1;
            setInterval(function () {
                var dataLen = defectOption.series[0].data.length;
                // 取消之前高亮的图形
                defectLevelPie.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                currentIndex = (currentIndex + 1) % dataLen;
                // 高亮当前图形
                defectLevelPie.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });

            }, 1000);
        });


    },
    _warning_init: function(){
        $.ajax({
            url:'/equip/warning/pie',
            cache: false,
            type: 'GET'
        }).then(function(data){
            var warningOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    data: data.legendData,
                    y: '20%',
                    itemGap: 49,
                    align:'left',
                    left: '406px',
                    itemWidth: 6,
                    itemHeight: 20 ,
                    textStyle:{
                        fontSize: 22,
                        fontFamily: 'MicrosoftYaHei',
                        fontWeight: 400,
                        color: 'rgba(104,241,252,1)',
                        lineHeight: '89px',
                        padding: [0,0,0,25]
                    },
                    formatter: function(text){
                        return  text;
                    }
                },
                color: [{
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
                },{
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
                },{
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
                }
                ],
                series: [
                    {
                        name:'设备年限分析',
                        type:'pie',
                        radius: ['45%', '60%'],
                        center: ['30%','50%'],
                        avoidLabelOverlap: false,
                        label: {

                            normal: {
                                show: false,
                                position: 'center',

                            },
                            emphasis:{
                                show: true,
                                formatter: ['{a|{b}：{c}台}\n','{b|共'+data.sum+'台}'].join(''),
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
                        data: data.seriesData
                    }
                ]
            };
            warningPie.setOption(warningOption);

            var currentIndex = -1;
            setInterval(function () {
                var dataLen = warningOption.series[0].data.length;
                // 取消之前高亮的图形
                warningPie.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                currentIndex = (currentIndex + 1) % dataLen;
                // 高亮当前图形
                warningPie.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                // 显示 tooltip 显示悬停提示框
                // youkezhengjianleixing_chart.dispatchAction({
                //     type: 'showTip',
                //     seriesIndex: 0,
                //     dataIndex: currentIndex
                // });
            }, 1000);
        });


    },
    _num_init: function(){
        $.ajax({
            url: '/equip/area/list',
            cache: false,
            type: 'GET'
        }).then(function(data){
            var numOption = {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid:{
                    top: '10%',
                    bottom: '30%',
                    right: '5%',
                },
                xAxis : [
                    {
                        type : 'category',
                        data : data.xlineList,
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        axisLabel: {
                            rotate: -45,
                            color: 'RGBA(159, 204, 255, 1)',
                            fontSize: 20,
                            fontFamily: 'MicrosoftYaHei',
                            fontWeight:400
                        }
                    }

                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show:false
                        },
                        splitLine: {
                            show:false
                        },
                        axisLabel: {
                            color: 'RGBA(159, 204, 255, 1)',
                            fontSize: 20,
                            fontFamily: 'MicrosoftYaHei',
                            fontWeight:400
                        }
                    }
                ],
                series : [
                    {
                        name:'装置区域数量',
                        type:'bar',
                        barWidth: '60%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#3f9beb'},
                                        {offset: 0.5, color: '#22517e'},
                                        {offset: 1, color: '#10243d'}
                                    ]
                                )
                            },
                            emphasis: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#419ff1'},
                                        {offset: 0.7, color: '#419ff1'},
                                        {offset: 1, color: '#419ff1'}
                                    ]
                                )
                            }
                        },
                        data: data.ylineList
                    }
                ]
            };
            numBar.setOption(numOption);
        });



    },
    init: function(){
        equpEcharts._num_init();
        equpEcharts._defectLevel_init();
        equpEcharts._warning_init();
    }
}

