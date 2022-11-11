const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
// const { setupServer } = require("../src/server");
chai.should();

// ここに仕様を書いていく
// ■ コンセプト
// ・猫模様を検索したり、登録したりできるAPI
// ■ MVP
// ・DB登録されている猫模様情報を取得できる（GET）
// ・猫模様情報を作成できる（POST）
// ・猫模様情報を編集できる（PUT/PATCH）
// ・猫模様情報を削除できる（DELETE）
