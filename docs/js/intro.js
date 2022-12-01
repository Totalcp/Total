console.clear();

let anchor=localStorage.getItem('pagenum');

function init_click(anchor){
    console.log('init_click');
    $('.ex__'+anchor).css('display','none');
    $('.pd__'+anchor).css('display','none');
    $('.subm__'+anchor).css('backgroundColor','');
    $('.subm__'+anchor).css('color','');
    $('.subm__'+anchor).css('fontWeight','');
}

function submclick(anchor){
    $('.subm__'+anchor).click(function() {
        console.log('submclick');
        //초기화
        init_click(1); 
        init_click(2);
        // 항목 전환
        $('.ex__'+anchor).css('display','flex');
        $('.pd__'+anchor).css('display','flex');
        $('.subm__'+anchor).css('backgroundColor','white');
        $('.subm__'+anchor).css('color','black');
        $('.subm__'+anchor).css('fontWeight','bold');
    });
}

function clicked(anchor){
    console.log('clicked');
    //초기화
    init_click(1); 
    init_click(2);
    // 항목 전환
    $('.ex__'+anchor).css('display','flex');
    $('.pd__'+anchor).css('display','flex');
    $('.subm__'+anchor).css('backgroundColor','white');
    $('.subm__'+anchor).css('color','black');
    $('.subm__'+anchor).css('fontWeight','bold');
}

// 특정링크의 섹션만 보이게, 클릭된거 표현
if(anchor==undefined){
    clicked(1);   
}
else {
    clicked(anchor);   
}

// 클릭한거만 보이게
submclick(1);   
submclick(2);

//스크롤에 따른 헤더 변환
$(window).scroll(function () { 
	let scrollValue = $(document).scrollTop(); 
    if(scrollValue>200){
        $('.pctopbar').addClass('bgb-bd-w');
        $('.mb').css('visibility','hidden');
    }
    else{
        $('.pctopbar').removeClass('bgb-bd-w');
        $('.mb').css('visibility','visible');
    }
});