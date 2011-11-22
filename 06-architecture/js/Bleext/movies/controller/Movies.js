/**
 * @class Bleext.movies.controller.Movies
 * @extends Ext.app.Controller
 * requires requires
 * @autor Crysfel Villa
 * @date Thu Nov 17 23:40:17 CET 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.movies.controller.Movies",{
	extend		: "Ext.app.Controller",
	models		: ["Bleext.movies.model.Movie"],
	stores		: ["Bleext.movies.store.Movies"],
	views		: [
		"Bleext.movies.view.MoviesWindow",
		"Bleext.movies.view.MoviesGrid"
	],

	init	: function() {
		var me = this;
		
		me.control({
			"window gridpanel"	: {
				itemclick	: me.showMovie
			}
		});
	},
	
	showMovie	: function(grid,record){
		Ext.Msg.alert("Alert","Now playing: '"+record.get("title")+"'");
	}
});