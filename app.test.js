const request = require("supertest");
const app = require("./app");

let server;

beforeAll(() => {
  server = app.listen(4000);
});

afterAll((done) => {
  server.close(done); 
});

test("Server should respond with 200", async () => {
  const res = await request(server).get("/");
  expect(res.statusCode).toBe(200);
});
