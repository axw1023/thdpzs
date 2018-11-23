
$(function () {

// 查询展示数据
    getAllLinkData();

});

function getAllLinkData(){
        $.ajax({
            url: "/link/getAllLinkData",
            type: "get",
            async: false,
            success: function (data) {
                //更新数据
                var dgcz="";var dgczdw="";var dgczs="";
                dgcz +="<span  >"+data[0].name+"</span>";
                dgczdw +="<span >("+data[0].unit+")</span>";
                dgczs +="<span >"+data[0].value+"</span>";
                var dgcz1="";var dgczdw1="";var dgczs1="";
                dgcz1 +="<span  >"+data[1].name+"</span>";
                dgczdw1 +="<span >("+data[1].unit+")</span>";
                dgczs1 +="<span >"+data[1].value+"</span>";
                $("#sheep_transit_name").html(dgcz1); //在html页面id=test的标签里显示html内容
                $("#sheep_transit_remark").html(dgczdw1);
                $("#sheep_transit_value").html(dgczs1);
                $("#sheep_reach_name").html(dgcz); //在html页面id=test的标签里显示html内容
                $("#sheep_reach_remark").html(dgczdw);
                $("#sheep_reach_value").html(dgczs);
                
                var yy="";
                var yydw="";
                var yc="";
                var yys="";
                yy+="<span >"+data[2].type+"</span>"
                yc+="<span >"+data[2].name+"</span><br>"
                yc+="<span >"+data[3].name+"</span><br>"
                yc+="<span >"+data[4].name+"</span>"
                yys+="<span >"+data[2].value+"</span><br>"
                yys+="<span >"+data[3].value+"</span><br>"
                yys+="<span >"+data[4].value+"</span>"
                yydw+="<span >("+data[2].unit+")</span>"
                $("#factoryVolume_name").html(yy);
                $("#factoryVolume_remark").html(yydw);
                $("#factoryVolume_value_name").html(yc);
                $("#factoryVolume_value").html(yys);
                
               
                var rcdw="";
                var rcly="";
                var rcs="";
                rcdw+="<span >("+data[5].unit+")</span>"
                rcly+="<span >"+data[5].name+"</span><br>"
                rcly+="<span >"+data[6].name+"</span>"
                rcs+="<span >"+data[5].value+"</span><br>"
                rcs+="<span >"+data[6].value+"</span>"
                $("#dailyOutput_remark").html(rcdw);
                $("#dailyOutput_value1").html(rcly);
                $("#dailyOutput_value2").html(rcs);

                var rcldw="";
                var rcl="";
                var rcls="";
                rcldw+="<span >("+data[7].unit+")</span>"
                rcl+="<span >"+data[7].name+"</span><br>"
                rcl+="<span >"+data[8].name+"</span><br>"
                rcl+="<span >"+data[9].name+"</span><br>"
                rcl+="<span >"+data[10].name+"</span>"
                rcls+="<span >"+data[7].value+"</span><br>"
                rcls+="<span >"+data[8].value+"</span><br>"
                rcls+="<span >"+data[9].value+"</span><br>"
                rcls+="<span >"+data[10].value+"</span>"
                $("#chemicalDailyOutput_remark").html(rcldw);
                $("#chemicalDailyOutput_value1").html(rcl);
                $("#chemicalDailyOutput_value2").html(rcls);

                var cpy="";
                var cpydw="";
                var cpyl="";
                var cpys="";
                cpy+="<span >"+data[11].type+"</span>"
                cpydw+="<span >("+data[11].unit+")</span>"
                cpyl+="<span >"+data[11].name+"</span>"
                cpys+="<span >"+data[11].value+"</span>"
                $("#monthlyExport_name").html(cpy);
                $("#monthlyExport_remark").html(cpydw);
                $("#monthlyExport_value1").html(cpyl);
                $("#monthlyExport_value2").html(cpys);

                
                var xlqdw="";
                var xlqy="";
                var xlqs="";
               
                var xlhdw="";
                var xlhy="";
                var xlhs="";
                
                xlqdw+="<span >("+data[12].unit+")</span>"
                xlqy+="<span >"+data[12].name+"</span>"
                xlqs+="<span >"+data[12].value+"</span>"
               
                xlhdw+="<span >("+data[13].unit+")</span>"
                xlhy+="<span >"+data[13].name+"</span>"
                xlhs+="<span >"+data[13].value+"</span>"
                $("#sell_car_remark").html(xlqdw);
                $("#sell_car_value1").html(xlqy);
                $("#sell_car_value2").html(xlqs);
                $("#sell_ship_remark").html(xlhdw);
                $("#sell_ship_value1").html(xlhy);
                $("#sell_ship_value2").html(xlhs);
                
            },
    });
}