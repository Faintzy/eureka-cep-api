const axios = require('axios');

const cep = "67145127";

describe('Routes test', () => {
    test("GET /cep", async () => {
        var req = await axios.get(`http://localhost:3030/cep/${cep}`);
        var reqJson = await req.data;

        expect(req.status).toBe(200);
        expect(typeof reqJson).toEqual("object");
        expect(typeof reqJson.success).toEqual("boolean");
    });

    test("PUT /cep/save", async () => {
        var req = await axios.get(`http://localhost:3030/cep/${cep}`);
        var reqJson = await req.data;

        expect(req.status).toBe(200);
        expect(typeof reqJson).toEqual("object");
        expect(typeof reqJson.success).toEqual("boolean");
    });
});