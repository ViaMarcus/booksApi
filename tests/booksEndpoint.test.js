const app = require("../app");
const supertest = require("supertest");
const { expect, factory } = require("./test_helper");
const jsonResponse = require("./jsonResponse");

let server, request, response, token;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

beforeEach(async () => {
  const author = await factory.create("Author", {
    id: 69,
    name: "J.R.R. Tolkien",
  });
  await factory.createMany("Book", 2, [
    { id: 1, title: "Dune", authorId: author.id },
    { id: 2, title: "The Hobbit", authorId: author.id },
  ]);
});

afterEach(async () => {
  await factory.cleanUp();
});

describe("GET /api/v1/books", () => {
  describe("for authenticated", () => {
    beforeEach(async () => {
      await request
        .post("/api/v1/auth/login")
        .send({ email: "user@mail.com", password: "password" })
        .then((response) => {
          token = response.body.token;
        });
      response = await request.get("/api/v1/books").set("Authorization", token);
    });

    it("responds with status 200", () => {
      expect(response.status).to.equal(200);
    });

    it("responds with a collection of books", () => {
      const expectedBody = {
        books: [
          { id: 1, title: "Dune", author: { name: "J.R.R. Tolkien" } },
          { id: 2, title: "The Hobbit", author: { name: "J.R.R. Tolkien" } },
        ],
      };
      expect(jsonResponse(response)).to.equal(JSON.stringify(expectedBody));
    });
  });

  describe("for non-authenticated", () => {
    it("should respond with 401", () => {
      expect(response.status).to.equal(401);
    });
  });
});
