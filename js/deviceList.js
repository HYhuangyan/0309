			$("#change").bind("click",function(){
					alert(1);
					console.log(1);
					$(".change_information").fadeOut(200);
					$(".zhezaocen").fadeOut(200);
					
				});
			$(".exit").bind("click",function(){
				$(".change_information").fadeOut(200);
				$(".zhezaocen").fadeOut(200);
			});
	
		function bianji(e){
				$(".change_information").fadeIn(200);
				$(".zhezaocen").fadeIn(200);
				$(".addPic_warp").html("");
				$("change_information .table_header").html("");
				var num_bianji = $(e).parents("tr").find(".channel_table ol").length;
				var str = "";
				var str2 = "";
				var num = ["一","二","三","四","五"];
				for (var i = 0 ;i < num_bianji ;i++) {
					
					str2 = "<td>频道"+num[i]+"</td>";
					$("change_information .table_header").append(str2);
					
					str = ['<td>',
'						<ul>',
'							<li class="addPic"><img src="'+$(e).parents("tr").find(".channel_table").find("img").eq(i).attr("src")+'"/></li>',
'							<li class="changename" ><span>'+$(e).parents("tr").find(".channel_table").find("img").eq(i).parent("li").siblings("li").html()+'</span></li>',
'						</ul>',
'					</td>'].join("");
					$(".addPic_warp").append(str);
					
				}
				
				$(".changename").find("span").bind("click",function(){
								var changename = $(this).html();
								$(this).parent(".changename").html("<input  class='change_input'  type='text' value='"+changename+"'>");			
								return false;
								
							});
				
				
			};