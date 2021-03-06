'use strict';
let filePluginLib = require('mongoose-file');
let mongoose = require('mongoose');
let path = require('path');


let Schema = mongoose.Schema;
let filePlugin = filePluginLib.filePlugin;
let make_upload_to_model = filePluginLib.make_upload_to_model;
  


let uploads_base = path.join(__dirname, "uploads");
let uploads = path.join(uploads_base, "u");

//////////////////////////////////////////////////////////////////////
///////////***********     llamo a moongoose        ****//////////////
//////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////
////////***********     creo el esquema / categorias        ****//////////////
//////////////////////////////////////////////////////////////////////////////
let Categorias = new Schema({
	name:        String,
	slug:        String,
	descripcion: String,
	imagen:      String,
	createdAt:   { type: Date, default: Date.now },
});



//////////////////////////////////////////////////////////////////////////////
////////***********     funcion que sube la imagen	        ****//////////////
//////////////////////////////////////////////////////////////////////////////
Categorias.plugin(filePlugin, {
    name: "photo",
    upload_to: make_upload_to_model(uploads, 'photos'),
    relative_to: uploads_base
});

//////////////////////////////////////////////////////////////////////////////
////////***********    exporto el esquema        ****/////////////////////////
//////////////////////////////////////////////////////////////////////////////
module.exports= mongoose.model('Categorias', Categorias)