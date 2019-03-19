# Node Ecosystem
Author: Vanessa

## Overview
I will build two test files to test methods inside of arithmetic module and greet module.

## Environment setting
Setup the package.json file to run lint checks and tests against the greet and arithmetic modules

## Languages: JavaScript
- Libraries and frameworks: Node.js
- Deployment platform: Heroku

## Specifications
#### Arithmetic Module
##### Write Arithmetic Module Tests
- Use the faker module to randomize input
- Test each method for proper use (invoked with number arguments)
- Test each method for improper use (invoked with one or more non-number arguments)
##### Add features to the arithmetic module
- Add support for multiply and divide (be careful to not divide by zero!)
- Refactor the add, subtract, multiply to allow for an array of params so that you can do deeper calculations
##### Refactor the arithmetic module
- DRY the code by externalizing any type checking or argument validation from your methods

#### Greet Module
- Create a NodeJS module in the lib directory named greet.js. This module should export a single function.

- The greet function should have a single parameter (arity of one) that should expect a string as it’s input
- The greet function should return the input name, concatenated with “hello “: eg. (“hello susan”)
- The greet function should return null if the input is not a string
##### Greet Module Tests
- Use the faker module to randomize input
- Write a test that expects the greet module to return null when you supply non-string values
- Write a test the expects the greet module to return 'hello world'
- This should happen when invoked with 'world' as the first argument

## Change Log
1. Setting environment by npm init and add dependencies from the class repo
2. npm i jest eslint 
3. Add start code
4. Features completed:
- [x] required two random numbers by require faker
- [x] test add function
- [x] complete substract, multiple, devide funtions for two random numbers
- [x] test inproper use by adding checktype function in module
- [x] refactor to accecpt arrays
- [x] write greet module
- [x] use faker module to randome input name
- [x] test to return null when supply non-string values
- [ ] return 'hello world'
