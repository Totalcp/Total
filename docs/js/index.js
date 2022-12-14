console.clear();

//스크롤에 따른 메인배너 변환

//스크롤 로컬테이지화
let scrollValue = localStorage.getItem('scrollmain');

function scrolling (scrollValue,slength){
    if(scrollValue >=slength){
        $('.mb').css('visibility','hidden');
        gsap.to(".pc-section", {
            y: -370
        });
    }
    else{
        $('.mb').css('visibility','visible');
        gsap.to(".pc-section", {
            y: 0
        });
    }
}

// 일반실행
scrolling(scrollValue);

// 스크롤 이벤트 감지 후 실행
$(window).scroll(function () { 
	localStorage.setItem('scrollmain',$(document).scrollTop());
    let scrollValue = localStorage.getItem('scrollmain');
    scrolling(scrollValue,50);
});