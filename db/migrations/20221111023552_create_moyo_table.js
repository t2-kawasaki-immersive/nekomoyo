/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("moyo", function (table) {
        table.increments("id").primary();
        table.text("type").notNullable();
        table.text("image");
        table.text("gene");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable("moyo");
};
