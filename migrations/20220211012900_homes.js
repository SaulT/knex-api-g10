/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// ** EXPORTS.UP **
/* Aquí colocaremos toda la lógica de creación de tablas, actualización de campos, etc. */
exports.up = function(knex) {
  return knex.schema.hasTable("homes").then(function(exists){
    if (!exists) {
      // Si no existe, creo mi tabla
      return knex.schema.createTable("homes", function (table){
        //id
        table.increments("house_id").primary();
        //title
        table.string("title").notNullable();
        //description
        table.text("description");
        //guest
        table.integer("guest")
        //address
        table.text("address")
        //active
        table.boolean("active").notNullable().defaultTo(true);
        //created_at
        table.timestamp("created_at").defaultTo(knex.fn.now());
      })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// ** EXPORTS.DOWN **
/* Aquí colocaremos toda la logica que nos va a permitir deshacer los cambios de arriba (exports.up) */
exports.down = function(knex) {
  
};
