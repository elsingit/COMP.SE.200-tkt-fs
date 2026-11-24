import { expect } from 'chai'
import every from './every.js'

describe('every()', () => {
  it('returns false when one or more elements do not pass the predicate test', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false);
    expect(every([2, 5, 7], number => number % 2 === 0)).to.equal(false);
    expect(every([1, 3, 5], number => number % 2 === 0)).to.equal(false);
  });
  it('returns true when all elements pass the predicate test', () => {
    expect(every([true, 1], Boolean)).to.equal(true);
    expect(every([2, 4, 16], number => number % 2 === 0)).to.equal(true);
    expect(every([18, 20, 4], number => number % 2 === 0)).to.equal(true);
  });
  it('handles arguments correctly in predicate', () => {
    //predicate got correct seed, index and table from each call (create table, create predicate, filter)
    //^use deep.equal from Chai
  });

  it('returns an empty array for empty, nullish and undefined values', () => {
        //[]
        //null
        //undefined
  });

  it('stops after finding the first falsey element', () => {
  });
});