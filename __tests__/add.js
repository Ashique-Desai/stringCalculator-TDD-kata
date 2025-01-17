const add = require('../add');

test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
})

test('should return the number for a single number string', () => {
    expect(add('5')).toBe(5);
});

test('should return the sum of 2 number strings separated by a comma', () => {
    expect(add('1,2')).toBe(3);
})