
$(function () {

// 告警统计数据查询
    getGjtj();

});

// 告警统计数据查询
function getGjtj( ) {
    $.ajax({
        url: "/IT/getGjtj",
        type: "post",
        async: false,
        data: {pointType:"0000001"},
        success: function (result) {
            //更新数据
            setGjtj(result);
        },
    });
}

//告警统计数据展示
function setGjtj(result) {
    var scaleData = [{
        'name': '工程建设',
        'value': result
    },
        {
            'name': '产权交易',
            'value': 10
        },
        {
            'name': '土地交易',
            'value': 10
        },
        {
            'name': '其他交易',
            'value': 10
        },
        {
            'name': '土地交易',
            'value': 10
        },
        {
            'name': '其他交易',
            'value': 10
        },

    ];
    var rich = {
        white: {
            color: '#ddd',
            align: 'center',
            padding: [3, 0]
        }
    };
    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    };
    var data = [];
    var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
    for (var i = 0; i < scaleData.length; i++) {
        data.push({
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    shadowBlur: 200,
                    borderColor:color[i],
                    shadowColor: color[i]
                }
            }
        }, {
            value: 2,
            name: '',
            itemStyle: placeHolderStyle
        });
    }
    var seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [100, 200],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if(params.name !== '') {
                            return params.name + '\n{white|' + '占比' + percent + '%}';
                        }else {
                            return '';
                        }
                    },
                    rich: rich
                },
                labelLine: {
                    length:30,
                    length2:100,
                    show: true,
                    color:'#00ffff'
                }
            }
        },
        data: data
    }];
    var option = {
        backgroundColor: '#04243E',
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        toolbox: {
            show: false
        },
        series: seriesObj
    }

    gjtj = echarts.init(document.getElementById(''));

    gjtj.setOption(option);


}