// Dependiendo la variable de Entorno del Sistema, va a usar la
// configuración adecuada de base de datos del

// Tomar la configuración del entorno de node, si no existe usamos development
const env = process.env.NODE_ENV || 'development';

// env = 'development';
const knexfile = require('./knexfile');
const knex = require('knex');

// Mandar a llamar la configuración correcta de knexfile.js
module.exports = knex(knexfile[env]);