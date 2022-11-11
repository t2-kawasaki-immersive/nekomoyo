/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    await knex("moyo").del();
    await knex("moyo").insert([
        {
            id: 1,
            type: "white",
            image: "url_path1",
            gene: "W-",
        },
        {
            id: 2,
            type: "black",
            image: "url_path2",
            gene: "wwoo(o)aass",
        },
        {
            id: 3,
            type: "kiji-mike",
            image: "url_path2",
            gene: "wwOoA-S-",
        },
    ]);
};
