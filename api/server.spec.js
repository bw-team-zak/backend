const supertest = require("supertest");

const server = require("./server");

describe("server", () => {
    it("can run the tests", () => {
      expect(true).toBeTruthy();
    });
  
    describe("GET /", () => {
      it("should return http status code 200 OK", async () => {
        const res = await supertest(server)
            .get("/")
              expect(res.statusCode).toBe(200);
      });
    })
})