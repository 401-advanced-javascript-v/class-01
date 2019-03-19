'use strict';

// Require the module under test
const greet = require('../lib/greet.js');
const faker = require('faker');

const name = faker.name.firstName();

describe('Hello', () => {

  // Tests are documentation.  Is there any need to comment what these are doing?  NOT.
  it('requires one param', () => {
    let message = greet();
    expect(message).toBeNull();
  });

  it('only allows one param', () => {
    let message = greet('john','cathy');
    expect(message).toBeNull();
  });

  it('does not allow numeric values', () => {
    let message = greet(1);
    expect(message).toBeNull();
  });

  it('does not allow arrays as a param', () => {
    let message = greet([]);
    expect(message).toBeNull();
  });

  it('does not allow objects as a param', () => {
    let message = greet({});
    expect(message).toBeNull();
  });

  it('works when given a word', () => {
    // console.log(name);
    var message = greet(name);
    console.log('hhhhh: ' + message);
    var expectedOutput = `Hello ${name}`;
    console.log(expectedOutput);
    expect(message).toEqual(expectedOutput);
  });

});