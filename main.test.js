
import { stringLength} from './main';


describe('stringLength', () => {
  test('returns the correct length of a string', () => {
    const str = 'Hello';
    const char = stringLength(str);
    expect(char).toBe(5);
  });
})
