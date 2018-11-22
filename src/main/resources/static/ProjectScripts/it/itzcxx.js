$(function () {

// IT页面
    getNumzc() ;

});


function  getNumzc() {

    $.ajax({
        type: "get",
        url: "getNumzc",
        async: false,
        cache:false,
        success: function (data) {

            var html = "";

            html +='<tr>'
            html +=     '<td>' + data[0].num + '</td>'
            html +=     '<td>' + data[1].num + '</td>'
            html +=     '<td>' + data[2].num + '</td>'
            html += '</tr>'
            html +='<tr>'
            html +=     '<td>' + data[0].name + '</td>'
            html +=     '<td>' + data[1].name + '</td>'
            html +=     '<td>' + data[2].name + '</td>'
            html += '</tr>'
            html +='<tr>'
            html +=     '<td>' + data[3].num + '</td>'
            html +=     '<td>' + data[4].num + '</td>'
            html +=     '<td>' + data[5].num + '</td>'
            html += '</tr>'
            html +='<tr>'
            html +=     '<td>' + data[3].name + '</td>'
            html +=     '<td>' + data[4].name + '</td>'
            html +=     '<td>' + data[5].name + '</td>'
            html += '</tr>'
            html +='<tr>'
            html +=     '<td>' + data[6].num + '</td>'
            html +=     '<td>' + data[7].num + '</td>'
            html +=     '<td>' + data[8].num + '</td>'
            html += '</tr>'
            html +='<tr>'
            html +=     '<td>' + data[6].name + '</td>'
            html +=     '<td>' + data[7].name + '</td>'
            html +=     '<td>' + data[8].name + '</td>'
            html += '</tr>'
            html +='<tr>'
            html +=     '<td>' + data[9].num + '</td>'
            html +=     '<td>' + data[10].num + '</td>'
            html +=     '<td>' + data[11].num + '</td>'
            html += '</tr>'
            html +='<tr>'
            html +=     '<td>' + data[9].name + '</td>'
            html +=     '<td>' + data[10].name + '</td>'
            html +=     '<td>' + data[11].name + '</td>'
            html += '</tr>'
            $("tbody").html(html); //在html页面id=test的标签里显示html内容

        }




    });

}