/**
 * Plugin. Print.
 */
(function($){
	
	$.fn.print = function(message){
		
		return this.each(function(){
			$('<div class="results" />')
				.text(String(message))
				.appendTo($(this));
		});
		
	};
	
})(jQuery);