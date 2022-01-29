export function squareOrSquareRoot(array: number[]): number[] {
    return array.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num ** 2)
}