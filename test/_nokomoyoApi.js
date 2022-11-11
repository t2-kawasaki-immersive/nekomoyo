const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
chai.should();

// ここに仕様を書いていく
// ■ コンセプト
// ・猫模様を検索したり、登録したりできるAPI
// ■ MVP
// - [x] DB登録されている猫模様情報を取得できる（GET）
// - [ ] 猫模様情報を作成できる（POST）
// - [ ] 猫模様情報を編集できる（PUT/PATCH）
// - [ ] 猫模様情報を削除できる（DELETE）

const server = setupServer();

describe("Nekomoyo API Server", () => {
    let request = chai.request(server);

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

    describe("GET /api/nekomoyo", () => {
        it("should return all neko moyo.", async () => {
            const res = await request.get("/api/nekomoyo");
            JSON.parse(res.text).should.deep.equal(moyoData);
        });
    });
});
