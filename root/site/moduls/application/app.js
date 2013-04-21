define([ "sammy", "knockout", 
	'moduls/application/vm/index.js', 
	'vent', 
	'colorbox'
	],function( Sammy, ko, IndexPage, vent) {
	
	var app = this;

	app.content = ko.observable(null);
	app.popup = ko.observable(null);

	app.show_index = function(){
		app.content(new IndexPage('Hellow world'));
	};

// vent.on('change_profile', function() {
// 			app.popup(new ChangeProfileVM());
// 			$.colorbox({
// 	                    onClosed : function(){
// 	                        app.popup(null);
// 	                    },
// 	                    inline : true,
// 	                    href : '#change-profile'
// 	                });
// 		});

	return app;
});		