var dom = document.getElementById("warn");
var myChart2 = echarts.init((dom));


// var grade;warn
// var currentIndex2 = -1;
// var pieint=null;
// getNumByGrade();
option = {
    color: ["#4A31A6", "#6B3253",
        "#ffff00", "#1D9F88"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
        orient: 'vertical',
        top: 'middle',
        data: ['致命', '严重', '警告', '主要'],
        show: true,
        y:'right',
        right:'20px',

        textStyle: {
            color: '#1D9F88',
            fontSize: 16
        }

    },
    series: [

        {

            type: 'pie',
            radius: ['30%', '50%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    formatter: "{b}\r\n{c}个",
                    textStyle: {
                        fontSize: 15,
                        color: '#1D9F88'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value:335, name:'致命'},
                {value:310, name:'严重'},
                {value:234, name:'警告'},
                {value:135, name:'主要'}

            ]
        }
    ]
};
myChart2.setOption(option);

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