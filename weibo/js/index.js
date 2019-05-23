	$(function() {
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
	
	//生成li
	$('.fabu').click(function(){
		var html='<li>'+
				'<div class="middle_content">'+
					'<div class="right_content"><i class="fa fa-angle-down"></i></div>'+
					'<div class="operate_content">'+
						'<ul>'+
							'<li><a href="#">删除</a></li>'+
							'<li><a href="#">编辑微博</a></li>'+
							'<li><a href="#">转换为好友圈可见</a></li>'+
							'<li><a href="#">转换为仅自己可见</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="face">'+
						'<a href=""><img src="img/cxk.jpg"</a>'+
					'</div>'+
					'<div class="name">'+
						'<a href="#"><h4>丁2222大飒飒</h4></a>'+
					'</div>'+					
					'<div class="time">'+
						'<a href="#">今天&nbsp;22:42</a>'+
					'</div>'+
					'<div class="content">'+
					'【野兽出击！锡安-威廉姆森大学生涯劲爆攻防混剪】锡安的身体天赋已经无须赘述，他仿佛是另一个次元的存在！无论在进攻端还是防守端他都得心应手，再加上他万夫莫敌的爆发力让他的球风十足炸裂!非常期待他在NBA赛场上释放天赋!#高光时刻##3x3黄金联赛#L声色NBA的微博视频'+
					'</div>'+
					'<div class="key_content">'+	
						'<video src="img/cxk.mp4" width="320px" height="240px" align="center" controls="controls"></video>'+		
					'</div>'+
					'<div class="content_bottom">'+
						'<ul>'+
							'<li><a href="#">推广</a></li>'+
							'<li id="btn_add" class="forward"><a href="#"><i class="fa fa-share-square-o"></i>转发</a></li>'+
							'<li><a class="dropdown-toggle" href="#" data-toggle="dropdown" id="dropdownMenu1">'+
								'<i class="fa fa-commenting-o "></i>评论</a>'+
							'</li>'+
							'<li><a href="#"><i class="fa fa-thumbs-o-up "></i>赞</a></li>'+
						'</ul>'+	
						'<!--转发弹出框-->'+
						'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
        '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
                '<div class="modal-header">'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                    '<h4 class="modal-title" id="myModalLabel">转发</h4>'+
                '</div>'+
                '<div class="modal-body">'+
                    '<div class="form-group">'+
                        '<label for="txt_departmentname" >转发到:</label>'+
                        '<a href="#"><button class="btn btn-default">我的微博</button></a>'+
                        '<a href="#"><button class="btn btn-default">好友圈</button><i></i></a>'+
                        '<a href="#"><button class="btn btn-default">私信</button></a>'+
                    '</div>'+
                    '<div class="form-group">'+
                    	'<textarea class="form-control" rows="3" id="content"></textarea>'+                   	
                    '</div>'+                  
                '</div>'+
                '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭</button>'+
                    '<button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
			'<!--转发框结束-->'+						
					'</div>'+
				'</div>'+
				'<!--评论下拉-->'+
						'<div class="dropdown comment">'+
							'<ul class="" id="dropDownCur">'+
          					'<li>'+
          						'<div class="pinglun_face"><img src="img/cxk.jpg" /></div>'+
          					'<input type="text" />'+
          					'<button class="btn btn-default btn_pinglun">评论</button>'+
          					'</li>'+
          					'<!--发表评论结束-->'+         					
          					'<!--评论内容-->'+
          					'<li>'+
          						'<div class="c1">'+
          						'<div class="pinglun_face"><img src="img/cxk.jpg" /></div>'+
          						'<span><a href="#">丁2222大飒飒：</a>11111111</span>'+
          						'<small class="comment_time">今天&nbsp;15:00</small>'+
          						'<button class="btn_pinglun_delete">删除</button>'+
          						'<a class="pinglun_zan" href="#"><i class="fa fa-thumbs-o-up "></i>赞<input type="text" value="0" readonly="readonly" /></a>'+
          						'<button class="btn_pinglun_reply">回复</button>'+
          						'</div>'+
          					'</li>'+         			
          					'<li>'+
          						'<div class="c1">'+
          						'<div class="pinglun_face"><img src="img/cxk.jpg" /></div>'+
          						'<span><a href="#">丁2222大飒飒：</a>11111111</span>'+
          						'<small class="comment_time">今天&nbsp;15:30</small>'+
          						'<button class="btn_pinglun_delete">删除</button>'+
          						'<a class="pinglun_zan" href="#"><i class="fa fa-thumbs-o-up "></i>赞</a>'+
          						'<button class="btn_pinglun_reply">回复</button>'+
          						'</div>'+
          					'</li>'+  					         					         					
          					'<!--评论内容结束-->'+       					
							'</ul>'+						         					     												
						'</div>'+
				'</li>';
		
		$(".main2").append(html);
	});
	
	
	
	//点赞
	var number=0;
	
	if($('.pinglun_zan input').val()==0){
		$('.pinglun_zan input').css("display","none");
	}
	$('.ssssss li a').click(function(){
		number++;
		$(this).find("input").val(number);
		$(this).find("input").css("display","block");
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


    		 	//判断输入的字符串长度
//  		 	var content_len = $("#content").text().replace(/\s/g,"").length;
                
           $(".fabu").click(function(){
           	var value=$("#content").val();
    		 	if(value.length==0){
    		 		alert("信息不能为空");
																											
    		 		$(".fabu").addClass("disabled");
//  		 		return false;
    		 	}else{
    		 		$(".fabu").removeClass("disabled");
    		 		alert("发送成功");
    		 	}
    		 	});
    		 
	
	
	
	
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
	$("#o1").click(function(){
		 $('.o').val("公开");
		 $(".public2").hide(200);
	});
	$("#o2").click(function(){
		 $('.o').val("好友圈");
		 $(".public2").hide(200);
	});
	$("#o3").click(function(){
		 $('.o').val("仅自己可见");
		 $(".public2").hide(200);
	});
	$("#o4").click(function(){
		 $('.o').val("群可见");
		 $(".public2").hide(200);
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
	
});
