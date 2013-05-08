define([ "sammy", "app", "vent"],function( Sammy, app, vent) {
	return Sammy(function(){
        this.get('#/index', function () { 
	  		app.overview();    	
        });

        this.get('#/users', function(){
			require(['users'], function(modul){
	    		modul.list();
	    	});
        });

		this.get('', function () {	
       	    window.location = '#/index';
        });
	});
});		