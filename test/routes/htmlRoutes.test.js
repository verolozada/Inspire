const chai = require("chai");
const expect = require("chai").expect;
const server = require("../../server");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("HTML Routes", function() {
  this.beforeEach(function() {
    requests = chai.request(server);
  });

  // Test Home Page
  it("should /GET the home page", () => {
    requests.get("/").end((err, res) => {
      var statusCode = res.status;

      // Assertions
      expect(statusCode).to.equal(200);
    });
  });

  // Test write Page
  it("should /GET the write page", () => {
    requests.get("/write").end((err, res) => {
      var statusCode = res.status;

      // Assertions
      expect(statusCode).to.equal(200);
    });
  });

  // Test Read Page
  it("should /GET the about page", () => {
    requests.get("/read").end((err, res) => {
      var statusCode = res.status;

      // Assertions
      expect(statusCode).to.equal(200);
    });
  });

  // Test About Page
  it("should /GET the about page", () => {
    requests.get("/about").end((err, res) => {
      var statusCode = res.status;

      // Assertions
      expect(statusCode).to.equal(200);
    });
  });
});