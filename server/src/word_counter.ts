import { CommonDecontraction } from "./common_decontraction";

type Meta = {
  [key: string]: number;
};

type Count = {
  [key: string]: { [key: string]: number };
};

type Words = {
  meta: Meta;
  count: Count;
};

const x: Words = {
  meta: { "1": 1, "3": 2, "4": 1, "5": 2, "8": 1, "all word": 7 },
  count: {
    "1": { i: 1 },
    "3": { has: 2 },
    "4": { like: 1 },
    "5": { would: 1, bread: 1 },
    "8": { bukowski: 1 },
  },
};

export class WordCounter {
  private allWordCount: number = 0;
  public wordContainer: Words = {
    meta: { "all word": this.allWordCount },
    count: {},
  };
  meta: string = "meta";
  count = "count";
  private META: Meta = this.wordContainer.meta;
  private COUNT: Count = this.wordContainer.count;
  private regEx = /([A-Ża-ż0-9])+[']?([A-Ża-ż0-9])?|(\p{sc=Cyrillic})+/giu;

  private text: string = "";
  private shouldContinueFlag: boolean = true;

  constructor(text: string) {
    this.text = text;
    this.startDistributed();
  }

  startDistributed() {
    let word: string[] = this.giveWordsFromText();
    do {
      if (Boolean(word[0].length)) {
        this.keyWordLengthCreator(word);
        this.recordWord(word);
      }
      word = this.giveWordsFromText();
    } while (this.shouldContinueLoop(word));
  }
  private shouldContinueLoop(word: string[]): boolean {
    return word.length > 0 && this.shouldContinueFlag;
  }
  /**
   * Extracts word or words from the text preserving their order.
   * @returns {Array} - Array with words for counting.
   */
  private giveWordsFromText(): string[] {
    let word = this.regEx.exec(this.text)?.[0];

    if (!word) return [];

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
  private divideContraction(word: string): string[] {
    let temp: string = "";
    temp = word;

    const match = this.regEx.exec(this.text)?.[0];
    if (match) {
      word = match;
    } else {
      this.shouldContinueFlag = false;
      return CommonDecontraction.deduceFullWord(temp);
    }
    // console.log(
    //   CommonDecontraction.deduceFullWord(temp.concat(" ", word)).concat(word)
    // );
    return CommonDecontraction.deduceFullWord(temp.concat(" ", word)).concat(
      word
    );
  }
  /**
   * Creates an empty object in this.wordContainer for each word length,
   * if the corresponding key for that word length doesn't already exist.
   * Empty object in the key "count" will be contain count of each word,
   * and the "meta" key will be contain sum of all count this word length.
   * @param {Array} words - An array of words.
   */
  private keyWordLengthCreator(words: string[]) {
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
  private recordWord(words: string[]) {
    words.forEach((word) => {
      this.incrementAllWordCount();

      if (word && typeof word === "string") {
        this.incrementWordCount(word.toLowerCase());
      }
    });
  }
  private incrementAllWordCount() {
    this.META["all word"]++;
  }
  /**
   * Creat key in the this.COUNT that is the same name
   * as word and initializes value 1 that mean word's count.
   * If the word is in the this.COUNT increase count variable;
   * @param {Arraay} word - array with word for counting;
   */
  private incrementWordCount(word: string) {
    if (!this.COUNT[word?.length][word]) {
      this.COUNT[word?.length][word] = 1;
      this.META[word?.length]++;
    } else {
      this.COUNT[word?.length][word]++;
      this.META[word?.length]++;
    }
  }
  /**
   * Check if the word contains an apostrophe (contraction)
   * @param {string} word - The word to check
   * @returns {boolean} - True if the word contains an apostrophe, otherwise false
   */
  private isContraction(word: string): boolean | null {
    if (!word) return null;

    const contractionRegExp = /'/;
    return word.search(contractionRegExp) >= 0;
  }
}
// const text = "I'd like bread. Has has Bukowski";
// const text = "I'd "
// const text = "would bread would"
// let contrainer = new WordCounter(text);
// console.log(contrainer.wordContainer);

// import { CommonDecontraction } from './common_decontraction.js';
