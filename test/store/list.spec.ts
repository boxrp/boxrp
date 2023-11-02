import { expect, test } from 'vitest';

test('group', () => {
    const sum = 1 + 2;
    console.log("sum: ", sum);
    expect(sum).toBe(3);
});