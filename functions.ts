/**
function add(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => {
  return a + b;
}
**/

/**
 * @param a
 * @param b
 */
const add = (a: number, b: number): number => a + b;

// console.log(add(2, 2));

/**
 * @param a
 * @param b
 * @param tax '?' optional
 */
const addWithOptionalTax = (a: number, b: number, tax?: number): number => {
  if (typeof tax != "undefined") {
    return (a + b) - tax;
  }

  return a + b;
}

// console.log(addWithOptionalTax(2, 2));
// console.log(addWithOptionalTax(2, 2, 1));

/**
 * @param price
 * @param percentage
 */
const applyDiscount = (price: number, percentage: number = 5): number => {
  return price - (price * (percentage / 100));
}

// console.log(applyDiscount(100));

const calTotal = (name: string, ...numbers: number[]): number => {
  let total = 0;
  numbers.forEach(num => total += num)
  return total;
}

console.log(calTotal('Ezequiel Tzofeheer', 1, 2, 3, 4, 5, 10));
