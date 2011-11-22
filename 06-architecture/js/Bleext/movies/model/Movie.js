/**
 * @class Bleext.movies.model.Movie
 * @extends Ext.data.Model
 * requires 
 * @autor Crysfel Villa
 * @date Thu Nov 17 21:53:36 CET 2011
 *
 * The movie model
 *
 *
 **/

Ext.define("Bleext.movies.model.Movie",{
	extend		: "Ext.data.Model",
	fields		: [
		{name:"author",type:"string"},
		{name:"tns",type:"string"},
		{name:"title",type:"string"},
		{name:"url",type:"string"},
		{name:"duration",type:"float"},
		{name:"releaseDate",type:"date",formatDate:"Y-m-d"},
		{name:"description",type:"string"}
	]
});