import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp', () => {
    it('should clamp a value within the specified range', () => {
        expect(clamp(5, 1, 10)).to.equal(5);
        expect(clamp(0, 1, 10)).to.equal(1);
        expect(clamp(15, 1, 10)).to.equal(10);
    });
    it('should check boundaries', () => {
        expect(clamp(1, 1, 10)).to.equal(1);
        expect(clamp(10, 1, 10)).to.equal(10);
    });
});