
			$(".select_change").bind("click",function(){
				$(".list_select").slideToggle(200);
				return false;
			})
			$(".list_select li").bind("click",function(){
				alert(1);
			});
		

		$(".select").mouseover(function(){
			$(this).css({"background":"pink"})
		})
		$(".select").mouseout(function(){
			$(this).css({"background":"#FEA733"})
		});
		
		
		//点击添加按钮

		
		$(".sure_sing").click(function(){
			$(".add_sing_result").fadeOut(200);
			$(".zhezaocen").fadeOut(200);
		});

		var flag = false;//用来判断是添加正确还是添加失败
		function addsing(e){
			
			if(flag){
				$(".add_result_title").html("添加成功");
				$(".song_result").attr("src","img/addsong_success.png");
			}else{
				$(".add_result_title").html("添加失败");
				$(".song_result").attr("src","img/add_song_fail.png");
				
			}
			
			
			$(".add_sing_result").fadeIn(200);
			$(".zhezaocen").fadeIn(200);
		};		