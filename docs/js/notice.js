console.clear();

//게시판 불러오기
//ajax
$(document).ready(function(){
    $.ajax({
        url:"logfiles/hellow.json",
        type:"get",
        datatype:"json",
        success: function(result) {
            if (result) {
                pdInfoHtml(result);

                $('.notice__head').click(function(){
                    let $this = $(this);

                    if($this.hasClass('action')){
                        $this.removeClass('action');
                        $this.next().stop().slideUp(200);
                    }
                    else{
                        $this.addClass('action');
                        $this.next().stop().slideDown(200);
                    }
                });

                $(".pageNum").click(function(){
                    let $this = $(this);
                    let $thisnum=$this.attr('value');
                    
                    notice__paging($this,$thisnum);
                });
                
            } else {
                alert("불러오기 실패");
            }
        }
    }); 
});

function pdInfoHtml(result){
    let notice_html ="";
    let i=0;
    let a=5;  // 게시판 한 페이지당 리스트량
    $.each(result, function(value, index){
        i++;
        notice_html += "<div class=\"notice__unit pagingNum"+(Math.ceil(i/a))+" flex w-full flex-col\">";
        notice_html += "<div class=\"notice__head flex w-full\">";
        notice_html += "<div class=\"flex w-[120px] justify-center\">"+i+"</div>";
        notice_html += "<div class=\"flex flex-1 justify-center\">"+index[0]+"</div>";
        notice_html += "<div class=\"flex w-[120px] justify-center\">"+index[1]+"</div>";
        notice_html += "</div>";
        notice_html += "<div class=\"notice__body flex w-full\">"+index[2]+"</div>";
        notice_html += "</div>";   
    });
    if(i/a >= 1){
        notice_html+="<div class=\"notice__paging\">";
        let j=0;
        let k=Math.ceil(i/a);  // 게시판 페이지수
        while(k > 0){
            j++;
            notice_html+="<div class=\"pageNum\" value=\""+j+"\">"+j+"</div>";
            k--;
        }
        notice_html+="</div>";
    }
    
    $("#notice_html").empty();
    $("#notice_html").append(notice_html);
    $("#notice_htmlm").empty();
    $("#notice_htmlm").append(notice_html);
    notice__init();
}

function notice__init(){
    console.log("hide");
    $('.notice__body').stop().hide();

    $('.notice__unit').stop().hide();
    $('.pagingNum1').show();

    let $page = $(".pageNum:first-child");
    $page.css('backgroundColor','#191919');
    $page.css('color','white');
}

function notice__paging($this,$thisnum){
    $('.notice__unit').stop().hide();
    $('.pagingNum'+$thisnum).stop().show();
    
    $('.pageNum').css('backgroundColor','');
    $('.pageNum').css('color','#191919');
    $this.css('backgroundColor','#191919');
    $this.css('color','white');
}