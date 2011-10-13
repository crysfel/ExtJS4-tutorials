/**
 * @class Bleext.training.UsuarioPanel
 * @extends Ext.panel.Panel
 * requires 
 * @autor Crysfel Villa
 * @date Thu Oct 13 06:06:26 CEST 2011
 *
 * A class to show the user information
 *
 *
 **/

Ext.define("Bleext.training.UsuarioPanel",{
	extend		: "Ext.panel.Panel",
	
	title		: "User",
	width		: 300,
	height		: 250,

	initComponent	: function() {
		var me = this;
		
        me.html = "This is Jhon Doe!";

		me.callParent();
	}
});