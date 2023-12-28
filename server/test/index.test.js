/*
supertest Simula ser el cliente y permite ver las rtas de server para ver si matchea entre lo esperado y recibido,
al manejar asincro asinc await o promisses
*/
const session = require("supertest");
const serverTinyTourist = require("../src/serverTinyTourist");

const agent = session(serverTinyTourist);

describe("A) ROUTES TEST", () => {
  describe('A1) GET COUNTRIES -> This test will check the "GET" method at route |-> /countries/ <-|', () => {
    it("01.- Should return an array of countries", async () => {
      const response = await agent.get("/countries/");
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('A2) GET COUNTRIES -> This test will check the "GET" method at route |-> /countries/:id <-|', () => {
    it("01.- Should respond with status 200.", async () => {
      await agent.get("/countries/VEN").expect(200);
    });

    it("02.- Should obtain 13 properties: *id, *name, *officialName, *flag, *continent, *capital, *subregion, *area, *maps, *population, *timezones, *coatOfArms, *activities.", async () => {
      const { body } = await agent.get("/countries/VEN");
      //  console.log(body);
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("officialname");
      expect(body).toHaveProperty("flag");
      expect(body).toHaveProperty("continent");
      expect(body).toHaveProperty("capital");
      expect(body).toHaveProperty("subregion");
      expect(body).toHaveProperty("area");
      expect(body).toHaveProperty("maps");
      expect(body).toHaveProperty("population");
      expect(body).toHaveProperty("timezones");
      expect(body).toHaveProperty("coatOfArms");
      expect(body).toHaveProperty("Activities");
    });

    it("03.- If an error occurs, responds with status 404", async () => {
      const response = (await agent.get("/countries/123FERD")).statusCode;
      //console.log(response) viene de statusCode;
      expect(response).toBe(404);
    });
  });

  describe('A3) GET ACTIVITIES -> This test will check the "GET" method at route |-> /activities/ <-|', () => {
    it("01.- Should return an array of activities", async () => {
      const response = await agent.get("/activities/");
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });

    it("02.- Should obtain 07 properties: *id, *name, *difficulty, *duration, *season, *description, *country.", async () => {
      const { body } = await agent.get("/activities/");
      body.map((activity) => {
        expect(activity).toHaveProperty("name");
        expect(activity).toHaveProperty("id");
        expect(activity).toHaveProperty("difficulty");
        expect(activity).toHaveProperty("duration");
        expect(activity).toHaveProperty("season");
        expect(activity).toHaveProperty("description");
        expect(activity).toHaveProperty("country");
      });
    });
  });

  const countryOne = {
    id: "POL",
    name: "Dance",
    difficulty: 2,
    duration: 1,
    season: "Autumn",
    description: "You'll dance all night",
  };
  describe('A4) POST ACTIVITIES -> This test will check the "POST" method at route |-> /activities/ <-|', () => {
    it("01.- Should be able to post a new activity associated with a country.", async () => {
      const { body } = await agent.post("/activities/").send(countryOne);
      const expectedProperties = {
        description: "You'll dance all night",
        difficulty: 2,
        duration: 1,
        name: "Dance",
        season: "Autumn",
      };
      expect(body).toEqual(expect.objectContaining(expectedProperties));
    });

    it("02.- Should include specific properties in the response after posting a new activity associated with a country.", async () => {
      const { body } = await agent.post("/activities/").send(countryOne);

      const expectedProperties = {
        createdAt: expect.any(String),
        createdInDb: true,
        date_added: "2023-12-28",
        updatedAt: expect.any(String),
        summary: expect.stringContaining(
          "Difficulty 💪🏼: 2. Season 🌤️: Autumn. Duration 🕑: 1. Description ✍🏼: You'll dance all night. Added on 🗓️: 2023-12-28CREATED true"
        ),
      };
      expect(body).toEqual(expect.objectContaining(expectedProperties));
    });

    it('03.- Should validate the "name" field during a POST request', async () => {
      const invalidActivity = {
        name: "Matar",
        difficulty: 5,
        duration: 1,
        season: "Autumn",
        description: "Be care",
        id: "COL",
      };
      await agent.post("/activities/").send(invalidActivity).expect(400);
    });
  });
});
