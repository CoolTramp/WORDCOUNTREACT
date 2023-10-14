"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordCounter = void 0;
const common_decontraction_1 = require("./common_decontraction");
const x = {
    meta: { "1": 1, "3": 2, "4": 1, "5": 2, "8": 1, "all word": 7 },
    count: {
        "1": { i: 1 },
        "3": { has: 2 },
        "4": { like: 1 },
        "5": { would: 1, bread: 1 },
        "8": { bukowski: 1 },
    },
};
class WordCounter {
    constructor(text) {
        this.allWordCount = 0;
        this.wordContainer = {
            meta: { "all word": this.allWordCount },
            count: {},
        };
        this.meta = "meta";
        this.count = "count";
        this.META = this.wordContainer.meta;
        this.COUNT = this.wordContainer.count;
        this.regEx = /([A-Ża-ż0-9])+[']?([A-Ża-ż0-9])?|(\p{sc=Cyrillic})+/giu;
        this.text = "";
        this.shouldContinueFlag = true;
        this.text = text;
        this.startDistributed();
    }
    startDistributed() {
        let word = this.giveWordsFromText();
        do {
            if (Boolean(word[0].length)) {
                this.keyWordLengthCreator(word);
                this.recordWord(word);
            }
            word = this.giveWordsFromText();
        } while (this.shouldContinueLoop(word));
    }
    shouldContinueLoop(word) {
        return word.length > 0 && this.shouldContinueFlag;
    }
    /**
     * Extracts word or words from the text preserving their order.
     * @returns {Array} - Array with words for counting.
     */
    giveWordsFromText() {
        var _a;
        let word = (_a = this.regEx.exec(this.text)) === null || _a === void 0 ? void 0 : _a[0];
        if (!word)
            return [];
        if (this.isContraction(word)) {
            return this.divideContraction(word);
        }
        return [word.trim()];
    }
    /**
     * Define word in the contraction and new string
     * without the contraction.
     * For that define the contraction exactly
     * need to pass next word after the contraction
     * to CommonDecontraction.deduceFullWord();
     * @param {String} word - string with contraction
     * @example "I'd like"
     * @returns {Arrray} with decontraction
     * @example ["I", "would", "like"];
     */
    divideContraction(word) {
        var _a;
        let temp = "";
        temp = word;
        const match = (_a = this.regEx.exec(this.text)) === null || _a === void 0 ? void 0 : _a[0];
        if (match) {
            word = match;
        }
        else {
            this.shouldContinueFlag = false;
            return common_decontraction_1.CommonDecontraction.deduceFullWord(temp);
        }
        // console.log(
        //   CommonDecontraction.deduceFullWord(temp.concat(" ", word)).concat(word)
        // );
        return common_decontraction_1.CommonDecontraction.deduceFullWord(temp.concat(" ", word)).concat(word);
    }
    /**
     * Creates an empty object in this.wordContainer for each word length,
     * if the corresponding key for that word length doesn't already exist.
     * Empty object in the key "count" will be contain count of each word,
     * and the "meta" key will be contain sum of all count this word length.
     * @param {Array} words - An array of words.
     */
    keyWordLengthCreator(words) {
        words.forEach((word) => {
            if (!this.COUNT[word.length]) {
                this.COUNT[word.length] = {};
                this.META[word.length] = 0;
            }
        });
    }
    /**
     * Save the word as key's name in the wordContainer object
     * if it is not defined, and appoints count this word as 1.
     * Otherwise, increase the count by 1
     * @param {String} word - word for counting
     */
    recordWord(words) {
        words.forEach((word) => {
            this.incrementAllWordCount();
            if (word && typeof word === "string") {
                this.incrementWordCount(word.toLowerCase());
            }
        });
    }
    incrementAllWordCount() {
        this.META["all word"]++;
    }
    /**
     * Creat key in the this.COUNT that is the same name
     * as word and initializes value 1 that mean word's count.
     * If the word is in the this.COUNT increase count variable;
     * @param {Arraay} word - array with word for counting;
     */
    incrementWordCount(word) {
        if (!this.COUNT[word === null || word === void 0 ? void 0 : word.length][word]) {
            this.COUNT[word === null || word === void 0 ? void 0 : word.length][word] = 1;
            this.META[word === null || word === void 0 ? void 0 : word.length]++;
        }
        else {
            this.COUNT[word === null || word === void 0 ? void 0 : word.length][word]++;
            this.META[word === null || word === void 0 ? void 0 : word.length]++;
        }
    }
    /**
     * Check if the word contains an apostrophe (contraction)
     * @param {string} word - The word to check
     * @returns {boolean} - True if the word contains an apostrophe, otherwise false
     */
    isContraction(word) {
        if (!word)
            return null;
        const contractionRegExp = /'/;
        return word.search(contractionRegExp) >= 0;
    }
}
exports.WordCounter = WordCounter;
// const text = "I'd like bread. Has has Bukowski";
// const text = "I'd "
// const text = "would bread would"
// let contrainer = new WordCounter(text);
// console.log(contrainer.wordContainer);
// import { CommonDecontraction } from './common_decontraction.js';
