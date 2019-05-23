$(function(){
	if($(".reply").css("display","none")){
			$(".comment ul li").css("padding-top","13%");
			$(".comment ul").css("padding-top","0%");
			$(".btn_pinglun").css("top","100%");
			$(".reply_content").css("padding-bottom","1%");
		}else{
			$(".comment ul li").css("padding-top","3%");
			$(".comment ul").css("padding-top","15%");
			$(".btn_pinglun").css("top","50%");
			
		}
		$(".main2 li").find(".btn_pinglun_reply").click(function(){
			if($(".reply").css("display")=="none"){
				$(".reply").css("display","block");
			$(".comment ul li").css("padding-top","3%");
			$(".comment ul").css("padding-top","15%");
			$(".btn_pinglun").css("top","75%");
			$(".reply_content").css("padding-bottom","11%");
			}else{
				$(".reply").css("display","none");
				$(".comment ul li").css("padding-top","13%");
			$(".comment ul").css("padding-top","0%");
			$(".btn_pinglun").css("top","100%");
			$(".reply_content").css("padding-bottom","1%");
			}
			
		});
	
	//评论下拉框
	 
    $("#dropdownMenu1").click(function(){
    	$('.dropdown').slideToggle("normal");
    });
    $('.dropdown').mouseleave(function(){
    	$('.dropdown').hide(200);
    });


	//转发显示弹出层
	$("#btn_add").click(function () {
      $("#myModalLabel").text("转发");
    $('#myModal').modal();
 });
 //right_content显示和隐藏栏
	$('.right_content').click(function(){
		$('.operate_content').slideToggle("normal");
	});
	$('.operate_content').mouseleave(function(){
			$(".operate_content").hide(200);
	});
	
  //header小控件显示和隐藏信息
    $('.envelope').click(function(){
		$('.envelope_content').toggle("normal");
	});
	$('.envelope_content').mouseleave(function(){
		$(".envelope_content").hide(200);
	});
	
	 $('.cog').click(function(){
		$('.cog2').toggle("normal");
	});
	$('.cog2').mouseleave(function(){
		$('.cog2').hide(200);
	});
})
