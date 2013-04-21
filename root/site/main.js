
require.config({
    paths: {
        "jquery": "vendor/jquery-latest",
        "knockout": "vendor/knockout/knockout-min",
        "ko.mapping" : "vendor/knockout/knockout.mapping",
        "text": "vendor/require/text",
        "sammy" : "vendor/sammy-latest.min",
        "colorbox" : "vendor/colorbox/jquery.colorbox-min",

        "vent" : "libs/eventaggregator",
        "stringTemplateEngine": "libs/stringTemplateEngine",

        // "catalog" : "moduls/catalog/modul",

        "app" : "moduls/application/app"
    },
    shim: {
        "ko.mapping" : ["knockout"],
        "stringTemplateEngine": ["knockout"],
        "sammy" : ["jquery"],
        "colorbox" : ["jquery"]
    }
});

require([
	"knockout",
    "jquery",
    "app",
    "router",
    "stringTemplateEngine"
    ], function(ko, $, app, router){        
		$(function() {
			ko.applyBindings(app);
            router.run();
		});	
});