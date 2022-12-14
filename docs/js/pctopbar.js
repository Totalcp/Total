console.clear();

//페이지 클릭에 따른 로컬스토레지 변환
function pageclick(main,no) {
    localStorage.setItem('pagemain',main);
    localStorage.setItem('pagenum',no);
    console.log(pagemain+", "+pagenum);
}
//페이지 클릭에 따른 로컬스토레지 변환 fin

//마우스 엔터에 따른 변환
let $location = $('.top-bar__menu').children('ul');

$location.mouseenter(function(){
    $('.top-bar').addClass('active');
});

$location.mouseleave(function(){
    $('.top-bar').removeClass('active');
});
//마우스 엔터에 따른 변환 fin

//스크롤에 따른 메인배너 변환
let scrollM = localStorage.getItem('scrollmain');

function scrollTop (scrollM){
    if(scrollM >=50){
        $('.top-bar').addClass('active');
    }
    else{
        $('.top-bar').removeClass('active');
    }
}

scrollTop(scrollM);

$(window).scroll(function () { 
	localStorage.setItem('scrollmain',$(document).scrollTop());
    let scrollM = localStorage.getItem('scrollmain');
    scrollTop(scrollM);
});
//스크롤에 따른 메인배너 변환 fin

// 모바일 메뉴바 팝업
let $pannelOpen = $('.pannelbtn-open');
let $pannelClose = $('.pannelbtn-close');
let $pannel = $('.pannel');

$($pannelOpen).click(function(){
    console.log("touch");
    $pannel.addClass('active');
});

$($pannelClose).click(function(){
    console.log("touch");
    $pannel.removeClass('active');
});
// 모바일 메뉴바 팝업 fin

//아코디언 메뉴 애니메이션
$('.pannel__acodian').find('.body').hide();

let $acodian_m = $('.pannel__acodian').find('a');

$acodian_m.click(function(){
    $this = $(this);
    if($this.hasClass('minus')) {
        $this.closest('li').find('a').removeClass('minus');
        $this.closest('li').find('.body').stop().slideUp(500);
    }
    else{
        $this.closest('li').siblings().find('a').removeClass('minus');
        $this.closest('li').siblings().find('.body').slideUp(500);
        $this.addClass('minus');
        $this.closest('li').children('.body').stop().slideDown(500);
    }
});
// 아코디언 메뉴 설정 fin