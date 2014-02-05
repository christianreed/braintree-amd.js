(function (root,factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (root.jQuery) {
		// Browser globals passing in jQuery
		root.Braintree = factory(root.jQuery);
	} else {
		// Browser globals without jQuery
		root.Braintree = factory(null);
	}
}(this, function (jQuery) {