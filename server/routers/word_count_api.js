"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const word_counter_1 = require("../src/word_counter");
const router = express_1.default.Router();
exports.router = router;
router.post("/contraction", (req, res) => {
    console.log("request from user", new Date());
    res.send(JSON.stringify({ data: new word_counter_1.WordCounter(req.body.text).wordContainer }));
});
