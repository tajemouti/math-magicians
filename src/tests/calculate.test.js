import calculate from '../logic/calculate';

describe('Basic operations tests', () => {
  it('Testing the sum case ', () => {
    const state = {
      total: '10',
      next: '20',
      operation: '+',
    };
    const buttonName = '=';
    const result = calculate(state, buttonName);
    expect(result).toEqual({ total: '30', next: null, operation: null });
  });

  it('Testing the minus case ', () => {
    const state = {
      total: '10',
      next: '20',
      operation: '-',
    };
    const buttonName = '=';
    const result = calculate(state, buttonName);
    expect(result).toEqual({ total: '-10', next: null, operation: null });
  });

  it('Testing the multiplication case ', () => {
    const state = {
      total: '0',
      next: '0',
      operation: 'x',
    };
    const buttonName = '=';
    const result = calculate(state, buttonName);
    expect(result).toEqual({ total: '0', next: null, operation: null });
  });

  it('Testing the division case ', () => {
    const state = {
      total: '0',
      next: '1000',
      operation: '÷',
    };
    const buttonName = '=';
    const result = calculate(state, buttonName);
    expect(result).toEqual({ total: '0', next: null, operation: null });
  });
});
