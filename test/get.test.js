import { expect } from 'chai'
import get from './get.js'

describe('get', function () {

  describe('Basic property access', function () {

    it('should return the value of a simple property', function () {
      const object = { a: 1 }

      const result = get(object, 'a')

      expect(result).to.equal(1)
    })

    it('should return the value of a nested property', function () {
      const object = { a: { b: { c: 3 } } }

      const result = get(object, 'a.b.c')

      expect(result).to.equal(3)
    })

    it('should return the value of an array element using bracket notation', function () {
      const object = { a: [10, 20, 30] }

      const result = get(object, 'a[1]')

      expect(result).to.equal(20)
    })

    it('should support an array as the property path', function () {
      const object = { a: { b: { c: 3 } } }

      const result = get(object, ['a', 'b', 'c'])

      expect(result).to.equal(3)
    })

  })

  describe('Missing properties', function () {

    it('should return undefined when the property does not exist', function () {
      const object = { a: 1 }

      const result = get(object, 'b')

      expect(result).to.equal(undefined)
    })

    it('should return the default value when the property does not exist', function () {
      const object = { a: 1 }

      const result = get(object, 'b', 'default')

      expect(result).to.equal('default')
    })

    it('should return the default value when a nested property does not exist', function () {
      const object = { a: { b: 1 } }

      const result = get(object, 'a.b.c', 'default')

      expect(result).to.equal('default')
    })

  })

  describe('Default value handling', function () {

    it('should return the default value when the resolved property is undefined', function () {
      const object = { a: undefined }

      const result = get(object, 'a', 'default')

      expect(result).to.equal('default')
    })

    it('should return null when the resolved property is null', function () {
      const object = { a: null }

      const result = get(object, 'a', 'default')

      expect(result).to.equal(null)
    })

    it('should return the actual value instead of the default value when the property exists', function () {
      const object = { a: 0 }

      const result = get(object, 'a', 'default')

      expect(result).to.equal(0)
    })

    it('should support false as a property value', function () {
      const object = { a: false }

      const result = get(object, 'a', true)

      expect(result).to.equal(false)
    })

  })

  describe('Null and undefined objects', function () {

    it('should return undefined when the object is null', function () {
      const result = get(null, 'a')

      expect(result).to.equal(undefined)
    })

    it('should return undefined when the object is undefined', function () {
      const result = get(undefined, 'a')

      expect(result).to.equal(undefined)
    })

    it('should return the default value when the object is null', function () {
      const result = get(null, 'a', 'default')

      expect(result).to.equal('default')
    })

    it('should return the default value when the object is undefined', function () {
      const result = get(undefined, 'a', 'default')

      expect(result).to.equal('default')
    })

  })

})