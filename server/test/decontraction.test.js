import {CommonDecontraction} from '../src/common_decontraction.js'

describe('text for class "CommonDecontraction"', () => {
    test('return must be "would"', () => {
        expect(CommonDecontraction.deduceFullWord("they'd like")).toBe("would");
    });
    test('return must be "had"', () => {
        expect(CommonDecontraction.deduceFullWord("they'd seen")).toBe("had");
    });
    test('return must be "had"', () => {
        expect(CommonDecontraction.deduceFullWord("they'd known")).toBe("had");
    });
    test('return must be "am"', () => {
        expect(CommonDecontraction.deduceFullWord("I'm good")).toBe("am");
    });
    test('return must be "have"', () => {
        expect(CommonDecontraction.deduceFullWord("I've")).toBe("have");
    });
});

describe('The tests for CommonDecontraction class for negating a verb', () => {
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("isn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("mustn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("aren't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("wasn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("weren't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("haven't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("hasn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("hadn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("won't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("wouldn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("don't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("doesn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("didn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("can't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("couldn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("shouldn't")).toBe("not");
    });
    test('return must be "not"', () => {
        expect(CommonDecontraction.deduceFullWord("mightn't")).toBe("not");
    });    
})
