import express from "express";
import { router } from "./routers/word_count_api";

import cors from "cors";
const app = express();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`the server "word count" was started in the port ${PORT}`);
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/", router);
