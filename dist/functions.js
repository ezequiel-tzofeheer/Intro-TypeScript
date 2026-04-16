"use strict";
/**
function add(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => {
  return a + b;
}
**/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param a
 * @param b
 */
const add = (a, b) => a + b;
// console.log(add(2, 2));
/**
 * @param a
 * @param b
 * @param tax '?' optional
 */
const addWithOptionalTax = (a, b, tax) => {
    if (typeof tax != "undefined") {
        return (a + b) - tax;
    }
    return a + b;
};
// console.log(addWithOptionalTax(2, 2));
// console.log(addWithOptionalTax(2, 2, 1));
/**
 * @param price
 * @param percentage
 */
const applyDiscount = (price, percentage = 5) => {
    return price - (price * (percentage / 100));
};
// console.log(applyDiscount(100));
const calTotal = (name, ...numbers) => {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
};
console.log(calTotal('Ezequiel Tzofeheer', 1, 2, 3, 4, 5, 10));
//# sourceMappingURL=functions.js.map