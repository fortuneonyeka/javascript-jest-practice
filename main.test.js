
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
