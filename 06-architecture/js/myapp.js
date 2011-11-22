
Ext.Loader.setConfig({
	enabled	: true,
	paths	: {
		Bleext	: "js/Bleext"
	}
});

Ext.application({
	name		: "Bleext",
	appFolder 	: "js/Bleext",
	controllers	: ["Bleext.movies.controller.Movies"],
	launch		: function(){
		
		var win = Ext.create("Bleext.movies.view.MoviesWindow");
		win.show();
	}
});