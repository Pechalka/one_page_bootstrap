define(["knockout", "text!./../tpl/overview.html"], function(ko, template) {
	return function(model){
		var self = this;

		self.text = ko.observable(model);

		self.html = template;
	}
});		