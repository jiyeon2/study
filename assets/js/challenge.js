(function($){
		'use strict';
		$(".adventure-list").mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});
		$(".challenge-list").mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});
	})(this.jQuery);