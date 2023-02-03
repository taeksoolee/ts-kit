import { pipe } from ".";

describe('pipe', () => {
  test('test string pipe', () => {
    const stringFilter = pipe<string>(
      // (_prev, base) => base + base,
      (prev, base) => prev + base,
      (prev, _base) => prev + '!',
    );

    const result = stringFilter('abc');

    expect(result).toBe('abcabc!');
  });
});