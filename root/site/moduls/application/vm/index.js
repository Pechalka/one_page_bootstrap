define(["knockout", "text!./../tpl/index.html"], function(ko, template) {
	return function(model){
		var self = this;

		self.msg = ko.observable(model);

		self.html = template;
	}
});