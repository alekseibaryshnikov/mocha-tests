module.exports.add = (a, b) => a + b;

module.exports.square = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};

module.exports.addName = (user, fullName) => {
    let fullNameSplit = fullName.split(' ');
    
    Object.defineProperties(user, {
        firstName: {
            value: fullNameSplit[0],
            writable: true
        },
        lastName: {
            value: fullNameSplit[1],
            writable: true
        }
    });

    return user;
};