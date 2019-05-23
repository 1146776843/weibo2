$(function(){
		/*
		 smallimg   // 小图
		 bigimg  //点击放大的图片
		 mask   //黑色遮罩
		 */
		var obj = new zoom('mask', 'bigimg','smallimg');
		obj.init();
		
		//图片隐藏栏的显示与隐藏
//		$('.photo li').find('li').on('mouseover',function(){
//			$(this).parent().css("display","block");
//		});
		$('.photo li').mouseover(function(){
			$(this).find('.hh').css("display","block");
		}).mouseout(function(){
			$(this).find('.hh').css("display","none");
		});
		
		//图片点击上传
		$(".pic").click(function(){
    				
    				$(".select_Img").click();  	   				
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