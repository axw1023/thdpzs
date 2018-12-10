var table_data ;
$(function() {
    system.init();


});

//页面初始化
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    //初始化左侧菜单

});


var system ={
    menu_init:function(){
        $.ajax({
            url : '/system/menu',
            type: 'get'
        }).then(function(data){
            var content = '';
            $.each(data,function(i,n){
                content += '<li><a href="#"><i class="fa fa-cogs nav_icon"></i>'+n.name+'<span class="nav-badge">'+n.childrenNodes.length+'</span> <span class="fa arrow"></span></a><ul class="nav nav-second-level collapse">'
                $.each(n.childrenNodes,function(j,m){
                    content+= '<li data-path="'+m.path+'" id="'+m.id+'"><a href="#">'+m.name+'</a></li>';
                });
                content += '</li></ul>';
            });
            $('#side-menu').html(content);
            $('#side-menu').metisMenu();
        });
    },
    formatTable: function(type,data){
        table_data = data;
        // $('.table').bootstrapTable('refreshOptions',null);
        //TODO 表格初始化
        $(".table").bootstrapTable({
            url: '/system/table/info/'+type,
            method : 'POST',
            cache: false,            //禁用ajax缓存
            striped: true,
            queryParams: function(param){
                param.tableName = data.tableName;
                return param;
            },
            onDblClickCell: function(field, value, row, $element){
                var idColumn = $(".table").bootstrapTable("getOptions").idField;
                var valueColumn = field;
                var name =  table_data.tableName;
                var val = $element.text();
                layer.prompt({title: '修改为', formType: 2,value: val}, function(text, index){
                   //发送请求修改数据
                   $.ajax({
                       type: "POST",
                       url: "system/update",
                       data: {
                           name :  name,
                           idCol: idColumn,
                           valueCol : valueColumn,
                           value : text
                       }
                   }).then(function(){

                   });
                    layer.close(index);

                });
            },
            singleSelect:true,        //单选checkbox
            idField:data.idColumn,
            clickToSelect: true,
            columns: data.columns
        });

    },
    event_format: function(){
        $("#side-menu").on("click","ul li",function(){
            var text = $(this).children("a").text();
            var type = $(this).attr("data-path");
            $(".title1").text(text);
            //发送ajax
            $.ajax({
                type: 'get',
                url: '/system/table/'+type
            }).then(function (_data) {
                if(_data == null||_data == ""){
                    $(".table").bootstrapTable("destroy");
                    return;
                };
                //初始化表格
                system.formatTable(type,_data);
            },function (reason) {

            });

        });
    },
    init: function(){
        system.menu_init();
        system.event_format();
    }
}