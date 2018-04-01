const expect = require('expect');
const utils = require('./utils');

it ('should add two numbers', () => {
    let res = utils.add(44, 11);
    expect(res).toBe(55).toBeA('number');
});

it ('should return square of number', (done) => {
    utils.square(11, (res) => {
        expect(res).toBe(121).toBeA('number');
        done();
    });
});

it ('should set firstName and lastName', () => {
    let user = {
        age: 30,
        location: 'Moscow'
    };
    let res = utils.addName(user, "Aleksei Baryshnikov");
    expect(res).toInclude({
        firstName: "Aleksei",
        lastName: "Baryshnikov"
    });
});
