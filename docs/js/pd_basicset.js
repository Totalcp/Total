console.clear();

// 페이지 전환설정
let tb1st=localStorage.getItem('pagemain');
let tb2nd=localStorage.getItem('pagenum');

function init_table(tb1st, tb2nd){
    console.log('init_table');
    $('.tb__'+tb1st+'-'+tb2nd).css('display','none');
}

function show_table(tb1st, tb2nd){
    console.log('show_table');
    $('.tb__'+tb1st+'-'+tb2nd).css('display','flex');
}

function click_table(tb1st, tb2nd) {
    console.log("click_table");
    init_table(1,1);
    init_table(1,2);
    init_table(1,3);
    init_table(1,4);
    init_table(1,5);
    init_table(2,1);
    init_table(2,2);
    init_table(3,1);
    init_table(4,1);
    init_table(5,1);
    init_table(6,1);
    init_table(7,1);
    show_table(tb1st,tb2nd);
}

click_table(tb1st,tb2nd);


console.log("basic");