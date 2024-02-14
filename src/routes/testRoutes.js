const checkToken = require("../utils/checkToken");

const routes = require("express").Router();

const greetings = (req, res) => {
  res.send({ status: 200, message: `Hi ${req.body?.name}` });
};

const about = (req, res) => {
  res.send({ status: 200, message: "this is about page" });
};

routes.post("/greetings", checkToken, greetings);
routes.get("/about", about);

module.exports = routes;
