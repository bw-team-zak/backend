const supertest = require("supertest");

const server = require("../api/server");
const db = require("../data/db-config.js");
var token = ""
const user = {
    id:1, 
    username:"bob",
    age:30,
    experienced:true,
    location:"Hawaii",
    race:null,
    symptoms:null, 
    flavor:null
}

describe("POST /api/users/register", () => {
    it("should return status code 201, and a user object", async () => {
        const res = await supertest(server)
        .post("/api/users/register")
        .send({
            username:"bob",
            password:"abc",
            age:30,
            experienced:true,
            location:"Hawaii"
    })
        expect(res.type).toBe('application/json')
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual(user)
    })
})

describe("GET /api/users", () => {
    it("should return status code 200 and users", async () => {
        const res = await supertest(server)
        .get('/api/users')
        expect(res.type).toBe('application/json')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual([user])
    });
});

describe("PUT /api/users/1", () => {
    it("should return status code 200, and a user object", async () => {
        const res = await supertest(server)
        .put("/api/users/1")
        .send({
            symptoms: {
                pain: "false",
                other: "false",
                nausea: "false",
                stress: "false",
                fatigue: "false",
                seizure: "false",
                insomnia: "false",
                eyePressure: "false",
                muscleSpasm: "false",
                inflammation: "false",
                lackOfAppetite: "false"
        },
            race: {
                race1: "false",
                race2: "false",
                race3: "false"
        },
            flavor: {
                pine: "false",
                minty: "false",
                nutty: "false",
                spicy: "false",
                sweet: "false",
                citrus: "false",
                earthy: "false",
                herbal: "false",
                pungent: "false"
        }
    })
        expect(res.type).toBe('application/json')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({
            id: 1,
            username: "bob",
            location: "Hawaii",
            age: 30,
            experienced: true,
            symptoms: {
                pain: "false",
                other: "false",
                nausea: "false",
                stress: "false",
                fatigue: "false",
                seizure: "false",
                insomnia: "false",
                eyePressure: "false",
                muscleSpasm: "false",
                inflammation: "false",
                lackOfAppetite: "false"
            },
            race: {
                race1: "false",
                race2: "false",
                race3: "false"
            },
            flavor: {
                pine: "false",
                minty: "false",
                nutty: "false",
                spicy: "false",
                sweet: "false",
                citrus: "false",
                earthy: "false",
                herbal: "false",
                pungent: "false"
            }
        })
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

