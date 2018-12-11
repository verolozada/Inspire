const db = require("../models");

function isUserAuthenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("Hello");
  }
}

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/write", isUserAuthenticated, function(req, res) {
    res.render("write");
  });
  app.post("/write", (req, res) => {
    db.Article.create({
      author: req.body.name,
      title: req.body.title,
      body: req.body.body,
      photo: req.body.photo
    })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.json(error);
      });
  });
  app.get("/read", (req, res) => {
    db.Article.findAll({}).then(function(dbArticles) {
      var article = {
        article: dbArticles
      };
      console.log(dbArticles);
      res.render("read", article);
    });
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", function(req, res) {
      res.redirect("write");
    })
  );
};
