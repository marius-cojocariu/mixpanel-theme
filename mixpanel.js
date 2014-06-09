(function($) {
	"use strict";
	
	function trackVariationInterest() {
		$('a[data-mixpanel-variation]').on('click', function(e) {
			var $this = $(this);

			mixpanel.register_once({
		        "prefered variation name": $this.attr('data-mixpanel-variation')
		    });
			mixpanel.track("variation click", {
				"referrer": document.referrer, 
				"variation name": $this.attr('data-mixpanel-variation')
			}, function() {
				window.top.location = $this.attr('href')
			});

			e.preventDefault();
			return false;
		});
		$('a[data-mixpanel-purchase]').on('click', function(e) {
			var $this = $(this);

			mixpanel.track("purchase", $.extend(
				{
					"referrer": document.referrer, 
				}, $this.attr('data-mixpanel-variation') ? {
					"variation name": $this.attr('data-mixpanel-variation')
				} : {}
			), function() {
				window.top.location = $this.attr('href')
			});

			e.preventDefault();
			return false;
		});
		$('a[data-mixpanel-close]').on('click', function(e) {
			var $this = $(this);

			mixpanel.track("close", $.extend(
				{
					"referrer": document.referrer, 
				}, $this.attr('data-mixpanel-variation') ? {
					"variation name": $this.attr('data-mixpanel-variation')
				} : {}
			), function() {
				window.top.location = $this.attr('href')
			});

			e.preventDefault();
			return false;
		});
	}

	$(function() {
		trackVariationInterest();
	});
})(jQuery);
