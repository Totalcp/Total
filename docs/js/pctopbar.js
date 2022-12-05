console.clear();

function pageclick(main,no) {
    localStorage.setItem('pagemain',main);
    localStorage.setItem('pagenum',no);
    console.log(pagemain+", "+pagenum);
}

let $location = $('.top-bar__menu').children('ul');

$location.mouseenter(function(){
    $('.top-bar').addClass('active');
});

$location.mouseleave(function(){
    $('.top-bar').removeClass('active');
});