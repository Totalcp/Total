console.clear();

let swiper;
// 스와이퍼
function Swiper__init() {
	swiper = new Swiper('.swiper', {
		slidesPerView: 1, // 한 페이지당 보여줄 개수
		spaceBetween: 0, // 슬라이더 간의 간격
		loop: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
        pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			//'bullets' | 'fraction' | 'progressbar' | 'custom'
		}
	});	
}

Swiper__init();

swiper.on('transitionEnd', function() {
	localStorage.setItem('pagemain',swiper.realIndex+1);
	localStorage.setItem('pagenum',1);
	set_click();
});

$(document).ready(function(){
	localStorage.setItem('pagemain',swiper.realIndex+1);
	localStorage.setItem('pagenum',1);
	set_click();
  }); 
  

//클릭차단
let $swiperl = $('.swiper-button-prev');
let $swiperr = $('.swiper-button-next');
let $swiperpg = $('.swiper-pagination');

// $swiperl.hide();
// $swiperr.hide();
// $swiperpg.hide();



