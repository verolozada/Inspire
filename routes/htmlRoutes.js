const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/write", function(req, res) {
    res.render("write");
  });
  app.get("/about", function(req, res) {
    res.render("about");
  });
  app.post("/write", function(req, res){
    db.Article.create({
      author: req.body.name,
      title: req.body.title,
      body: req.body.body,
      photo: req.body.photo,
      charities: req.body.charities
    })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.json(error);
      });
  });
  app.get("/read", function(req, res){
    db.Article.findAll({}).then(function(dbArticles) {
      var article = {
        article: dbArticles
      };
      console.log(dbArticles);
      res.render("read", article);
    });
  });

  app.get("*", function(req,res){
    res.render("404");
  });
};
