/**
 * @class Bleext.movies.view.MoviesWindow
 * @extends Ext.window.Window
 * requires requires
 * @autor Crysfel Villa
 * @date Thu Nov 17 23:44:09 CET 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.movies.view.MoviesWindow",{
	extend		: "Ext.window.Window",
	
	layout		: "fit",
	title		: "Movies",
	width		: 550,
	height		: 350,
	
	initComponent	: function(){
		var me = this;
		
		me.items = Ext.create("Bleext.movies.view.MoviesGrid");
		
		me.callParent();
	}
});