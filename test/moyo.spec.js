const { expect, assert } = require("chai");
const config = require("../knexfile");
const knex = require("knex")(config);
const fixtures = require("./fixtures");
const moyoModel = require("../src/moyo.model");
const MOYO_TABLE = moyoModel.MOYO_TABLE;

describe("moyo", () => {
    before(async () => {
        moyoFixture = fixtures.getMoyo();
        await knex(MOYO_TABLE)
            .insert(moyoFixture)
            .returning("id")
            .then((result) => {
                console.log("inserted test moyo");
            })
            .catch(console.error);
    });

    after(async () => {
        await knex(MOYO_TABLE)
            .where("id", moyoFixture.id)
            .returning("id")
            .del()
            .then((result) => {
                console.log("removed test moyo");
            })
            .catch(console.error);
    });

    describe("getAll", () => {
        it("should return an array of moyos", async () => {
            const moyos = await moyoModel.getAll();
            expect(moyos).to.be.an.instanceof(Array);
        });
    });

    describe("getById", () => {
        describe("when moyo exists", () => {
            it("should get moyo by id", async () => {
                const moyo = await moyoModel.getById(moyoFixture.id);
                console.log(moyo);
                expect(moyo).to.exist;
                expect(moyo.id).to.eq(moyoFixture.id);
            });
        });

        describe("when moyo doesn't exist", () => {
            it("should return undefined", async () => {
                const moyo = await moyoModel.getById(45000);
                expect(moyo).to.be.undefined;
            });
        });
    });
});
