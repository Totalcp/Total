console.clear();

let anchor=localStorage.getItem('pagenum');

function anchorf(anchor){
    console.log('anchorf');
    $('.ex__'+anchor).css('display','flex');
    $('.pd__'+anchor).css('display','flex');
}

function submnonclick(no){
    console.log('submnonclick');
    $('.ex__'+no).css('display','none');
    $('.pd__'+no).css('display','none');   
}

function submclick(no){
    $('.subm__'+no).click(function() {
        submnonclick(1);
        submnonclick(2);
        submnonclick(3);
        submnonclick(4);
        submnonclick(5);
        console.log('submclick');
        $('.ex__'+no).css('display','flex');
        $('.pd__'+no).css('display','flex');
    });
}

// 모든 섹션 안보이게
submnonclick(1); 
submnonclick(2);
submnonclick(3);
submnonclick(4);
submnonclick(5);

// 특정링크의 섹션만 보이게
if(anchor==undefined){
    anchorf(1);  
}
else {
    anchorf(anchor);  
}


// 클릭한거만 보이게
submclick(1);   
submclick(2);
submclick(3);
submclick(4);
submclick(5);
