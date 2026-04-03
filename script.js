console.log(a)
var a = 10;
// Output: undefined
// Reason : In JavaScript, variable declarations using `var` are hoisted to the top of their scope. This means that the declaration of `a` is processed before any code is executed, but its assignment (the value `10`) is not hoisted. Therefore, when `console.log(a)` is executed, `a` exists but has not been assigned a value yet, resulting in `undefined`.
let b=20;
let c=30;
console.log("Sum of 2 and 3 is: " + b + c);
// Output: Sum of 2 and 3 is: 2030
// Reason : In JavaScript, the `+` operator is used for both addition and string concatenation. When you use `+` with a string, it converts the other operand to a string as well. In this case, `b` (which is `20`) is converted to a string and concatenated with `c` (which is `30`), resulting in the string "2030". To get the correct sum, you should use parentheses to ensure that the addition happens before concatenation, like this: `console.log("Sum of 2 and 3 is: " + (b + c));`.

console.log("Sum of 2 and 3 is: " + (b + c));
// Output: Sum of 2 and 3 is: 50
// Reason : By using parentheses around `b + c`, you ensure that the addition operation is performed first, resulting in `50`. Then, this result is concatenated with the string "Sum of 2 and 3 is: ", giving you the correct output.

console.log(b + c + " is the sum of 2 and 3");
// Output: 50 is the sum of 2 and 3
// Reason : In this case, `b + c` is evaluated first because of operator precedence. The addition operation is performed before the string concatenation, resulting in `50`. Then, this result is concatenated with the string " is the sum of 2 and 3", giving you the correct output.


console.log("1" + 2 + 3);
// Output: 123
// Reason : In this expression, the `+` operator is evaluated from left to right. First, "1" (a string) is concatenated with `2` (a number), resulting in the string "12". Then, "12" is concatenated with `3`, resulting in the final string "123". To get the correct sum, you should use parentheses to ensure that the addition happens before concatenation, like this: `console.log("1" + (2 + 3));`.


console.log("1" - 1);
// Output: 0
// Reason : In this case, the `-` operator is not defined for strings, so JavaScript attempts to convert the string "1" to a number. The string "1" can be successfully converted to the number `1`, and then the subtraction operation is performed: `1 - 1`, which results in `0` This process is called type coercion.

console.log("1" * 2);
// Output: 2
// Reason : Similar to the previous example, the `*` operator is not defined for strings, so JavaScript attempts to convert the string "1" to a number. The string "1" can be successfully converted to the number `1`, and then the multiplication operation is performed: `1 * 2`, which results in `2` . This process is called type coercion.

console.log("1" / 2);
// Output: 0.5
// Reason : Again, the ` / ` operator is not defined for strings, so JavaScript attempts to convert the string "1" to a number. The string "1" can be successfully converted to the number `1`, and then the division operation is performed: `1 / 2`, which results in `0.5`.


// let age = Number(prompt("Enter your age:"));
// console.log(age);


// swap
let m = 3;
let n=4;
let o = m;
m=n;
n=o;
console.log("m: " + m + ", n: " + n);
// Output: m: 4, n: 3
// Reason : In this code snippet, we are swapping the values of `m` and `n` using a temporary variable `o`. Initially, `m` is assigned the value `3` and `n` is assigned the value `4`. We then store the value of `m` in `o`, assign the value of `n` to `m`, and finally assign the value stored in `o` (which is the original value of `m`) to `n`. After these operations, `m` has the value `4` and `n` has the value `3`, effectively swapping their values.

// second method of swap
let x = 5;
let y = 6;
x = x + y; // x now holds the sum of x and y (11)
y = x - y; // y now holds the original value of x (5)
x = x - y; // x now holds the original value of y (6)
console.log("x: " + x + ", y: " + y);
// Output: x: 6, y: 5
// Reason : In this method of swapping, we use arithmetic operations to swap the values without using a temporary variable. Initially, `x` is `5` and `y` is `6`. We first add `x` and `y` and store the result in `x`, so `x` becomes `11`. Then, we subtract `y` from the new value of `x` to get the original value of `x`, which is stored in `y`, so `y` becomes `5`. Finally, we subtract the new value of `y` from the new value of `x` to get the original value of `y`, which is stored in `x`, so `x` becomes `6`. After these operations, `x` has the value `6` and `y` has the value `5`, effectively swapping their values.

