const db = require("../models");

module.exports = function(app) {
  // Get all articles COMPARE WITH THE MODEL.
  app.get("/api/articles", function(req, res) {
    db.Article.findAll({}).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });
};
