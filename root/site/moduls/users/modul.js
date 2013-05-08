define([
	"moduls/users/vm/list",
	"app",
	"vent"], 
	function(UserList, app, vent) {

	var users = ['Vasa', 'Peta', 'Gala'];
		
	return {
		list : function(){		
			app.content(new UserList(users));
			app.menu().select('users');
		}
	}
});	