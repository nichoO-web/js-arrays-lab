const foods = [];
console.log('Exercise 1 result:', foods);

foods.push('pizza', 'cheeseburger');
console.log('Exercise 2 result:', foods);

foods.unshift('taco');
console.log('Exercise 3 result:', foods);

const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);

foods.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);

const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);

const soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

const allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);

const hasSoup = foods.includes('soup');
console.log('exercise 10 result:', hasSoup);

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        odds.push(nums[i]);
    }
}
console.log('Exercise 11 result:', odds);

const fizz = [];
const buzz = [];
const fizzbuzz = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 == 0) {
        fizz.push(nums[i]);
    };
    if (nums[i] % 5 == 0) {
        buzz.push(nums[i]);
    };
    if (nums[i] % 3 == 0 && nums[i] % 5 == 0) {
        fizzbuzz.push(nums[i]);
    };
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];
const numList = numArrays[numArrays.length - 1];
console.log('Exercise 13 result:', numList);

const num = numArrays[2][1];
console.log('Exercise 14 result:', num);

let total = 0;
numArrays.forEach(array => {
    array.forEach(num => {
        total += num;
    });
});
console.log('Exercise 15 result:\n', total);