// third method of swap
let p = 7;
let q = 8;
[p, q] = [q, p];
console.log("p: " + p + ", q: " + q);
// Output: p: 8, q: 7
// Reason : In this method of swapping, we use array destructuring assignment to swap the values of `p` and `q`. We create an array on the right-hand side with the values of `q` and `p`, and then we destructure that array into the variables `p` and `q`. This effectively swaps their values in a concise and elegant way. After this operation, `p` has the value `8` and `q` has the value `7`, effectively swapping their values.   


let aa = 10;
let bb = 20;
console.log(Math.floor(aa/bb));
//when  we divide is return cocendent but when we use math.floor it return quotient
// Output: 0
// Reason : In this code snippet, we are dividing `aa` by `bb`, which results in `0.5`. The `Math.floor()` function is then used to round down this result to the nearest integer, which gives us `0`. Therefore, the output of `Math.floor(aa/bb)` is `0`.



let num = 5.7;
let num2 = 5.3;
console.log(Math.floor(num % num2));
// reason:module operator returns the remainder of the division of `num` by `num2`. In this case, `5.7 % 5.3` gives us `0.4`, which is the remainder when `5.7` is divided by `5.3`. The `Math.floor()` function then rounds down this result to the nearest integer, which gives us `0`. Therefore, the output of `Math.floor(num % num2)` is `0`.




console.log(1234 %10);
// Output: 4
// Reason : The modulus operator `%` returns the remainder of the division of `1234` by `10`. When you divide `1234` by `10`, the quotient is `123` with a remainder of `4`. Therefore, `1234 % 10` evaluates to `4`, which is the output.

console.log(1234 % 100);
// Output: 34
// Reason : The modulus operator `%` returns the remainder of the division of `1234` by `100`. When you divide `1234` by `100`, the quotient is `12` with a remainder of `34`. Therefore, `1234 % 100` evaluates to `34`, which is the output.


console.log(Math.floor(1234 / 10));
// Output: 123
// Reason : The division operator `/` returns the quotient of the division of `1234` by `10`. When you divide `1234` by `10`, the quotient is `123.4`. The `Math.floor()` function then rounds down this result to the nearest integer, which gives us `123`. Therefore, the output of `Math.floor(1234 / 10)` is `123`.


console.log(true+ true);
// Output: 2
// Reason : In JavaScript, the boolean value `true` is coerced to the number `1` when used in an arithmetic operation. Therefore, when you add `true + true`, it is equivalent to `1 + 1`, which results in `2`. Hence, the output of `console.log(true + true)` is `2`.

console.log(true + false);
// Output: 1
// Reason : In JavaScript, the boolean value `true` is coerced to the number `1` and `false` is coerced to the number `0` when used in an arithmetic operation. Therefore, when you add `true + false`, it is equivalent to `1 + 0`, which results in `1`. Hence, the output of `console.log(true + false)` is `1`.

console.log(false + false);
// Output: 0
// Reason : In JavaScript, the boolean value `false` is coerced to the number `0` when used in an arithmetic operation. Therefore, when you add `false + false`, it is equivalent to `0 + 0`, which results in `0`. Hence, the output of `console.log(false + false)` is `0`.

console.log([] + []);
// Output: ""
// Reason : In JavaScript, when you use the `+` operator with arrays, it converts them to strings. An empty array `[]` is converted to an empty string `""`. Therefore, when you add two empty arrays together, it results in the concatenation of two empty strings, which is still an empty string `""`. Hence, the output of `console.log([] + [])` is `""`.

