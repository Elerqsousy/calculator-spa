import calculate from '../logic/calculate';

describe('test calculate', () => {
  test('to record intry', () => {
    const obj = { total: null, next: null, operation: null };
    const btnName = '3';
    const result = calculate(obj, btnName);
    expect(result.next).toBe(btnName);
  });
  test('to record multiple intries', () => {
    const obj = { total: null, next: '4', operation: null };
    const btnName = '3';
    const result = calculate(obj, btnName);
    expect(result.next).toBe('43');
  });
  test('to multiply', () => {
    const obj = { total: null, next: '3', operation: null };
    const operation = calculate(obj, 'x');
    const secondIntry = calculate(operation, '2');
    const result = calculate(secondIntry, '=');
    expect(result.total).toBe('6');
  });
  test('to division', () => {
    const obj = { total: null, next: '9', operation: null };
    const operation = calculate(obj, '÷');
    const secondIntry = calculate(operation, '3');
    const result = calculate(secondIntry, '=');
    expect(result.total).toBe('3');
  });
  test('to addition', () => {
    const obj = { total: null, next: '10', operation: null };
    const operation = calculate(obj, '+');
    const secondIntry = calculate(operation, '3');
    const result = calculate(secondIntry, '=');
    expect(result.total).toBe('13');
  });
  test('to subtraction', () => {
    const obj = { total: null, next: '9', operation: null };
    const operation = calculate(obj, '-');
    const secondIntry = calculate(operation, '6');
    const result = calculate(secondIntry, '=');
    expect(result.total).toBe('3');
  });
  test('to modular', () => {
    const obj = { total: null, next: '9', operation: null };
    const operation = calculate(obj, '%');
    const secondIntry = calculate(operation, '3');
    const result = calculate(secondIntry, '=');
    expect(result.total).toBe('0');
  });
});
