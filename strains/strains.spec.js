const supertest = require("supertest");
const server = require("../api/server");
describe("GET /api/strains", () => {
    it("should return status code 200 and an array of 1970 strain objects", async () => {
        const res = await supertest(server)
        .get('/api/strains')
        expect(res.type).toBe('application/json')
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveLength(1970)
    });
});

describe("DELETE /api/strain/3", () => {
    it("should return status code 200 and delete strain with id = 3", async () => {
        const res = await supertest(server)
        .delete('/api/strains/3')
        expect(res.type).toBe('application/json')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({message: 'Successfully deleted strain.'})
    })
})