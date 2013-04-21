define([ "sammy", "app", "vent"],function( Sammy, app, vent) {
	return Sammy(function(){
        this.get('#/index', function () { 			
			app.show_index();	    	
        });


		// this.get('#/index', function () { 
		// 	require(['overview'], function(modul){
	 //    		modul.showIndex();
	 //    	});
		// 	vent.trigger('app:render', 'overview');
	    	
  //       });


		this.get('', function () {	
       	    window.location = '#/index';
        });
	});
});		