import { expect } from 'chai'
import countBy from '../src/countBy.js'

describe('countBy', () => {
    it('should count elements', () => {
        expect(countBy(['omena', 'päärynä','omena'], value => value))
        .to.eql({ 'omena': 2, 'päärynä': 1 })
    });it('should count by availability', () => {
        const vegetables = [
            { 'vegetable': 'potato', 'available': true },
            { 'vegetable': 'carrot', 'available': true },
            { 'vegetable': 'cucumber', 'available': false }
        ]
        expect(countBy(vegetables, value => value.available))
        .to.eql({ 'true': 2, 'false': 1 })
    });it('should return empty object for empty array', () => {
        expect(countBy([])).to.eql({})
    })
})  