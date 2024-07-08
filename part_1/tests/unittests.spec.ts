const mathOperations = require('../src/mathOperations');
import {expect, describe, jest, test} from '@jest/globals';

describe('Math operations test', () => {
    describe('exponentiation', () => {
        test('should return 16 for base 2 and exponent 4', () => {
            expect(mathOperations.power(2, 4)).toBe(16);
        });

        test('should return NaN for base "a" and exponent 3', () => {
            expect(mathOperations.power('a', 3)).toBeNaN();
        });
    });

    describe('sqrt', () => {
        test('should return 3 for number 9', () => {
            expect(mathOperations.sqrt(9)).toBe(3);
        });

        test('should return 0 for number 0', () => {
            expect(mathOperations.sqrt(0)).toBe(0);
        })

        test('should throw error for negative number', () => {
            expect(() => mathOperations.sqrt(-9)).toThrow('Square root of negative number');
        });
    });

    describe.only('isEven', () => {
        test('should return true for number 4', () => {
            expect(mathOperations.isEven(4)).toBe(true);
        });

        test('should return false for number 5', () => {
            expect(mathOperations.isEven(5)).toBe(false);
        });

        test('should throw error for number 0,92', () => 
            expect(() => mathOperations.isEven(0.92)).toThrow("This is not a whole number!"));
        });
    });

    describe('isOdd', () => {
        test('should return true for number 5', () => {
            expect(mathOperations.isOdd(5)).toBe(true);
        });

        test('should return false for number 4', () => {
            expect(mathOperations.isOdd(4)).toBe(false);
        });

        test('should throw error for number -59,8', () => 
            expect(() => mathOperations.isOdd(-59.8)).toThrow("This is not a whole number!"));
        });

    describe('abs', () => {
        test('should return 5 for number -5', () => {
            expect(mathOperations.abs(-5)).toBe(5);
        });

        test('should return 0 for number 0', () => {
            expect(mathOperations.abs(0)).toBe(0);
        });

    describe('MathOperations', () => {
        describe('gcd', () => {
        test('should return 6 for gcd of 54 and 24', () => {
            expect(mathOperations.gcd(54, 24)).toBe(6);
        });

        test('should return the number itself when the other number is 0', () => {
            expect(mathOperations.gcd(5, 0)).toBe(5);
        });
    });

    describe('lcm', () => {
        test('should return 72 for lcm of 24 and 18', () => {
            expect(mathOperations.lcm(24, 18)).toBe(72);
        });

        test('should return 0 if one of the numbers is 0', () => {
            expect(mathOperations.lcm(0, 5)).toBe(0);
        });
    });

    describe('max', () => {
        test('should return 9 for array [1, 5, 9, 3]', () => {
            expect(mathOperations.max([1, 5, 9, 3])).toBe(9);
        });

        test('should throw error for empty array', () => {
            expect(() => mathOperations.max([])).toThrow('Array is empty');
        });
    });

    describe('min', () => {
        test('should return 1 for array [1, 5, 9, 3]', () => {
            expect(mathOperations.min([1, 5, 9, 3])).toBe(1);
        });

        test('should throw error for empty array', () => {
            expect(() => mathOperations.min([])).toThrow('Array is empty');
        });
    });

    describe('average', () => {
        test('should return 4.5 for array [1, 5, 9, 3]', () => {
            expect(mathOperations.average([1, 5, 9, 3])).toBe(4.5);
        });

        test('should throw error for empty array', () => {
            expect(() => mathOperations.average([])).toThrow('Array is empty');
        })
    });

    describe('MathOperations', () => {
        describe('isPrime', () => {
            test('should return true for prime number 7', () => {
                expect(mathOperations.isPrime(7)).toBe(true);
            });
    
            test('should return false for non-prime number 4', () => {
                expect(mathOperations.isPrime(4)).toBe(false);
        });
    });
    
    describe('sumOfDigits', () => {
        test('should return 6 for number 123', () => {
            expect(mathOperations.sumOfDigits(123)).toBe(6);
        });

        test('should return 0 for number 0', () => {
            expect(mathOperations.sumOfDigits(0)).toBe(0);
        });
    });

    describe('reverseNumber', () => {
        test('should return 54321 for number 12345', () => {
            expect(mathOperations.reverseNumber(12345)).toBe(54321);
        });

        test('should return 0 for number 0', () => {
            expect(mathOperations.reverseNumber(0)).toBe(0);
        });
    });
    })
})
});