const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const a = 10;
const b = 2;

const plusResult = calculator.plus(a, b);
const minusResult = calculator.minus(plusResult, b);
const timesResult = calculator.times(a, minusResult);
const divideResult = calculator.divide(timesResult, a);
const powerResult = calculator.power(divideResult, b);
console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);
