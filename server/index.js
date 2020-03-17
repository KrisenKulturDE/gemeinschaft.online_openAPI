const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");
require("dotenv").config();
const checkAuth = require("./middlewares/check-auth");

const app = express();

const port = process.env.PORT || 5000;

if (process.env.USER && process.env.PASSWORD) {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        user: process.env.USER,
        password: process.env.PASSWORD
      }
    })
    .then(() => console.log(`Database connected successfully with CosmosDB`))
    .catch(err => console.log(err));
} else {
  //connect to the database
  mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch(err => console.log(err));
}

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use(checkAuth);

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