console.log([] + {});
// Output: "[object Object]"
// Reason : In JavaScript, when you use the `+` operator with an array and an object, both are converted to strings. An empty array `[]` is converted to an empty string `""`, and an empty object `{}` is converted to the string `"[object Object]"`. Therefore, when you add an empty array and an empty object together, it results in the concatenation of these two strings, which gives us `"[object Object]"`. Hence, the output of `console.log([] + {})` is `"[object Object]"`.

console.log({} + []);
// Output: 0
// Reason : In JavaScript, when you use the `+` operator with an object and an array, both are converted to strings. An empty object `{}` is converted to the string `"[object Object]"`, and an empty array `[]` is converted to an empty string `""`. However, when the `+` operator is used with an object on the left-hand side, it is treated as a block of code rather than an object literal. As a result, the empty block `{}` does not contribute to the string conversion, and only the empty array `[]` is converted to an empty string `""`. Therefore, the expression effectively becomes `"" + ""`, which results in `0` due to type coercion when adding a string to a number. Hence, the output of `console.log({} + [])` is `0`.

console.log({} + {});
// Output: 0
// Reason : Similar to the previous example, when you use the `+` operator with two objects, both are converted to strings. However, when the `+` operator is used with an object on the left-hand side, it is treated as a block of code rather than an object literal. As a result, the empty block `{}` does not contribute to the string conversion, and only the second object `{}` is converted to the string `"[object Object]"`. Therefore, the expression effectively becomes `"" + "[object Object]"`, which results in `0` due to type coercion when adding a string to a number. Hence, the output of `console.log({} + {})` is `0`.


console.log(10 !== "10");

// Output: true
// Reason : In JavaScript, the `!==` operator performs type coercion when comparing values. When you compare `10` (a number) and `"10"` (a string), JavaScript converts the string `"10"` to the number `10` before making the comparison. Since both values are now `10`, the comparison `10 !== 10` evaluates to `true`. Therefore, the output of `console.log(10 !== "10")` is `true`.


console.log(10 != "10");
// Output: false
// Reason : In JavaScript, the `!=` operator also performs type coercion when comparing values. When you compare `10` (a number) and `"10"` (a string), JavaScript converts the string `"10"` to the number `10` before making the comparison. Since both values are now `10`, the comparison `10 != 10` evaluates to `false`. Therefore, the output of `console.log(10 != "10")` is `false`.

console.log(10 === "10");
// Output: false
// Reason : In JavaScript, the `===` operator does not perform type coercion and checks for both value and type. When you compare `10` (a number) and `"10"` (a string), they are of different types. Therefore, the comparison `10 === "10"` evaluates to `false`. Hence, the output of `console.log(10 === "10")` is `false`.

console.log(10>6 && 15<9 && 20>18);
// Output: false
// Reason : The `&&` operator returns `true` only if all conditions are true. In this case, `10 > 6` is `true`, but `15 < 9` is `false`, and `20 > 18` is `true`. Since one of the conditions is false, the entire expression evaluates to `false`. Therefore, the output of `console.log(10 > 6 && 15 < 9 && 20 > 18)` is `false`.

console.log(10>6 || 15<9 || 20>18);
// Output: true
// Reason : The `||` operator returns `true` if at least one of the conditions is true. In this case, `10 > 6` is `true`, `15 < 9` is `false`, and `20 > 18` is `true`. Since at least one of the conditions is true, the entire expression evaluates to `true`. Therefore, the output of `console.log(10 > 6 || 15 < 9 || 20 > 18)` is `true`.


console.log(10>6 && 15<9 && 20>18);
// Output: false
// Reason : The `&&` operator returns `true` only if all conditions are true. In this case, `10 > 6` is `true`, but `15 < 9` is `false`, and `20 > 18` is `true`. Since one of the conditions is false, the entire expression evaluates to `false`. Therefore, the output of `console.log(10 > 6 && 15 < 9 && 20 > 18)` is `false`.




