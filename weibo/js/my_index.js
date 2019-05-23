$(function(){
	//阻止a默认事件
	function click1(event){
		event.preventDefault();
	}
	
		//点赞
	var number=0;
	if($('.pinglun_zan input').val()==0){
		$('.pinglun_zan input').css("display","none");
	}
	$('.pinglun_zan').click(function(){
		number++;
		$('.pinglun_zan input').val(number);
		$('.pinglun_zan input').css("display","block");
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
});
