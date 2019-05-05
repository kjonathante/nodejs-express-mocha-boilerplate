"user strict";

require("should");
const request = require("supertest");
const config = require("../../config");
const service = require("../../server/service")(config);

describe("The express service", () => {
  describe("PUT /foo", () => {
    it("should return HTTP 404", done => {
      request(service)
        .put("/foo")
        .expect(404, done);
    });
  });
  describe("PUT /service/:intent/:port", () => {
    it("should return HTTP 200 with valid result", done => {
      request(service)
        .put("/service/test/port")
        .set("X-APP-API-TOKEN", config.appApiToken)
        .set("X-APP-SERVICE-TOKEN", "something")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          res.body.result.should.startWith("test at");
          return done();
        });
    });
    it("should return HTTP 403 with no API Token provided", done => {
      request(service)
        .put("/service/test/port")
        .expect(403)
        .end(done);
    });
    it("should return HTTP 400 with no service token provided", done => {
      request(service)
        .put("/service/test/port")
        .set("X-APP-API-TOKEN", config.appApiToken)
        .expect(400)
        .end(done);
    });
  });
  describe("GET /service/:location", () => {
    it("should return HTTP 200 and a reply with a valid result", done => {
      request(service)
        .get("/service/vienna")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          res.body.result.should.exist;
          return done();
        });
    });
  });
});
