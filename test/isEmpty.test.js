import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty()', () => {
  it('returns true for nullish and empty collection values', () => {
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty('')).to.equal(true);
    expect(isEmpty({})).to.equal(true);
    expect(isEmpty(new Map())).to.equal(true);
    expect(isEmpty(new Set())).to.equal(true);
  });

  it('returns false for non-empty collections and objects', () => {
    expect(isEmpty([1, 2, 3])).to.equal(false);
    expect(isEmpty('abc')).to.equal(false);
    expect(isEmpty({ a: 1 })).to.equal(false);
    expect(isEmpty(new Map([['a', 1]]) )).to.equal(false);
    expect(isEmpty(new Set([1, 2, 3]))).to.equal(false);
  });

  it('treats primitive values like numbers and booleans as empty', () => {
    expect(isEmpty(0)).to.equal(true);
    expect(isEmpty(false)).to.equal(true);
    expect(isEmpty(true)).to.equal(true);
  });
});
