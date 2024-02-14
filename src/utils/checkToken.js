const jwt = require("jsonwebtoken");
const secret = "prep-secret-key";
const checkToken = (req, res, next) => {
  const token = req.get("authorization")?.slice(7);
  if (token) {
    jwt.verify(token, secret, (err, result) => {
      if (err) {
        res.status(401).send({ message: "Invalid token!" });
      }
      req.result = result;
      next();
    });
  } else {
    res.status(401).send({ message: "Access Denied!" });
  }
};

module.exports = checkToken;
