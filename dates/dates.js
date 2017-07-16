$(function(){

	var dateStr = "01/12/2012";
	var date = new Date(dateStr);
	
	$('.date1').click(function(){
		alert(date);
	});
	
	$('.date2').click(function(){
		alert(date.toDateString());
	});	
	
	$('.date3').click(function(){
		alert(date.toLocaleDateString());
	});	
	
	$('.date4').click(function(){
		
		var x=new Date();
		x.setFullYear(2014,0,14);
		var today = new Date();

		if (x>today)
		  {
		  alert("Today is before " + x.toLocaleDateString());
		  }
		else
		  {
		  alert("Today is after " + x.toLocaleDateString());
		  }
		
	});		
	
	

	
});