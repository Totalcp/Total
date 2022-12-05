console.clear();

function pageclick(no) {
    localStorage.setItem('pagenum',no);
    console.log(pagenum);
}

let $location = $('.top-bar__menu').children('ul');

$location.mouseenter(function(){
    $('.top-bar').addClass('active');
});

$location.mouseleave(function(){
    $('.top-bar').removeClass('active');
});