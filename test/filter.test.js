import { expect } from 'chai'
import filter from './filter.js'

describe('filter()', () => {
  it('returns everything that fills the filter condition, but only things that fill it', () => {
    //everything fulfills the condition
    //nothing fills the condition
    //some fill the condition
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

  it('does not change the original array', () => {
    //match arrays? og before and after
  });
});
