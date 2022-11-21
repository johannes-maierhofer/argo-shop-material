import { WordWrapPipe } from './word-wrap.pipe';

describe('WordWrapPipe', () => {
  const pipe = new WordWrapPipe();
  it('create an instance', () => {
    const newPipe = new WordWrapPipe();
    expect(newPipe).toBeTruthy();
  });
  it('null returns empty string', () => {
    const result = pipe.transform(null, 2);
    expect(result).toBe('');
  });

  it('not a string succeeds', () => {
    const value = {
      value: 'I am an object not a string'
    };
    const result = pipe.transform(value, 2);
    expect(result).toContain('...');
  });

  it('a longer string is shortened', () => {
    const value = 'A longer string'
    const result = pipe.transform(value, 8);
    expect(result).toBe('A longer...');
  });
});
