import {expect} from 'chai'
import compact from '../src/compact.js'

describe('compact', () => {
    it('should remove falsey values', () => {
        expect(compact([1, 0, false, 2, '', 3])).to.eql([1, 2, 3])
    });
    it('should work with empty array', () => {
        expect(compact([])).to.eql([])
    });
    it('should work with all falsey values', () => {
        expect(compact([false, null, 0, '', undefined, NaN])).to.eql([])
    })
})