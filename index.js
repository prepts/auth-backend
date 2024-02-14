const express = require("express");
const app = express();
const cors = require('cors')
const authRoutes = require('./src/routes/authRoutes')
const testRoutes = require('./src/routes/testRoutes')
app.use(express.json());
app.use(cors())
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use('/auth', authRoutes)
app.use('/test', testRoutes)
app.listen(8000);
