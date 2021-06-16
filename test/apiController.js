let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);

describe("Books API", function () {
  it("Should Fecth all the Books", (done) => {
    chai
      .request(server)
      .get("/api/books/angular")
      .end((err, result) => {
        result.should.have.status(200);
        result.should.have.instanceOf(Object);
        result.body.should.have.instanceOf(Array);
        result.body.length.should.eq(10);
        result.body[0].should.have.keys(
          "id",
          "authors",
          "description",
          "imageLink",
          "language",
          "pageCount",
          "publisher",
          "title"
        );
        done();
      });
  });
});
