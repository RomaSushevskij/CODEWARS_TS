import {squareOrSquareRoot} from "./squareOrSquareRoot";

test('squareOrSquareRoot should return correct result', () => {
    const result = squareOrSquareRoot([4, 3, 9, 7, 2, 1])
    expect(result).toStrictEqual([2, 9, 3, 49, 4, 1])
})