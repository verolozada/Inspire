const db = require("../models");

module.exports = function(app) {
  // Get all articles COMPARE WITH THE MODEL.
  app.get("/api/articles", function(req, res) {
    db.Article.findAll({}).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });

  app.delete("/api/articles/:id", function(req, res) {
    db.Article.destroy({ where: { id: req.params.id } }).then(function(
      dbArticle
    ) {
      console.log(dbArticle);
      res.json(dbArticle);
    });
  });
};
