console.clear();

//스크롤에 따른 헤더 변환
$(window).scroll(function () { 
	let scrollValue = $(document).scrollTop(); 
    if(scrollValue>=50){
        $('.pctopbar').addClass('bgb-bd-w');
    }
    else{
        $('.pctopbar').removeClass('bgb-bd-w');
    }
});

// 탑바 메뉴출력 조절
let $this = $('.triggerbar');
$this.children().mouseenter(function (){
    $('.pctopbar').addClass('active'); 
});

$this.children().mouseleave(function (){
    $('.pctopbar').removeClass('active'); 
});