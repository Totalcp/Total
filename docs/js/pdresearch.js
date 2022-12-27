console.clear();

//스크롤에 따른 메인배너 변환

//스크롤 로컬테이지화
let scrollValue = localStorage.getItem('scrollmain');

function scrolling (scrollValue,slength){
    if(scrollValue >=slength){
        $('.mb').css('visibility','hidden');
    }
    else{
        $('.mb').css('visibility','visible');
    }
}

// 일반실행
scrolling(scrollValue);

// 스크롤 이벤트 감지 후 실행
$(window).scroll(function () { 
	localStorage.setItem('scrollmain',$(document).scrollTop());
    scrollValue = localStorage.getItem('scrollmain');
    scrolling(scrollValue,200);
});

let pdresearch;

function pd_research() {
    pdresearch = document.getElementById('pd_research').value;
    console.log(pdresearch);
    
    $.ajax({
        url:"logfiles/productinfo.json",
        type:"get",
        datatype:"json",
        success: function(result) {
            if (result) {
                console.log("불러오기 성공");
                pdResearchHtml(result,pdresearch);
            } 
            else {
                console.log("불러오기 실패");
            }
        }
    });
}

$(document).ready(function(){
    $.ajax({
        url:"logfiles/productinfo.json",
        type:"get",
        datatype:"json",
        success: function(result) {
            if (result) {
                console.log("불러오기 성공");
                pdResearchHtml(result,pdresearch);
            } 
            else {
                console.log("불러오기 실패");
            }
        }
    });
});

function pdResearchHtml(result, pdresearch){
    console.log("pdResearchHtml");

    let productInfo_html ="";
    let i=0;
    let results;
    
    // switch (pagemain) {
    //     case "1":
    //         switch (pagenum) {
    //             case "1":
    //                 results = result.산업용윤활유.유압유;
    //                 break;
    //             case "2":
    //                 results = result.산업용윤활유.습동면유;
    //                 break;
    //             case "3":
    //                 results = result.산업용윤활유.콤프레셔유;
    //                 break;
    //             case "4":
    //                 results = result.산업용윤활유.기어오일;
    //                 break;
    //             case "5":
    //                 results = result.산업용윤활유.세척유;
    //                 break;
    //             default:
    //                 break;
    //         }
            
    //         break;
    //     case "2":
    //         switch (pagenum) {
    //             case "1":
    //                 results = result.절삭유.수용성절삭유;
    //                 break;
    //             case "2":
    //                 results = result.절삭유.비수용성절삭유;
    //                 break;
    //             default:
    //                 break;
    //         }
    //         break;
    //     case "3":
    //         switch (pagenum) {
    //             case "1":
    //                 results = result.소성가공유.소성가공유;
    //                 break;
    //             default:
    //                 break;
    //         }
    //         break;
    //     case "4":
    //         switch (pagenum) {
    //             case "1":
    //                 results = result.방청유.방청유;
    //                 break;
    //             default:
    //                 break;
    //         }
    //         break;
    //     case "5":
    //         switch (pagenum) {
    //             case "1":
    //                 results = result.식품등급유.식품등급유;
    //                 break;
    //             default:
    //                 break;
    //         }
    //         break;
    //     case "6":
    //         switch (pagenum) {
    //             case "1":
    //                 results = result.열처리유.열처리유;
    //                 break;
    //             default:
    //                 break;
    //         }
    //         break;
    //     case "7":
    //         switch (pagenum) {
    //             case "1":
    //                 results = result.그리스.그리스;
    //                 break;
    //             default:
    //                 break;
    //         }
    //         break;
    //     default:
    //         break;
    // }

    result = pdresearch;
    
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
