import merge from '../src';

describe('merge', () => {
  it('合并两个对象', () => {
    const a = { age: 18 };
    const b = { name: 'xm' };
    const person = merge(a, b);
    const result = { age: 18, name: 'xm' };
    expect(person).toEqual(result);
  });
});
