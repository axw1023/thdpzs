//页面加载函数
$(function(){
    equpEcharts.init();
    dataFormat.init();
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
                contentStr += '<td class="td2">'+n.areaType+'</td>';
                contentStr += '<td class="td3">'+n.inspectNum+'</td>';
                contentStr += '<td class="td4"> <span style="width: '+4*n.inspectPercent+'px;" class="'+clazz+'"></span> '+n.inspectPercent+'%</td></tr>';
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

            var h1 = 278/(wasteArr1.length);
            var h2 = 278/(wasteArr2.length);

            $.each(wasteArr1,function(i,n){
                waste1 += '<tr style="height: '+h1+'px;">';
                waste1 += '<td>'+n.wasteName+'</td>';
                waste1 += '<td>'+n.rtConcentration+'</td>';
                waste1 += '<td>'+n.standardValue+'</td>';
                waste1 += '<td>'+n.dischargeNum+'</td>';
                waste1 += '<td>'+n.controlRates+'%</td></tr>';
            });
            $("#wasteContent1").html(waste1);

            $.each(wasteArr2,function(i,n){
                waste2 += '<tr  style="height: '+h2+'px;">';
                waste2 += '<td>'+n.wasteName+'</td>';
                waste2 += '<td>'+n.rtConcentration+'</td>';
                waste2 += '<td>'+n.standardValue+'</td>';
                waste2 += '<td>'+n.dischargeNum+'</td>';
                waste2 += '<td>'+n.controlRates+'%</td></tr>';
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
                color:['#1EAC94','#2DA4C9','#A37F66','#5437BA'],
                series: [
                    {
                        name:'缺陷级别分析',
                        type:'pie',
                        radius: ['45%', '60%'],
                        center: ['30%','50%'],
                        avoidLabelOverlap: false,
                        label: {

                            normal: {
                                show: true,
                                position: 'center',
                                formatter: ['{a|共}','{b|'+data.sum+'}','{a|项}'].join(''),
                                rich: {
                                    a:{
                                        fontSize: 25,
                                        color: '#3bc5ff'
                                    },
                                    b: {
                                        fontSize: 41,
                                        color: '#3bc5ff'
                                    }
                                }
                            },

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
                color:['#1EAC94','#A37F66','#2DA4C9','#5437BA'],
                series: [
                    {
                        name:'预警情况分析',
                        type:'pie',
                        radius: ['45%', '60%'],
                        center: ['30%','50%'],
                        avoidLabelOverlap: false,
                        label: {

                            normal: {
                                show: true,
                                position: 'center',
                                formatter: ['{a|共}','{b|'+data.sum+'}','{a|项}'].join(''),
                                rich: {
                                    a:{
                                        fontSize: 25,
                                        color: '#3bc5ff'
                                    },
                                    b: {
                                        fontSize: 41,
                                        color: '#3bc5ff'
                                    }
                                }
                            },

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