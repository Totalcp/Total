console.clear();

//스크롤에 따른 메인배너 변환
function scrolling (scrollValue){
    if(scrollValue >=50){
        $('.mb').css('visibility','hidden');
        $('#head-top').css('backgroundColor','black');
    }
    else{
        $('.mb').css('visibility','visible');
        $('#head-top').css('backgroundColor','');
    }
}

let scrollValue = $(document).scrollTop(); 
scrolling(scrollValue);

$(window).scroll(function () { 
	scrollValue = $(document).scrollTop(); 
    scrolling(scrollValue);
});