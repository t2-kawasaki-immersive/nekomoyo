const config = require("../knexfile");
const knex = require("knex")(config);

const MOYO_TABLE = "moyo";

module.exports = {
    MOYO_TABLE,

    getAll() {
        return knex
            .select({
                id: "id",
                type: "type",
                image: "image",
                gene: "gene",
            })
            .from(MOYO_TABLE);
    },

    getById(id) {
        return knex
            .select({
                id: "id",
                type: "type",
                image: "image",
                gene: "gene",
            })
            .from(MOYO_TABLE)
            .where({
                id: id,
            })
            .first();
    },

    create(moyo) {
        return knex(MOYO_TABLE).insert(moyo);
    },

    update(id, moyo) {
        return knex(MOYO_TABLE).where("id", id).update(moyo);
    },

    delete(id) {
        return knex(MOYO_TABLE).where("id", id).del();
    },
};
