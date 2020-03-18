import * as express from "express";
import * as bodyParser from "body-parser";
import mongoose = require("mongoose");
import routes from "./routes/api";
import * as dotenv from "dotenv";
import errorMiddleware from "./middlewares/error";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// connect to the database
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "coronadb"
  })
  // tslint:disable-next-line:no-console
  .then(() => console.log(`Database connected successfully`))
  // tslint:disable-next-line:no-console
  .catch(err => console.log(err));

// since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api", routes);

app.use(errorMiddleware);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on port ${port}`);
});
