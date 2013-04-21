define(["knockout", 'text!./breadcrumbs.html', 'vent'], function(ko, template, vent) {
	return function(model){
		var self = this;

		self.breadcrumbs = ko.observableArray([]);

		// vent.on('app:render', function(e, page_name) {
		// 	switch(page_name){
		// 		case 'overview':
		// 			self.breadcrumbs(['overview']);
		// 		break;

		// 		case 'students':
		// 			self.breadcrumbs(['overview', 'students']);
		// 		break;

		// 		case 'catalog':
		// 			self.breadcrumbs(['overview', 'catalog']);
		// 		break;

		// 		case 'teachers':
		// 			self.breadcrumbs(['overview', 'teachers']);
		// 		break;

		// 		default:
		// 			self.breadcrumbs([]);
		// 		break;
		// 	}
		// });
		

		self.html = template;		
	}
});		