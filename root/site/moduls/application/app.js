define([ "sammy", "knockout", 
	'moduls/application/vm/menu', 
	'moduls/application/vm/overview',	
	'vent', 
	'colorbox'
	],function( Sammy, ko, Menu, Overview, vent) {
	
	var app = this;

	app.content = ko.observable(null);
	app.popup = ko.observable(null);

	app.menu = ko.observable(new Menu(['index', 'users']))

	app.overview = function(){
		app.content(new Overview('Hello world'));
		app.menu().select('index');
	};
		// vent.on('change_profile', function() {
		// 	app.popup(new ChangeProfileVM());
		// 	$.colorbox({
	 //                    onClosed : function(){
	 //                        app.popup(null);
	 //                    },
	 //                    inline : true,
	 //                    href : '#change-profile'
	 //                });
		// });

	return app;
});		