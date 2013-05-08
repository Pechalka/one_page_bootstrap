define(["knockout", "text!./../tpl/list.html", "vent"], function(ko, template, vent) {
	return function(model){
		var self = this;

		self.users = ko.observableArray(model);
		
		self.html = template;
	}
});		