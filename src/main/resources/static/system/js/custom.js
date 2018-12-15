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
                    content+= '<li  class="menu_system" data-path="'+m.path+'" id="'+m.id+'"><a href="#">'+m.name+'</a></li>';
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
        $(".table").bootstrapTable({
            url: '/system/table/info/'+type,
            method : 'POST',
            cache: false,            //禁用ajax缓存
            striped: true,
            queryParams: function(param){
                param.tableName = data.tableName;
                return param;
            },
            onDblClickCell: function(field, val, row, $element){
                var idColumn = $(".table").bootstrapTable("getOptions").idField;
                var valueColumn = field;
                var name =  table_data.tableName;
                var idVal = row[idColumn];
                layer.prompt({title: '修改为', formType: 2,value: val}, function(text, index){
                   //发送请求修改数据
                   $.ajax({
                       type: "POST",
                       url: "/system/table/update",
                       data: {
                           name :  name,
                           idCol: idColumn,
                           valueCol : valueColumn,
                           idVal : idVal,
                           value : text
                       }
                   }).then(function(){
                       $(".table").bootstrapTable("refresh");
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
        $("#side-menu").on("click",".menu_system",function(){
            var text = $(this).children("a").text();
            var type = $(this).attr("data-path");
            $(".title1").text(text);
            $('.add-img').hide();
            $('.img').hide();
            $(".table").bootstrapTable("destroy");
            // 如果是欢迎页图片配置页面隐藏列表
            if(type == 301){
                $('.add-img').show();
                $('.img').show();
                system.img_format();
            }else{
                //发送ajax
                $.ajax({
                    type: 'get',
                    url: '/system/table/'+type
                }).then(function (_data) {
                    if(_data == null||_data == ""){
                        return;
                    };
                    //初始化表格
                    system.formatTable(type,_data);
                },function (reason) {

                });
            }
        });

        $(".loginout").click(function () {
            $.ajax({
                type:'get',
                url: '/login/loginout'
            }).then(function (value) {
                window.location.reload();
            })
        });

        $('.add-img').click(function(){
            //TODO 上传页面
            layer.open({
                type: 1,
                skin: 'layui-layer-rim', //加上边框
                area: ['520px', '220px'], //宽高
                content: $('.upload-img'),
                btn: ['保存','取消'],
                yes: function (index) {
                    //获取上传文件信息
                    var file = document.getElementById('file').files[0];
                    if (typeof (file) == "undefined" || file.size <= 0) {
                        layer.alert("请选择图片");
                        return;
                    }
                    var formFile = new FormData();
                    formFile.append('file',file);
                    formFile.append('name',$("#name").val());

                    $.ajax({
                        url: '/img/entity',
                        data: formFile,
                        type:'post',
                        cache: false,
                        processData: false,
                        contentType: false
                    }).then(function (data) {
                        system.img_format();
                        layer.closeAll();
                    },function(){
                        layer.msg('保存失败',{icon:2})
                    });
                }
            });
        });
    },
    img_format: function(){
        //加载模板列表
        $.ajax({
            type: 'get',
            url: '/img/list'
        }).then(function(_data){
            var contentStr = '';
            $.each(_data,function(i,n){
                var css = '';
                if(n.type==1){
                    css = 'choose-img'
                }
                contentStr += '<div class="col-md-6 '+css+'">';
                contentStr += '<div class="hovereffect">';
                contentStr += '<img class="img-responsive" src="'+n.path+'" alt=""><div class="overlay"><p>';
                contentStr += '<a data-id="'+n.id+'" class="img-a use" href="javascript:void(0)">应 用</a>';
                contentStr += '<a data-id="'+n.id+'" class="img-a del" href="javascript:void(0)">删 除</a>';
                contentStr += '</p></div></div></div>';
            });
            $('.img').html(contentStr);
        });

        $(".img").on('click','.use',function(){
            var id = $(this).attr("data-id");
            $.ajax({
                type: "POST",
                data: {
                    id: id
                },
                url : '/img/use'
            }).then(function () {
                layer.msg('应用成功',{
                    icon:1
                });
                system.img_format();
            });
        });

        $(".img").on('click','.del',function(){
            var id = $(this).attr("data-id");
            layer.confirm('确认删除吗',{
                btn: ['确定','取消']
            },function(){
                $.ajax({
                    type: "POST",
                    data: {
                        id: id
                    },
                    url : '/img/del'
                }).then(function () {
                    layer.msg('删除成功',{
                        icon:1
                    });
                    system.img_format();
                });
            });

        });

    },
    init: function(){
        system.menu_init();
        system.event_format();
    },
}