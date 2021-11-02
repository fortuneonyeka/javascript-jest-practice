
import { stringLength,reverseString,calculator,capitalizeString} from './main';


describe('stringLength', () => {
  test('returns the correct length of a string', () => {
    const str = 'Hello';
    const char = stringLength(str);
    expect(char).toBe(5);
  });

  test('returns Error when the string length is less than 1', () => {
    const str = '';
    expect(() => stringLength(str)).toThrow(`string length is outside range`)
  })

  test('throws an error when the string length is above 10', () => {
    const str = 'abcdefghijklmn';
    expect(() => stringLength(str)).toThrow(`string length is outside range`)
  })
})


describe('reverseString', () => {
  test('reverses string', () => {
    const str = 'microverse'
    const char = reverseString(str)
    expect(char).toBe('esrevorcim')
  })

  test('reverse a palindrom', () => {
    const palindrom = 'racecar';
    expect(reverseString(palindrom)).toBe(palindrom)
  })
})

describe('calculator', () => {
  describe('add', () => {
    test('returns result of adding two number', () => {
      expect(calculator.add(2,2)).toBe(4)
    })

    test('add two floats', () => {
      expect(calculator.add(0.5,0.5)).toBe(1)
    })
  })
  
  describe('multiplication', () => {
    test('return the result of multiplying two numbers', () => {
      expect(calculator.multiply(5,5)).toBe(25)
    })

    test('multiply two floats', () => {
      expect(calculator.multiply(2.5,2.5)).toBeCloseTo(6.25)
    })
  })
  describe('diviion', () => {
    test('return the result of dividing two numbers', () => {
      expect(calculator.divide(20,5)).toBe(4)
    })

    test('divide two number', () => {
      expect(calculator.multiply(10,2)).not.toBe(6.25)
    })
    test('divide two number', () => {
      expect(calculator.multiply(10,2)).toBeGreaterThan(10)
    })
    test('divide two number', () => {
      expect(calculator.multiply(10,2)).toBeLessThanOrEqual(20)
    })
  })

  describe('subtract', () => {
    test('return the result of subtracting a number from another number', () => {
      expect(calculator.subtract(20,5)).toBe(15)
    })

    test('subtract two number', () => {
      expect(calculator.subtract(10,2)).not.toBe(6.25)
    })

    test('subtract two number', () => {
      expect(calculator.subtract(10,2)).toBeGreaterThanOrEqual(7)
    })
})
})

describe('capitalizeString', () => {
  test('return capitalized string', () => {
    const str = 'hello';
    const char = capitalizeString(str);
    expect(char).toBe('Hello')
  })

  test('return capitalized string', () => {
    const str = 'hello';
    const char = capitalizeString(str);
    expect(char).not.toBe('hello')
  })
})
