
Ext.Loader.setConfig({
	enabled	: true,
	paths	: {
		Ext		: "../common/js/Ext/src",
		Bleext	: "js/Bleext"
	}
});

Ext.require("Bleext.training.UsuarioPanel");

Ext.onReady(function(){
	var john = Ext.create("Bleext.training.UsuarioPanel",{
		renderTo	: Ext.getBody()
	});
	
	john.center();
});