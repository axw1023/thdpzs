
$(function () {

// IT页面
    getNumByLiu() ;

});

$(document).ready(function () {
    setInterval("getNumByLiu()", 60000);//6s一次
});

function cross (shijian,shuchu,shuru) {

    var dom = document.getElementById("charzhe");
    var myChart1 = echarts.init((dom));

//背景特效
    window.onload = function () {

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
    }
  var timeData=getSevenDate(360,-1,shuchu);
    var timeData1=getSevenDate(360,-1,shuru);
    console.log(timeData);
    option = {
        title: {
            text: '出口流速趋势(MB/s)',
            textStyle: {
                color: "#92F1FF"

            },
            left:'3%'

        },
        color: [ '#6049D3', '#08E3A1'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#071424'
                }
            }
        },
        legend: {
            symbol: 'diamond',     //设定为实心点
            // itemWidth: 6,   // 设置图例图形的宽
            // itemHeight: 20,  // 设置图例图形的高
            textStyle: {
                color: '#92F1FF',
                fontSize: 20


            },
            right: '1%',
            data: [ '接受', '发送']
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'time',
               splitNumber: 8,
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        // 设置x轴颜色
                        color: 'rgba(1,1,1,0)'
                    }
                },

                axisLabel: {
                    color: "#92F1FF", //刻度线标签颜色,
                    formatter: function(param){ //2018-11-11 11:11:11

                        var min = new Date(param).format("hh:")+'00';
                        return min;
                    }
                },

                splitLine: {
                    show: false
                },



                boundaryGap: false,
            }
        ],


        yAxis: [
            {

                axisLabel: {
                    color: "#92F1FF" //刻度线标签颜色
                },
                axisLine: {
                    lineStyle: {
                        // 设置x轴颜色
                        color: 'rgba(1,1,1,0)'
                    }
                },
                splitLine: {show: false}//去除网格线
                // show: false//隐藏y轴
            }

        ],
        series: [

            {
                symbol: 'circle',     //设定为实心点
                symbolSize: 8,   //设定实心点的大小
                name: '接受',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,

                itemStyle: {
                    normal: {
                        color: '#0ABD8E',
                        lineStyle: {

                            color: '#0ABD8E'
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(8,227,161,0.45)'

                        }, {
                            offset: 0.45,
                            color: 'rgba(8,227,161,0.30)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(8,227,161,0.00)'
                            }])
                    }

                },
                data: timeData1


            },
            {
                symbol: 'circle',     //设定为实心点
                symbolSize: 1,   //设定实心点的大小
                name: '发送',
                type: 'line',

                itemStyle: {
                    normal: {
                        color: '#2BA1E7',
                        lineStyle: {

                            color: '#2BA1E7'
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(43,161,231,0.45)'

                        }, {
                            offset: 0.45,
                            color: 'rgba(43,161,231,0.30)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(43,161,231,0.00)'
                            }])
                    }
                },
                data: timeData

            }
        ]
    };

    myChart1.setOption(option);

}




function getNumByLiu() {
    $.ajax({
        type: "get",
        async: false,
        cache: false,

        url: "getNumByLiu",

        success: function (LIU) {
           var shuru=[];
           var shuchu=[];
           var shijian=[];


            for(var i=0;i<LIU.length;i++){    //遍历data数组
                 shuru.push(LIU[i].intraffic);
                shuchu.push(LIU[i].outtraffic);


            }







            cross(shijian,shuchu,shuru);

        }

    });

}

//获取当前是天
function getSevenDate(num,step,data){
    var myDate=new Date()
    var year =myDate.getFullYear()
    var month=myDate.getMonth()
    var myDay=myDate.getDate();
    var myHours =myDate.getHours();
    var getMinutes =myDate.getMinutes()
    var arr=[];
    for(var i=0;i<num;i++){
        var Date1=new Date(year,month,myDay,myHours,getMinutes+(i*step))
        var year1 =Date1.getFullYear()
        var month1=Date1.getMonth()+1
        var day1=Date1.getDate();
        var myHours1 =Date1.getHours();
        var getMinutes1 =Date1.getMinutes()
        month1=parseInt(month1)<10?"0"+month1:month1
        day1=parseInt(day1)<10?"0"+day1:day1
        myHours1 =parseInt(myHours1)<10?"0"+myHours1:myHours1;
        getMinutes1 =parseInt(getMinutes1)<10?"0"+getMinutes1:getMinutes1;
        arr.push([year1+'-'+month1+'-'+day1+' '+myHours1+':'+getMinutes1+":00",data[i]]);
    }

    var date2=new Date(year,month,myDay,myHours+1,getMinutes);
    var year2 =date2.getFullYear()
    var month2=date2.getMonth()+1
    var day2=date2.getDate();
    var myHours2 =date2.getHours();
    var getMinutes2 =date2.getMinutes()
    var date3=new Date(year,month,myDay,myHours+2,getMinutes);
    var year3 =date3.getFullYear()
    var month3=date3.getMonth()+1
    var day3=date3.getDate();
    var myHours3 =date3.getHours();
    var getMinutes3 =date3.getMinutes()
     arr=arr.reverse();
    arr.push([year2+'-'+month2+'-'+day2+' '+myHours2+':'+getMinutes2+":00",'0']);

    arr.push([year3+'-'+month3+'-'+day3+' '+myHours3+':'+getMinutes3+":00",'0']);
    return arr;
}