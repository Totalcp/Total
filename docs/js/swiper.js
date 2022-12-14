console.clear();

// 스와이퍼
function Swipter__init() {
	let swiper = new Swiper('.swiper', {
		slidesPerView: 1, // 한 페이지당 보여줄 개수
		spaceBetween: 0, // 슬라이더 간의 간격
		// loop: true,

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

Swipter__init();

//클릭차단
let $swiperl = $('.swiper-button-prev');
let $swiperr = $('.swiper-button-next');
let $swiperpg = $('.swiper-pagination');

$swiperl.hide();
$swiperr.hide();
$swiperpg.hide();