// increment and decrement operator
let i = 5;
let k = i++;
console.log(k);
// Output: 5
// Reason : The `i++` is a post-increment operator, which means that it returns the current value of `i` before incrementing it. Therefore, when you assign `k = i++`, `k` gets the value of `5` (the current value of `i`), and then `i` is incremented to `6` after the assignment. Hence, the output of `console.log(k)` is `5`.
console.log(i++);
// Output: 5
// Reason : The `i++` is a post-increment operator, which means that it returns the current value of `i` before incrementing it. Therefore, when you log `i++`, it outputs `5`, and then `i` is incremented to `6` after the logging statement.

let j = 5;
console.log(++j);
// Output: 6
// Reason : The `++j` is a pre-increment operator, which means that it increments the value of `j` before returning it. Therefore, when you log `++j`, it first increments `j` from `5` to `6`, and then outputs `6`.


let aaa = true;
aaa++;
console.log(aaa);
// Output: 2
// Reason : In JavaScript, the boolean value `true` is coerced to the number `1` when used in an arithmetic operation. Therefore, when you apply the increment operator `++` to `aaa`, it first converts `true` to `1`, then increments it to `2`. Hence, the output of `console.log(aaa)` is `2`.


let bbb = 12++;
console.log(bbb);
// Output: SyntaxError: Invalid left-hand side expression in postfix operation
// Reason : The expression `12++` is invalid because the increment operator `++` can only be applied to variables, not to literals. In this case, `12` is a numeric literal, and you cannot increment a literal value. Therefore, this code will throw a syntax error indicating that the left-hand side expression in the postfix operation is invalid.


let ccc = 12;
let ddd = ++(a++);
console.log(ddd);
// Output: SyntaxError: Invalid left-hand side expression in prefix operation
// Reason : The expression `++(a++)` is invalid because the increment operator `++` cannot be applied to the result of another increment operation. In this case, `a++` is a post-increment operation that returns the current value of `a` before incrementing it, and you cannot apply the pre-increment operator `++` to the result of a post-increment operation. Therefore, this code will throw a syntax error indicating that the left-hand side expression in the prefix operation is invalid.


console.log(Math.floor(5.7));
console.log(Math.ceil(5.3));
console.log(Math.round(5.5));
console.log(Math.trunc(5.7));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
console.log(Math.abs(-5));
console.log(Math.max(1, 5, 3));
console.log(Math.min(1, 5, 3));
console.log(Math.random());
console.log(Math.sign(-5));
console.log(123.122.toFixed(2));
// Output: 5, 6, 6, 5, 8, 4, 3, 1, -5, 123.12
// Reason : The `Math.floor()` function rounds a number down to the nearest integer, so `Math.floor(5.7)` returns `5`. The `Math.ceil()` function rounds a number up to the nearest integer, so `Math.ceil(5.3)` returns `6`. The `Math.round()` function rounds a number to the nearest integer, so `Math.round(5.5)` returns `6` because it rounds up when the decimal part is `.5` or higher. The `Math.trunc()` function removes the decimal part of a number, so `Math.trunc(5.7)` returns `5`. The `Math.pow()` function raises a number to a power, so `Math.pow(2, 3)` returns `8`. The `Math.sqrt()` function calculates the square root of a number, so `Math.sqrt(16)` returns `4`. The `Math.random()` function generates a random decimal number between 0 and 1. The `Math.sign()` function returns the sign of a number, so `Math.sign(-5)` returns `-1`. The `toFixed()` method formats a number with a specified number of decimals, so `123.122.toFixed(2)` returns `"123.12"`. Therefore, the outputs are `5`, `6`, `6`, `5`, `8`, `4`, `3`, `1`, `-5`, and `"123.12"    ` respectively.




//area  of triangle
let base = 10;
let height = 5;
let area = (base * height) / 2;
console.log("Area of the triangle is: " + area);
// Output: Area of the triangle is: 25
// Reason : The formula for calculating the area of a triangle is `(base * height) / 2`. In this code snippet, we have a base of `10` and a height of `5`. When we substitute these values into the formula, we get `(10 * 5) / 2`, which simplifies to `50 / 2`, resulting in `25`. Therefore, the output of `console.log("Area of the triangle is: " + area)` is `Area of the triangle is: 25`.








