const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://YOUR-FRONTEND.vercel.app"
  ]
}));

app.use(express.json());

app.post("/send-email", async (req, res) => {
  // your email code
});

module.exports = app;