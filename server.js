import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
