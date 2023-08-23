import operate from '../logic/operate';

describe('operate function', () => {
  it('should perform addition correctly', () => {
    expect(operate(10, 20, '+')).toBe('30');
  });
});