"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (user) => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};
// let user = {
//   firstName: 'Ezequiel',
//   lastName: 'Tzofeheer',
//   age: 30,
// }
// console.log(getUser(user));
class Person {
    firstName;
    lastName;
    age;
    constructor(firstN, lastN, ageU) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = ageU;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('Ezequiel', 'Tzofeheer', 30);
console.log(getUser(person));
//# sourceMappingURL=interfaces.js.map