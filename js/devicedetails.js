
$(".select_change").bind("click",function(){
	$(".list_select").slideToggle(200);
	return false;
	});
$(".list_select li").bind("click",function(){
	$(".select_change").text($(this).html());
	$(".list_select").slideToggle(200);
	$(this).html();
});


function deleteinfo(e){

				$(e).parents("tr").remove();
			
}


function bianji(){
				$(".table_change tbody tr").html("");
				$(".change_information").fadeIn(200);
				$(".zhezaocen").fadeIn(200);
				var index = $(this).index();
				var $tr =  $(".table_list tbody").find("tr").eq(index);
				var tdlength =$tr.find("td").length-1;
				
				var tdstr = "";
				
				for (var i = 0;i<tdlength ; i++) {
					
					tdstr += "<td><span>"+$tr.find("td").eq(i).html()+"</span></td>";
					
				}
				$(".table_change tbody tr").append(tdstr);
				$(".table_change tbody tr").find("td span").bind("click",function(){
								var changename = $(this).html();
								$(this).parent("td").html("<input  class='change_input'  type='text' value='"+changename+"'>");			
								return false;
								
							});
				
				$("#change").bind("click",function(){
					$(".change_information").fadeOut(200);
					$(".zhezaocen").fadeOut(200);
					
				});
			};	