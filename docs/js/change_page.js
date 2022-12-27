console.clear();

// 페이지 전환설정
let anchor=localStorage.getItem('pagenum');

function init_click(anchor){
    console.log('init_click');

    $('.ex__'+anchor).css('display','none');
    $('.pd__'+anchor).css('display','none');
    $('.subm__'+anchor).css('backgroundColor','');
    $('.subm__'+anchor).css('color','');
    $('.subm__'+anchor).css('fontWeight','');
    $('.tb__1-'+anchor).css('display','none');
}

function submclick(anchor){
    $('.subm__'+anchor).click(function() {
        console.log('submclick');
        //초기화
        init_click(1); 
        init_click(2);
        init_click(3); 
        init_click(4);
        init_click(5);

        // 항목 전환
        $('.ex__'+anchor).css('display','flex');
        $('.pd__'+anchor).css('display','flex');
        $('.subm__'+anchor).css('backgroundColor','white');
        $('.subm__'+anchor).css('color','black');
        $('.subm__'+anchor).css('fontWeight','bold');
        $('.tb__1-'+anchor).css('display','flex');
    });
}

function clicked(anchor){
    console.log('clicked');
    //초기화
    init_click(1); 
    init_click(2);
    init_click(3); 
    init_click(4);
    init_click(5);

    // 항목 전환
    $('.ex__'+anchor).css('display','flex');
    $('.pd__'+anchor).css('display','flex');
    $('.subm__'+anchor).css('backgroundColor','white');
    $('.subm__'+anchor).css('color','black');
    $('.subm__'+anchor).css('fontWeight','bold');
    $('.tb__1-'+anchor).css('display','flex');
}

// 특정링크의 섹션만 보이게, 클릭된거 표현
console.log(anchor);
clicked(anchor);

// 특정링크의 섹션만 보이게, 클릭된거 표현 fin

// 클릭한거만 보이게
submclick(1);   
submclick(2);
submclick(3);
submclick(4);
submclick(5);
//클릭한거만 보이게 fin

//페이지 전환설정 fin