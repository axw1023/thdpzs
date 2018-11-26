/**JS时间格式转换*/
Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
$(function () {

// IT页面
    getZ() ;

});

$(document).ready(function () {
    setInterval("getZ()", 60000);//6s一次
});

function zcross (zshuchu,zshuru) {

    var dom = document.getElementById("charzhe1");
    var myChart8 = echarts.init((dom));


    var ztimeData=qgetSevenDate(360,-1,zshuchu);
    var ztimeData1=qgetSevenDate(360,-1,zshuru);

    option = {
        title: {
            text: '总体应用流速趋势(MB/s)',
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
                fontSize: 15


            },
            right: '1%',
            data: [ '总接受', '总发送']
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
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

                splitLine: {
                    show: false
                },


                axisLabel: {
                    color: "#92F1FF",
                    formatter: function(param){ //2018-11-11 11:11:11

                        var min = new Date(param).format("hh:")+'00';
                        return min;
                    }
                },


                boundaryGap: false
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
                name: '总接受',
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
                data: ztimeData1


            },
            {
                symbol: 'circle',     //设定为实心点
                symbolSize: 1,   //设定实心点的大小
                name: '总发送',
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
                data: ztimeData

            }
        ]
    };

    myChart8.setOption(option);

}




function getZ() {
    $.ajax({
        type: "get",
        async: false,
        cache: false,

        url: "getZ",

        success: function (z) {
            var zshuru=[];
            var zshuchu=[];



            for(var i=0;i<z.length;i++){    //遍历data数组
                zshuru.push(z[i].allIntraffic);
                zshuchu.push(z[i].allOuttraffic);


            }







            zcross(zshuchu,zshuru);

        }

    });

}
//获取当前是天
function qgetSevenDate(num,step,data){
    var qmyDate=new Date();
    var qyear =qmyDate.getFullYear();
    var qmonth=qmyDate.getMonth();
    var qmyDay=qmyDate.getDate();
    var qmyHours =qmyDate.getHours();
    var qgetMinutes =qmyDate.getMinutes();
    var qarr=[];
    for(var i=0;i<num;i++){
        var qDate1=new Date(qyear,qmonth,qmyDay,qmyHours,qgetMinutes+(i*step));
        var qyear1 =qDate1.getFullYear();
        var qmonth1=qDate1.getMonth()+1;
        var qday1=qDate1.getDate();
        var qmyHours1 =qDate1.getHours();
        var qgetMinutes1 =qDate1.getMinutes();
        qmonth1=parseInt(qmonth1)<10?"0"+qmonth1:qmonth1;
        qday1=parseInt(qday1)<10?"0"+qday1:qday1;
        qmyHours1 =parseInt(qmyHours1)<10?"0"+qmyHours1:qmyHours1;
        qgetMinutes1 =parseInt(qgetMinutes1)<10?"0"+qgetMinutes1:qgetMinutes1;
        qarr.push([qyear1+'-'+qmonth1+'-'+qday1+' '+qmyHours1+':'+qgetMinutes1+":00",data[i]])
    }

    var qdate2=new Date(qyear,qmonth,qmyDay,qmyHours+1,qgetMinutes);
    var qyear2 =qdate2.getFullYear();
    var qmonth2=qdate2.getMonth()+1;
    var qday2=qdate2.getDate();
    var qmyHours2 =qdate2.getHours();
    var qgetMinutes2 =qdate2.getMinutes();
    var qdate3=new Date(qyear,qmonth,qmyDay,qmyHours+2,qgetMinutes);
    var qyear3 =qdate3.getFullYear();
    var qmonth3=qdate3.getMonth()+1;
    var qday3=qdate3.getDate();
    var qmyHours3 =qdate3.getHours();
    var qgetMinutes3 =qdate3.getMinutes();
    qarr=qarr.reverse();
    qarr.push([qyear2+'-'+qmonth2+'-'+qday2+' '+qmyHours2+':'+qgetMinutes2+":00",'-']);

    qarr.push([qyear3+'-'+qmonth3+'-'+qday3+' '+qmyHours3+':'+qgetMinutes3+":00",'-']);
    return qarr;
}