// El modelo trae los datos de la base de datos
// No se encarga de validar datos, ni resolver promesas,
// eso es trabajo del controlador en MVC.

// Paso #1 Necesito traer la configuración de entorno de Knex y
// los detalles de la conexión a base de datos
const knex = require('../config');

// Paso #2 Es crear una función que traiga los datos que yo requiera de la base de datos
const create = (bodyHome) => {
  // Crear un registro en la tabla homes
  // bodyHome es un objeto que contiene los valores a insertar

  return knex
    .insert(bodyHome) // ¿Qué datos voy a insertar? (title: 'Título', address: 'x')
    .into('homes') // ¿De qué tabla? = Homes
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'active', 'created_at'])
}

// Paso #3 Exportar mis funciones para que sean accesibles desde el controlador
module.exports = {
  create
}