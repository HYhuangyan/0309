var pagesize = 10;
var pageNum = 1;
function childpage(offsetnum,tal){
	 //alert(offsetnum);
	 //alert(tal);
	 if(offsetnum <= 1){
	 	var result = "<span style='color:#999;' class='prevdisable'>上一页</span>";
	 }else{
	    var result = "<a href='#' onclick='pagnum(" + (offsetnum-1) + ")' class='prevdisable'>上一页</a>";
	 }
	 if(tal<=10){
    	 for(var i=1; i <= tal; i++){
    		 result = result + "<a href='#' onclick='pagnum(" + i + ")' class='pag" + i + "'>"+ i +"</a>";	  
    	 }
    	 
	 }else{
		 if(offsetnum < 3){
			 for(var i=1; i <= 3; i++){
	    		 result = result + "<a href='#' onclick='pagnum(" + i + ")' class='pag" + i + "'>"+ i +"</a>";	  
	    	 }
			 result = result + "<span>...</span>";
			 result = result + "<a href='#' onclick='pagnum(" + tal + ")' class='pag" + tal + "'>" + tal + "</a>";    		 
		 }else if(offsetnum == 3 || offsetnum == 4){
			 for(var i=1; i <= offsetnum + 1; i++){
	    		 result = result + "<a href='#' onclick='pagnum(" + i + ")' class='pag" + i + "'>"+ i +"</a>";	  
	    	 }
			 result = result + "<span>...</span>";
			 result = result + "<a href='#' onclick='pagnum(" + tal + ")' class='pag" + tal + "'>" + tal + "</a>";
		 }else if(offsetnum > 4 && offsetnum < tal-3){
			 result = result + "<span>...</span>";
			 for(var i= offsetnum-1; i <= offsetnum + 1; i++){
	    		 result = result + "<a href='#' onclick='pagnum(" + i + ")' class='pag" + i + "'>"+ i +"</a>";	  
	    	 }
			 result = result + "<span>...</span>";
			 result = result + "<a href='#' onclick='pagnum(" + tal + ")' class='pag" + tal + "'>" + tal + "</a>";
		 }else if((tal-offsetnum) <= 3){
			 result = result + "<a href='#' onclick='pagnum(1)' class='pag1'>1</a>";
			 result = result + "<span>...</span>";
			 for(var i= tal-4; i <= tal; i++){
	    		 result = result + "<a href='#' onclick='pagnum(" + i + ")' class='pag" + i + "'>"+ i +"</a>";	  
	    	 }
		 }
		  
	 }
	 if(offsetnum == tal){
		 result = result + "<span style='color:#999;'  class='next'>下一页</span>"; 
	 }else if(offsetnum<tal){
    	 result = result + "<a href='#' onclick='pagnum(" + (offsetnum + 1) + ")' class='next'>下一页</a>";
	 }
	 return result;
 }
 
 function showpages(offsetnum,tal){
	 pageNum = offsetnum;
	$(".pagination").html(
		//childpage(offsetnum,tal,url)
		childpage(offsetnum,tal)
    );
	$(".pagination .pag" + offsetnum +"").css({"background":"#FEA733","color":"#ffffff"});
 }
 
 function total(num){
	 var result;
	 result = parseInt(num/pagesize)+ 1;
	 return result;
 }
 
// function pagnum(num,url){
//	 $('#list').html("");
//	 //ajaxtwo(num,pagesize,url)
//	 ajaxtwo(num,pagesize);
//	 
// }
 childpage(5,100);
 showpages(9,100);
 total(100);


		$("a").length*52;
		$("span").length*52;
		
		var zwidth = 10*($("a").length+$("span").length-1)+$("a").length*52+$("span").length*52+"px";
		
		$(".pagination").css({"width":zwidth});
	