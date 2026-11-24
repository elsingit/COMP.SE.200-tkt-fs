import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce', function () {

  describe('Array handling', function () {
    it('should reduce an array using an initial accumulator', function () {
      const result = reduce([1, 2, 3], (sum, n) => sum + n, 0)
      expect(result).to.equal(6)
    })

    it('should use the first element as the initial accumulator when none is provided', function () {
      const result = reduce([1, 2, 3], (sum, n) => sum + n)
      expect(result).to.equal(6)
    })

    it('should return the initial accumulator when the array is empty', function () {
      const result = reduce([], (sum, n) => sum + n, 10)
      expect(result).to.equal(10)
    })

    it('should return undefined when the array is empty and no accumulator is provided', function () {
      const result = reduce([], (sum, n) => sum + n)
      expect(result).to.equal(undefined)
    })

    it('should handle an array containing only one element', function () {
      const result = reduce([5], (sum, n) => sum + n)
      expect(result).to.equal(5)
    })
  })

  describe('Object handling', function () {

    it('should reduce an object collection', function () {
      const result = reduce(
        { a: 1, b: 2, c: 3 },
        (sum, value) => sum + value,
        0
      )
      expect(result).to.equal(6)
    })

    it('should provide object keys as the third iteratee argument', function () {
      const result = reduce(
        { a: 1, b: 2 },
        (acc, value, key) => {
          acc[key] = value * 2
          return acc
        },
        {}
      )
      expect(result).to.deep.equal({ a: 2, b: 4 })
    })

    it('should use the first object value as the initial accumulator when none is provided', function () {
      const result = reduce(
        { a: 1, b: 2 },
        (sum, value) => sum + value
      )
      expect(result).to.equal(3)
    })

  })

  describe('Iteratee behavior', function () {

    it('should invoke the iteratee once for each array element', function () {
      let callCount = 0
      reduce([1, 2, 3], (sum, n) => {
        callCount++
        return sum + n
      }, 0)
      expect(callCount).to.equal(3)
    })

    it('should pass the correct arguments to the iteratee', function () {
      const collection = [10, 20]
      const receivedArguments = []
      reduce(collection, (acc, value, index, array) => {
        receivedArguments.push([acc, value, index, array])
        return acc + value
      }, 0)
      expect(receivedArguments).to.deep.equal([
        [0, 10, 0, collection],
        [10, 20, 1, collection]
      ])
    })

    it('should use the previous iteratee return value as the next accumulator', function () {
      const result = reduce(
        [1, 2, 3],
        (acc, value) => acc + value * 2,
        0
      )
      expect(result).to.equal(12)
    })
  })

  describe('Initial accumulator handling', function () {
    it('should handle an explicitly provided undefined accumulator', function () {
      const result = reduce(
        [1, 2],
        (acc, value) => acc === undefined ? value : acc + value,
        undefined
      )
      expect(result).to.equal(3)
    })

    it('should allow an object as the initial accumulator', function () {
      const result = reduce(
        [1, 2, 3],
        (acc, value) => {
          acc.sum += value
          return acc
        },
        { sum: 0 }
      )
      expect(result).to.deep.equal({ sum: 6 })
    })
  })
})