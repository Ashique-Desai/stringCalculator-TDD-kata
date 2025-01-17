const add = require('../add');

test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('should return the number for a single number string', () => {
    expect(add('5')).toBe(5);
});

test('should return the sum of 2 number strings separated by a comma', () => {
    expect(add('1,2')).toBe(3);
});

test('should return the sum of any number of numbers separated by a comma', () => {
    expect(add('1,2,3,4,5')).toBe(15);
    expect(add('10,20,30')).toBe(60);
    expect(add('7')).toBe(7);
});

test('should handle newlines between numbers as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('should handle changed delimiter: ;', () => {
    expect(add('//;\n1;2')).toBe(3);
});