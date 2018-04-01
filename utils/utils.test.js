const utils = require('./utils');

it ('should add two numbers', () => {
    let res = utils.add(44, 11);
    if (res !== 55)
        throw new Error(`Expected 55, but got ${res}!`);
});

it ('should return square', () => {
    let res = utils.square(11);
    if (res !== 121)
        throw new Error(`Expected 121, but got ${res}!`);
});

