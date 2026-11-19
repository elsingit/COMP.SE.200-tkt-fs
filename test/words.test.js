import { expect } from 'chai'
import words from '../src/words.js'

describe('words', () => {
    it('should split `string` into an array of its words', () => {
        expect(words('Delicious potatoes, locally grown'))
        .to.eql(['Delicious','potatoes','locally','grown'])
    });it('should work with empty string', () => {
        expect(words('')).to.eql([])
    });it('should work with numbers', () => {
        expect(words('234 potatoes, 1 locally grown'))
        .to.eql(['234','potatoes','1','locally','grown'])
    });it('should handle finnish characters', () => {
        expect(words('päärynöitä')).to.eql(['päärynöitä'])
    });it('should be able to use a custom pattern', () => {
        expect(words('Locally grown potatoes 100 €',/[a-zA-Z]+/g))
        .to.eql(['Locally','grown','potatoes'])
    })
})