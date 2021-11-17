const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());



app.listen(port, () => {
    console.log(`The server 🙈 is listening on port ${port}`);
});
