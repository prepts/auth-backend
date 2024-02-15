const userArr = [
  {
    id: 1,
    name: "thiru",
    email: "thiru@gmail.com",
    password: "softsuave#123",
  },
  {
    id: 2,
    name: "suresh",
    email: "suresh@gmail.com",
    password: "softsuave#123",
  },
];

const secret = "prep-secret-key";

const routes = require("express").Router();
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = userArr.find((data) => data.email === email);

    if (user) {
      if (user.password === password) {
        let token = jwt.sign({ id: user.email }, secret, {
          algorithm: "HS256",
          expiresIn: 300,
        });

        const decoded = jwt.decode(token);

        res.send({
          status: 200,
          message: "success",
          data: { token, expire: decoded.exp },
        });
      } else {
        res.send({ status: 500, message: "password not match" });
      }
    } else {
      res.send({ status: 400, message: "user Not Found" });
    }
  } else {
    res.send({ status: 500, message: "something is missing!" });
  }
};

routes.post("/login", login);

module.exports = routes;
