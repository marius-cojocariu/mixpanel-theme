(function($) {
	"use strict";

	var trackingEnabled = false, 
		trackingDeferred = $.Deferred();
	
	function trackVariationInterest() {
		$('a[data-mixpanel-variation]')
			.not('a[data-mixpanel-purchase]')
			.not('a[data-mixpanel-close]')
			.on('click', function(e) {
				var $this = $(this), 
					track = function() {
						mixpanel.register_once({
					        "prefered variation name": $this.attr('data-mixpanel-variation')
					    });
						mixpanel.track("variation click", {
							"referrer": document.referrer, 
							"variation name": $this.attr('data-mixpanel-variation')
						}, function() {
							window.top.location = $this.attr('href')
						});
					};

				if(trackingEnabled) {
					track();
				} else {
					trackingDeferred.done(function() {
						track();
					});
				}

				e.preventDefault();
				return false;
			});
		$('a[data-mixpanel-purchase]').on('click', function(e) {
			var $this = $(this), 
				track = function() {
					mixpanel.track("purchase", $.extend(
						{
							"referrer": document.referrer, 
						}, $this.attr('data-mixpanel-variation') ? {
							"variation name": $this.attr('data-mixpanel-variation')
						} : {}
					), function() {
						window.top.location = $this.attr('href')
					});
				};

			if(trackingEnabled) {
				track();
			} else {
				trackingDeferred.done(function() {
					track();
				});
			}

			e.preventDefault();
			return false;
		});
		$('a[data-mixpanel-close]').on('click', function(e) {
			var $this = $(this), 
				track = function() {
					mixpanel.track("close", $.extend(
						{
							"referrer": document.referrer, 
						}, $this.attr('data-mixpanel-variation') ? {
							"variation name": $this.attr('data-mixpanel-variation')
						} : {}
					), function() {
						window.top.location = $this.attr('href')
					});
				};

			if(trackingEnabled) {
				track();
			} else {
				trackingDeferred.done(function() {
					track();
				});
			}

			e.preventDefault();
			return false;
		});
	}

	if(!$('div[data-mixpanel-landing]').length) {
		$(function() {
			trackingEnabled = true;
			trackVariationInterest();
		});
	} else {
		$(function() {
			trackVariationInterest();
		});
		$(window).load(function() {
			mixpanel.track("landing page loaded", {
				"referrer": document.referrer
			}, function() {
				trackingDeferred.resolve();
				trackingEnabled = true;
			});
		});
	}
})(jQuery);
