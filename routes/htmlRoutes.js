module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/write", function(req, res) {
    res.render("write");
  });
};
