define(["knockout", "text!./../tpl/menu.html"], function(ko, template) {
	return function(model){
		var self = this;

		self.items = ko.observableArray(model);
		self.select = ko.observable(model[0]);		

		self.html = template;
	}
});		