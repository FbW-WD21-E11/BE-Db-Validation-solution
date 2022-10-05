import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import pokedexRoute from "./routes/pokedex.js";

dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(dbConnectionString)
  .then(() => {
    console.log("Database ... connected!");
  })
  .catch((error) => {
    console.log("Database ... unable to connect");
    console.log(error);
  });

const app = express();
const port = 3001;

app.use(express.json());

app.use("/pokedex", pokedexRoute);

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
