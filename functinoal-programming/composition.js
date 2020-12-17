const compose = (...functions) => arg =>
    functions.reduce((composed, f) => f(composed), arg);

const function1 = (arg) => arg + "1";
const function2 = (arg) => arg + "2";
console.log(compose(function1, function2)("apple"));

module.exports = compose;