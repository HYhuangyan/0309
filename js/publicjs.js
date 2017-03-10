var public = ["			<div class=\"zhezaocen\">",
"							",
"						</div>",
"						",
"						<!--**************修改密码*******************************************-->",
"						<div class=\"change_password\">",
"							<img class=\"close_password\" src=\"img/xx_03.png\"/>",
"							<p>修改密码</p>",
"							<form action=\"\" method=\"post\" class=\"password_form\">",
"								<p><span class=\"password_label\">",
"									旧密码：",
"								</span><input class=\"old_password\" type=\"password\" /></p>",
"								",
"								<p><span class=\"password_label\">",
"									新密码：",
"								</span><input class=\"new_password\" type=\"password\" /></p>",
"								",
"								<p><span class=\"password_label\">",
"									确认密码：",
"								</span><input  class=\"sure_password\" type=\"password\" /></p>",
"								<p style=\"text-align: center;\"><span class=\"error_title\">&nbsp;</span></p>",
"								<div class=\"submit_password\">确认</div>",
"							</form>				",
"						</div>",
"						",
"						",
"				<!--*********************个人信息**************************************-->",
"				",
"						<div class=\"aboutme\">",
"							<img class=\"touxian\" src=\"img/deviceList/touxian.png\"/>",
"							<img  class=\"close_password\" src=\"img/xx_03.png\"/>",
"							",
"							<div class=\"aboutme_warp\">",
"								<p><img src=\"img/deviceList/aboutme(6).png\"/>&nbsp;<span class=\"information_name\">嗨听科技</span></p>",
"								<p><img src=\"img/deviceList/aboutme(1).png\"/><span class=\"information_email\">电子邮箱</span></p>",
"								<p><img src=\"img/deviceList/aboutme(2).png\"/><span class=\"information_address\">具体地址</span></p>",
"								<p><img src=\"img/deviceList/aboutme(3).png\"/><span class=\"information_tel\">电话号码</span></p>",
"								<p><img src=\"img/deviceList/aboutme(4).png\"/><span class=\"information_other\">其他信息</span></p>",
"						",
"							</div>",
"							",
"						</div>",
"			",
"			",
"				",
"				",
"						<div id=\"head_list\">",
"							<div class=\"pic logo\"><img src = 'img/top_logo.png'></div>",
"							<div class=\" title_logo\"><img src = 'img/top_title.png'></div>			",
"							",
"							<div class=\"other_about\">					",
"									<div class=\"about_menu\">嗨听科技<span class=\"pic triangle_logo\"></span>								",
"									</div>					",
"									<ul class = \'menu_list\'>",
"											<li class=\"personal_data\">个人资料</li>",
"											<li class=\"kongxi_li\">修改密码</li>",
"											<li>退出登入</li>							",
"									</ul>",
"							</div>",
"						</div>",
"						",
].join("");
$("#public_warp").html(public);

	
		var windowWidth, windowHeight;
		  if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode  
		  	  windowWidth = document.documentElement.clientWidth;            
		  	  windowHeight = document.documentElement.clientHeight;        
		  } else {           
		  	if (document.body) { // other Explorers                    
		  		windowWidth = document.body.clientWidth;                
		  		windowHeight = document.body.clientHeight;            
		  	}        
		  }//end 这是做浏览器的兼容问题 
		$("body").css({"width":windowWidth,"height":windowHeight});
		$("#head_list").css({"width":windowWidth});
		window.onresize = function(){
				var windowWidth, windowHeight;
		  if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode  
		  	  windowWidth = document.documentElement.clientWidth;            
		  	  windowHeight = document.documentElement.clientHeight;        
		  } else {           
		  	if (document.body) { // other Explorers                    
		  		windowWidth = document.body.clientWidth;                
		  		windowHeight = document.body.clientHeight;            
		  	}        
		  }//end 这是做浏览器的兼容问题 
		$("body").css({"width":windowWidth,"height":windowHeight});
		$("#head_list").css({"width":windowWidth});
		}
		 
	//下拉菜单
		$(".about_menu").bind("click",function(){
			$(".menu_list").slideToggle(300);
				return false;		
		});
		

			$(".menu_list li").bind("mouseover",function(){
			var index = $(this).index();
			$(".menu_list li").eq(index).css({"text-decoration":"underline"});
		})
		
		$(".menu_list li").bind("mouseout",function(){
			var index = $(this).index();
			$(".menu_list li").eq(index).css({"text-decoration":"none"});
		});
		
		
		
//			*********修改密码************************
		
			$(".kongxi_li").bind("click",function(){
			
				$(".change_password").fadeIn();
				$(".zhezaocen").fadeIn();
				$(".menu_list").slideToggle(400);
//				$(".menu_list").css("display":"none");
			});
			
			$(".close_password").bind("click",function(){
				$(".error_title").html("&nbsp;")
				$(".change_password").fadeOut(200);
				$(".zhezaocen").fadeOut(200);
				$(".aboutme").fadeOut(200);
				$(".change_information").fadeOut(200);
				$(".add_sing_result").fadeOut(200);
			});
			
			$(".submit_password").bind("click",function(){
				if($(".old_password").val() && $(".new_password").val()&& $(".sure_password")){
					$(".change_password").fadeOut(200);
					$(".zhezaocen").fadeOut(200);
				}else{
					$(".error_title").html("所有的值不能为空");
				}
			});
			
			$(".personal_data").bind("click",function(){
				$(".aboutme").fadeIn(200);
				$(".zhezaocen").fadeIn(200);
				$(".menu_list").slideToggle(400);
			});
	
	

			$(".exit").bind("click",function(){
				$(".change_information").fadeOut(200);
				$(".zhezaocen").fadeOut(200);
			});
			
			