console.clear();

// 페이지 전환설정
let pagemain=localStorage.getItem('pagemain');
let pagenum=localStorage.getItem('pagenum');

function init_click(){
    console.log('init_click');
    $('[class^=ex__]').css('display','none');
    $('.subm__exp__'+pagenum).removeClass('active');
}

function set_click(){
    console.log('set_click');
    
    pagemain=localStorage.getItem('pagemain');
    pagenum=localStorage.getItem('pagenum');

    init_click();

    $('.ex__'+pagemain).css('display','flex');

    $('[class^=subm__exp__]').css('opacity','0.5');
    $('.subm__exp__'+pagenum).css('opacity','1');
    $('.subm__exp__'+pagenum).addClass('active');

    $('[class^=exp__]').css('display','none');
    $('.exp__'+pagenum).css('display','flex');
}

// 서브ex 항목 체인지
$('[class^=subm__exp__]').mouseenter(function(){
    console.log('page_click');

    let $this = $(this);
    pagenum = $this.attr('value');

    init_click();

    $('.ex__'+pagemain).css('display','flex');

    $('[class^=subm__exp__]').css('opacity','0.5');
    $this.css('opacity','1');
    $('[class^=subm__exp__]').removeClass('active');
    $('.subm__exp__'+pagenum).addClass('active');

    $('[class^=exp__]').css('display','none');
    $('.exp__'+pagenum).css('display','flex');

    localStorage.setItem('pagenum',pagenum);
});   

set_click();

$(document).ready(function(){
    $.ajax({
        url:"logfiles/productinfo.json",
        type:"get",
        datatype:"json",
        success: function(result) {
            if (result) {
                console.log("불러오기 성공");
                set_click();
                pdInfoHtml(result,pagemain,pagenum);

                $('[class^=subm__exp__]').mouseenter(function(){
                    pdInfoHtml(result,pagemain,pagenum);
                });
                
            } else {
                console.log("불러오기 실패");
            }
        }
    });
});

function pdInfoHtml(result, pagemain, pagenum){
    console.log("pdInfoHtml");

    let productInfo_html ="";
    let i=0;
    let results;
    
    switch (pagemain) {
        case "1":
            switch (pagenum) {
                case "1":
                    results = result.산업용윤활유.유압유;
                    break;
                case "2":
                    results = result.산업용윤활유.습동면유;
                    break;
                case "3":
                    results = result.산업용윤활유.콤프레셔유;
                    break;
                case "4":
                    results = result.산업용윤활유.기어오일;
                    break;
                case "5":
                    results = result.산업용윤활유.세척유;
                    break;
                default:
                    break;
            }
            
            break;
        case "2":
            switch (pagenum) {
                case "1":
                    results = result.절삭유.수용성절삭유;
                    break;
                case "2":
                    results = result.절삭유.비수용성절삭유;
                    break;
                default:
                    break;
            }
            break;
        case "3":
            switch (pagenum) {
                case "1":
                    results = result.소성가공유.소성가공유;
                    break;
                default:
                    break;
            }
            break;
        case "4":
            switch (pagenum) {
                case "1":
                    results = result.방청유.방청유;
                    break;
                default:
                    break;
            }
            break;
        case "5":
            switch (pagenum) {
                case "1":
                    results = result.식품등급유.식품등급유;
                    break;
                default:
                    break;
            }
            break;
        case "6":
            switch (pagenum) {
                case "1":
                    results = result.열처리유.열처리유;
                    break;
                default:
                    break;
            }
            break;
        case "7":
            switch (pagenum) {
                case "1":
                    results = result.그리스.그리스;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    
    $.each(results, function(value, index){
        i++;
        productInfo_html += "<div class=\"pdInfo w-full\">";
        // productInfo_html += result.산업용윤활유.유압유.유압유1;
        productInfo_html += value + "<br>";
        productInfo_html += index[0] + "<br>";
        productInfo_html += index[1];
        productInfo_html += "</div>";
    });
    
    $("#productInfo").empty();
    $("#productInfo").append(productInfo_html);
}
