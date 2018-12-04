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
    init: function(){
        system.menu_init();
    }
}