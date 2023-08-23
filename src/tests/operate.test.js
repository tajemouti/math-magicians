import operate from '../logic/operate';

describe('operate function', () => {
  it('should perform addition correctly', () => {
    expect(operate(10, 20, '+')).toBe('30');
  });

  it('should perform subtraction correctly', () => {
    expect(operate(50, 25, '-')).toBe('25');
  });

  it('should perform multiplication correctly', () => {
    expect(operate(5, 8, 'x')).toBe('40');
  });

  it('should perform division correctly', () => {
    expect(operate(100, 5, '÷')).toBe('20');
  });

  it('should handle division by zero', () => {
    expect(operate(10, 0, '÷')).toBe('Cannot divide by zero');
  });
});