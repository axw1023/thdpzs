
$(function () {

// 查询展示数据
//     getAllLinkData();

});

function getAllLinkData(){
    $.ajax({
        url: "/link/getAllLinkData",
        type: "get",
        async: false,
        success: function (result) {
            //更新数据
        },
    });
}