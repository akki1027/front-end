import { Calculator } from '../src/js/calculator'

test('adds 1 + 2 to equal 3', () => {
    const calc = new Calculator();

    expect(calc.sum(1, 2)).toBe(3);
});

test('subtracts 10 - 6 to equal 4', () => {
    const calc = new Calculator();

    expect(calc.subtract(10, 6)).toBe(4);
});

test('multiplies 2 * 3 to equal 6', () => {
    const calc = new Calculator();

    expect(calc.multiply(2, 3)).toBe(6);
});

test('divides 21 / 7 to equal 3', () => {
    const calc = new Calculator();

    expect(calc.divide(21, 7)).toBe(2);
});
