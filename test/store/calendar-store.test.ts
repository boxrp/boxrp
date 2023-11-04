// stores/counter.spec.ts
import { daysOfMonth } from '../../src/store/calendar-store';
import { describe, it, expect } from 'vitest';

describe('daysOfMonth', () => {

    it('First_Sunday', () => {
        const date = new Date(2023, 11, 3);
        const days = daysOfMonth(date);
        expect(days[0]).toBe(new Date(2023, 11, 1))
    });

})