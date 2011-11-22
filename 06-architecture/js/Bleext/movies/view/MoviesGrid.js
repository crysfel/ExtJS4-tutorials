/**
 * @class Bleext.movies.view.MoviesGrid
 * @extends Ext.grid.Panel
 * requires 
 * @autor Crysfel Villa
 * @date Thu Nov 17 22:49:33 CET 2011
 *
 * The movies grid
 *
 *
 **/

Ext.define("Bleext.movies.view.MoviesGrid",{
	extend		: "Ext.grid.Panel",
	
	store		: "Bleext.movies.store.Movies",
	border		: false,

	initComponent	: function() {
		var me = this;
		
		me.columns = [
			{header:"Image",dataIndex:"tns",width:100,renderer:me.showImage},
			{header:"Title",dataIndex:"title",width:180},
			{header:"Author",dataIndex:"author",flex:1},
			{header:"Release date",dataIndex:"releaseDate",flex:1},
			{header:"Duration",dataIndex:"duration",width:60}
		];
        
		me.callParent();
	},
	
	showImage		: function(value,record){
		return '<img src="'+value+'" style="width:100px" />';
	}
});