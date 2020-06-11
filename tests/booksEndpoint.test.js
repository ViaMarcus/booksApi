const app = require("../app");
const supertest = require("supertest");
const { expect, factory } = require("./test_helper");
const jsonResponse = require("./jsonResponse");

let server, request, response;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

beforeEach(async () => {
  await factory.createMany("Book", 2, [
    { id: 1, title: "Dune" },
    { id: 2, title: "The Hobbit" },
  ]);
});

afterEach(async () => {
  await factory.cleanUp();
});

describe("GET /api/v1/books", () => {
  beforeEach(async () => {
    response = await request.get("/api/v1/books");
  });

  it("responds with status 200", () => {
    expect(response.status).to.equal(200);
  });

  it("responds with a collection of books", () => {
    const expectedBody = {
      books: [
        { id: 1, title: "Dune", author: { name: "Frank Herbert" } },
        { id: 2, title: "The Hobbit", author: { name: "J.R.R. Tolkien" } },
      ],
    };
    expect(jsonResponse(response)).to.equal(JSON.stringify(expectedBody));
  });
});
