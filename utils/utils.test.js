const expect = require('expect');
const utils = require('./utils');

it ('should add two numbers', () => {
    let res = utils.add(44, 11);
    expect(res).toBe(55).toBeA('number');
});

it ('should return square', () => {
    let res = utils.square(11);
    expect(res).toBe(121).toBeA('number');
});

