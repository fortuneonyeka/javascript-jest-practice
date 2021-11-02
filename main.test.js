
import { sum,multi } from './main';


  test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

test('multiply 2 * 3 to equal 6', () => {
  expect(multi(2,3)).toBe(6)
})