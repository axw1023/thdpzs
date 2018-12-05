$.ajax({
    url:'/ai/text/list',
    type: 'GET',
    cache: false
}).then(function(data){
    var text11 = data['0101'];
    var text21 = data['0201'];
    var text22 = data['0202'];
    var text31 = data['0301'];

    $('.ai-factroy-2-1').html(text21[0]+"<br/>"+text22[0]);
    var str1 = ''
    $.each(text11,function(i,n){
        str1 += n ;
        if(i!=text11.length-1){
            str1 += '<br/>'
        }
    });
    $('.ai-factroy-1').html(str1);

    var str3 = '';
    $.each(text31,function(i,n){
         str3 += '<li><span class="cricle"></span>'+n+'</li>';
    });
    $('.ai-factroy-3-1 ul').html(str3);
});