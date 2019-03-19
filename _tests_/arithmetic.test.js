'use strict';

const arithmetic = require('../lib/arithmetic.js');

const faker = require('faker');

describe('arithemetic', () => {
    const a = faker.random.number();
    const b = faker.random.number();
    const m = [1,2,3];
    const n = [4,5,6];
    const x = 'a';
    const y = {a:4,b:5,c:'xfdfd'};

    it('only allow number and number array', () =>{
        let expectedOutput = arithmetic.typeCheck(a,b);
        expect(arithmetic.typeCheck(a,b)).toEqual(true);
        expect(arithmetic.typeCheck(a,m)).toEqual(true);
        expect(arithmetic.typeCheck(b,m)).toEqual(true);
        expect(arithmetic.typeCheck(x,a)).toEqual(false);
        expect(arithmetic.typeCheck(y,b)).toEqual(false);
    })

    it('sum of two random numbers', () => {
        let expectedOutput = arithmetic.add(a, b);
        console.log(expectedOutput);
        console.log(a+b);
        expect(expectedOutput).toEqual(a+b);
    })

    it('sum of two arrays', () => {
        let expectedOutput = arithmetic.add(m, n);
        console.log(arithmetic.add(m, n));
        let sumA = m.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sumA);
        let sumB = n.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sumB);
        console.log(expectedOutput);
        expect(expectedOutput).toEqual(sumA + sumB);
    })

    it('subtract of two random numbers', () => {
        let expectedOutput = arithmetic.subtract(a, b);
        console.log(expectedOutput);
        console.log(a-b);
        expect(expectedOutput).toEqual(a-b);
    })

    it('subtract of two arrays', () => {
        let expectedOutput = arithmetic.subtract(m, n);
        console.log(arithmetic.subtract(m, n));
        let sumA = m.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sumA);
        let sumB = n.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sumB);
        console.log(expectedOutput);
        expect(expectedOutput).toEqual(sumA - sumB);
    })

    it('multiple two random numbers', () => {
        let expectedOutput = arithmetic.multiple(a, b);
        console.log(expectedOutput);
        console.log(a * b);
        expect(expectedOutput).toEqual(a * b);
    })

    it('multiple two arrays', () => {
        let expectedOutput = arithmetic.multiple(m, n);
        console.log(arithmetic.add(m, n));
        let mulA = m.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        console.log(mulA);
        let mulB = n.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        console.log(mulB);
        console.log(expectedOutput);
        expect(expectedOutput).toEqual(mulA * mulB);
    })

    it('devide two random numbers', () => {
        let expectedOutput = arithmetic.devide(a, b);
        expect(expectedOutput).toEqual(Math.floor(a/b));
    })

    
})