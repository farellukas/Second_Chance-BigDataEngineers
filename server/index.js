const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const mongoose = require("mongoose");
const { response } = require("express");
require("dotenv").config();

app.use(cors());

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

const commentSchema = new mongoose.Schema({
  timestamp: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

app.get("/api/comments", async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});

app.post("/api/new_comment", async (req, res) => {
  const new_comment = new Comment({
    timestamp: req.query.timestamp,
    text: req.query.text,
  });

  try {
    await new_comment.save();
    res.send(new_comment);
  } catch (error) {
    res.status(500).send(error);
  }
});
