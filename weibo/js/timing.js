$(function() {
	
	//转发显示弹出层
	$('.middle_area6_ul li').find(".edit").click(function () {
      $("#myModalLabel").text("定时发布微博修改");
    $('#myModal').modal();
 });
//	$("#edit").click(function () {
//    $("#myModalLabel").text("定时发布微博修改");
//  $('#myModal').modal();
// });
	
	//定时发布立即发送按钮
	$('.middle_area6_ul li').find('.btn_send').click(function(){        		
        	$("#myModal2").modal();
           });

	
	//定时发布删除按钮的事件
	
	$('.middle_area6_ul li').find('.btn_delete').click(function(){        		
        	$("#myModal3").modal();
           });

	//定时发布编辑的定时发布按钮
	$('.edit_fabu').click(function(event){
		if($('#content2').html()==null||$('#content2').html()==0){			
			alert('发送信息不能为空');
			event.preventDefault();
		}else{
			alert('发送成功');
		}
	});
	
	
	//定时发布按钮
	$('.fabu').click(function(event){
		if($('#content').html()==null||$('#content').html()==0){
			alert('发送信息不能为空');
			event.preventDefault();
		}else{
			alert('发送成功');
		}
	});
	
	
	
	
	
	//定时修改页图片点击
	$(".edit_pic").click(function(){
    				
    				$(".edit_select_Img").click();  	   				
    		});
    		
    //定时修改页视频点击
     $(".edit_video").click(function(){
    				
    				$(".edit_select_video").click();  	   				
    		});
    		
     //定时修改页 edit_public显示和隐藏信息
    $('.edit_public').click(function(){
		$('.edit_public2').toggle("normal");
	});
	$('.edit_public2').mouseleave(function(){
		$('.edit_public2').hide(200);
	})
	
	
	//图片点击
	$(".pic").click(function(){
    				
    				$(".select_Img").click();  	   				
    		});
    		
    //视频点击
    $(".video").click(function(){
    				
    				$(".select_video").click();  	   				
    		});
    		
    //public显示和隐藏信息
    $('.public').click(function(){
		$('.public2').toggle("normal");
	});
	$('.public2').mouseleave(function(){
		$('.public2').hide(200);
	});
	//public的value修改
	$("#o1").click(function(ev){
		 $('.o').val("公开");
		 $('.public2').css("display","none");
	});
	$("#o2").click(function(){
		 $('.o').val("好友圈");
		 $('.public2').css("display","none");
	});
	$("#o3").click(function(){
		 $('.o').val("仅自己可见");
		 $('.public2').css("display","none");
	});
	$("#o4").click(function(){
		 $('.o').val("群可见");
		 $('.public2').css("display","none");
	});
	$("#o5").click(function(){
		 $('.o2').val("公开");
		 $('.edit_public2').css("display","none");
	});
	$("#o6").click(function(){
		 $('.o2').val("好友圈");
		 $('.edit_public2').css("display","none");
	});
	$("#o7").click(function(){
		 $('.o2').val("仅自己可见");
		 $('.edit_public2').css("display","none");
	});
	$("#o8").click(function(){
		 $('.o2').val("群可见");
		 $('.edit_public2').css("display","none");
	});
			
	//判断input输入框中是否有值，以此来判断是否隐藏默认提示信息
    $('#q').on('keyup',function() {
        var len = document.getElementById('q').value; 
        if(len == ''){
            $('#q_label').show();
            $('#q_i').show();
        }else{
            $('#q_label').hide();
            $('#q_i').hide();
        }
    });
	
	
	//表情包
		
	
	 $("#content").emoji({
            showTab: true,
            animation: 'fade',
            icons: [{
                name: "贴吧表情",
                path: "img/tieba/",
                maxNum: 50,
                file: ".jpg",
                placeholder: ":{alias}:",
                alias: {
                    1: "hehe",
                    2: "haha",
                    3: "tushe",
                    4: "a",
                    5: "ku",
                    6: "lu",
                    7: "kaixin",
                    8: "han",
                    9: "lei",
                    10: "heixian",
                    11: "bishi",
                    12: "bugaoxing",
                    13: "zhenbang",
                    14: "qian",
                    15: "yiwen",
                    16: "yinxian",
                    17: "tu",
                    18: "yi",
                    19: "weiqu",
                    20: "huaxin",
                    21: "hu",
                    22: "xiaonian",
                    23: "neng",
                    24: "taikaixin",
                    25: "huaji",
                    26: "mianqiang",
                    27: "kuanghan",
                    28: "guai",
                    29: "shuijiao",
                    30: "jinku",
                    31: "shengqi",
                    32: "jinya",
                    33: "pen",
                    34: "aixin",
                    35: "xinsui",
                    36: "meigui",
                    37: "liwu",
                    38: "caihong",
                    39: "xxyl",
                    40: "taiyang",
                    41: "qianbi",
                    42: "dnegpao",
                    43: "chabei",
                    44: "dangao",
                    45: "yinyue",
                    46: "haha2",
                    47: "shenli",
                    48: "damuzhi",
                    49: "ruo",
                    50: "OK"
                },
                title: {
                    1: "呵呵",
                    2: "哈哈",
                    3: "吐舌",
                    4: "啊",
                    5: "酷",
                    6: "怒",
                    7: "开心",
                    8: "汗",
                    9: "泪",
                    10: "黑线",
                    11: "鄙视",
                    12: "不高兴",
                    13: "真棒",
                    14: "钱",
                    15: "疑问",
                    16: "阴脸",
                    17: "吐",
                    18: "咦",
                    19: "委屈",
                    20: "花心",
                    21: "呼~",
                    22: "笑脸",
                    23: "冷",
                    24: "太开心",
                    25: "滑稽",
                    26: "勉强",
                    27: "狂汗",
                    28: "乖",
                    29: "睡觉",
                    30: "惊哭",
                    31: "生气",
                    32: "惊讶",
                    33: "喷",
                    34: "爱心",
                    35: "心碎",
                    36: "玫瑰",
                    37: "礼物",
                    38: "彩虹",
                    39: "星星月亮",
                    40: "太阳",
                    41: "钱币",
                    42: "灯泡",
                    43: "茶杯",
                    44: "蛋糕",
                    45: "音乐",
                    46: "haha",
                    47: "胜利",
                    48: "大拇指",
                    49: "弱",
                    50: "OK"
                }
            }, {
                path: "img/qq/",
                maxNum: 91,
                excludeNums: [41, 45, 54],
                file: ".gif",
                placeholder: "#qq_{alias}#"
            }]
        });
        


	
	//小时获取
	var myDate=new Date();
	function getH(){
					
	$('.h').val(myDate.getHours());
	$('.edit_h').val(myDate.getHours());
	$('.m').val(myDate.getMinutes()+10);
	$('.edit_m').val(myDate.getMinutes()+10);
	}
				getH();
	
	//阻止菜单栏a默认事件
	function click1(event){
		event.preventDefault();
	}
	
	
	//菜单栏
	$('.d-firstNav').click(function(e) {
		console.log("111");
		dropSwift($(this), '.d-firstDrop');	   
		e.stopPropagation();
	});
	$('.d-secondNav').click(function(e) {
		dropSwift($(this), '.d-secondDrop');
		e.stopPropagation();
	});
	
	
	
	/**
	 * @param dom   点击的当前元素
	 * @param drop  下一级菜单
	 */
	function dropSwift(dom, drop) {
		//点击当前元素，收起或者伸展下一级菜单
		
		
		dom.next().slideToggle();
		
		//设置旋转效果
		
		//1.将所有的元素都至为初始的状态		
//		dom.parent().siblings().find('.fa-caret-right').removeClass('iconRotate');
		
		//2.点击该层，将其他显示的下滑层隐藏		
		dom.parent().siblings().find(drop).slideUp();
		

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
})
