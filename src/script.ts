const p = require('prompt-sync')();

const bmi = (weight: number, height: number) => {
    return (weight/(Math.pow(height,2))).toFixed(1);
}

const weight = Number(p('Enter your weight: '));
const height = Number(p('Enter your height: '));

console.log(`Your BMI is ${bmi(weight, height)}`);
