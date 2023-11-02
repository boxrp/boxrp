import { expect, test } from 'vitest';

test('adds 1 + 2 to equal 3', () => {
    const sum = 1 + 2;
    console.log("sum: ", sum);
    expect(sum).toBe(3);
});