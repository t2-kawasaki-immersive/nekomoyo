const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
const config = require("../knexfile");
const knex = require("knex")(config);
const MOYO_TABLE = "moyo";
chai.should();

// ここに仕様を書いていく
// ■ コンセプト
// ・猫模様を検索したり、登録したりできるAPI
// ■ MVP
// - [x] DB登録されている猫模様情報を取得できる（GET）
// - [x] 猫模様情報を作成できる（POST）
// - [ ] 猫模様情報を編集できる（PUT/PATCH）
// - [ ] 猫模様情報を削除できる（DELETE）

const server = setupServer();

describe("Nekomoyo API Server", () => {
    let request;

    let moyoData = [
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
    ];

    beforeEach(() => {
        request = chai.request(server);
    });

    describe("GET /api/nekomoyo", () => {
        it("should return all neko moyo.", async () => {
            const res = await request.get("/api/nekomoyo");
            Object.keys(JSON.parse(res.text)).length.should.deep.equal(3);
        });
    });

    describe("POST /api/nekomoyo", () => {
        const newMoyo = {
            id: 999,
            type: "brown",
            image: "url_path",
            gene: "wwOO(O)ss",
        };

        afterEach(async () => {
            await knex(MOYO_TABLE)
                .where("id", newMoyo.id)
                .returning("id")
                .del()
                .then((result) => {
                    console.log("removed test moyo");
                })
                .catch(console.error);
        });

        it("should create new neko moyo.", async () => {
            request = chai.request(server);
            const res = await request.post("/api/nekomoyo").send(newMoyo);
            JSON.parse(res.text).should.deep.equal(newMoyo);
        });
    });

    describe("PATCH /api/nekomoyo/:id", () => {
        it("should change neko moyo gene.", async () => {
            const id = 1;
            const gene = { gene: "updatedGene" };
            const res = await request.patch("/api/nekomoyo/1").send(gene);

            const moyo = await knex(MOYO_TABLE)
                .select()
                .where("id", id)
                .first();
            moyo.gene.should.equal(gene.gene);

            await knex(MOYO_TABLE)
                .where("id", id)
                .update({ gene: "W-" })
                .then((result) => {
                    console.log("fix gene");
                })
                .catch(console.error);
        });
    });
});
