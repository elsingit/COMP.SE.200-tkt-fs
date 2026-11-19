import { expect } from 'chai'
import toNumber from '../src/toNumber.js'

describe('toNumber', () => {
  it('should convert valid values to number', () => {
    expect(toNumber(67)).to.equal(67)
    expect(toNumber('-6.7')).to.equal(-6.7)
    expect(toNumber('      67      ')).to.equal(67)
  })

  it('should handle empty and invalid values', () => {
    expect(toNumber(null)).to.equal(0)
    expect(toNumber('')).to.equal(0)
    expect(toNumber(undefined)).to.be.NaN
    expect(toNumber('potato 1')).to.be.NaN
  })
})