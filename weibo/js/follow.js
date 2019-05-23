$(function(){
	//点击修改value值
	$('.middle_right2_ul li').find('.first').click(function(){
		if($(this).find('input').value=="已关注"){
			$(this).find('input').val("关注");	
		}else{
			$(this).find('input').val("已关注");		
		}
				
	});
	
	
	//阻止a默认事件
	function onclick1(e){
		e.preventDefault();
	}
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
