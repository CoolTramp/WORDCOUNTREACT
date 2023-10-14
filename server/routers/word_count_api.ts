import express from "express";
import { WordCounter } from "../src/word_counter";

const router = express.Router();

router.post("/contraction", (req, res) => {
  console.log("request from user", new Date());
  res.send(
    JSON.stringify({ data: new WordCounter(req.body.text).wordContainer })
  );
});

export { router };
