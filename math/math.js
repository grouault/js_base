(function($){
	
	$(function(){
		
		//modulo
		modulo();
		
	});
	
	function modulo(){
		var cpt = 5;
		for (var i=0 ; i<10; i++) {
			var mod = i % cpt;
			var printValue = '<div>modulo :' + i + '/ 5 = '+ mod + '</div>';
			$('.modulo').append( printValue );	
		}
	}
	
})(jQuery);