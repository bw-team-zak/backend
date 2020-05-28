const supertest = require("supertest");

const server = require("../api/server");
const db = require("../data/db-config.js");
var token = ""

describe("POST /api/users/register", () => {
    it("should return status code 201, and a username", async () => {
        const res = await supertest(server)
        .post("/api/users/register")
        .send({username:"bob",password:"abc"})
        expect(res.type).toBe('application/json')
        expect(res.statusCode).toBe(201)
        expect(res.body.username).toBe('bob')
    })
})

describe("POST /api/users/login", () => {
    afterEach(async () => {
        await db('users').truncate()
    })
    it("should return status code 200 and token", async () => {
        const res = await supertest(server)
        .post("/api/users/login")
        .send({username:"bob",password:"abc"})
        expect(res.type).toBe('application/json')
        expect(res.statusCode).toBe(200)
        expect(res.body.token).toBeTruthy()
        token = res.body.token
    });
});

describe("GET /api/users", () => {
    it("should return status code 200 and users", async () => {
        const res = await supertest(server)
        .get('/api/users')
        expect(res.type).toBe('application/json')
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveLength(7)
    });
});
