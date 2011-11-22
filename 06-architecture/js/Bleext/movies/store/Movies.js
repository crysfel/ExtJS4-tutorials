/**
 * @class Bleext.movies.store.Movies
 * @extends Ext.data.Store
 * requires requires
 * @autor Crysfel Villa
 * @date Thu Nov 17 22:50:25 CET 2011
 *
 * Movies store
 *
 *
 **/

Ext.define("Bleext.movies.store.Movies",{
	extend		: "Ext.data.Store",
	model		: "Bleext.movies.model.Movie",
	
	autoLoad	: true,
	proxy		: {
		type	: "ajax",
		url		: "services/movies.json",
		reader	: {
			type	: "json",
			root	: "data"
		}
	}
});