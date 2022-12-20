console.clear();

// 페이지 전환설정
let pagemain;
let pagenum;

function init_click(){
    console.log('init_click');
    $('[class^=ex__]').css('display','none');
    $('.subm__exp__'+pagenum).removeClass('active');
}

function set_click(){
    console.log('set_click');
    
    pagemain=localStorage.getItem('pagemain');
    pagenum=localStorage.getItem('pagenum');

    console.log(pagemain);

    init_click();

    $('.ex__'+pagemain).css('display','flex');

    $('[class^=subm__exp__]').css('opacity','0.5');
    $('.subm__exp__'+pagenum).css('opacity','1');
    $('.subm__exp__'+pagenum).addClass('active');

    $('[class^=exp__]').css('display','none');
    $('.exp__'+pagenum).css('display','flex');
}

$('[class^=subm__exp__]').mouseenter(function(){
    console.log('page_click');

    let $this = $(this);
    pagenum = $this.attr('value');
    console.log(pagenum);

    init_click();

    $('.ex__'+pagemain).css('display','flex');

    $('[class^=subm__exp__]').css('opacity','0.5');
    $this.css('opacity','1');
    $('[class^=subm__exp__]').removeClass('active');
    $('.subm__exp__'+pagenum).addClass('active');

    $('[class^=exp__]').css('display','none');
    $('.exp__'+pagenum).css('display','flex');

    localStorage.setItem('pagenum',pagenum);
});   

set_click();