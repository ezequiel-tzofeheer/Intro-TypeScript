"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// let user = new User('Ezequiel', 'Tzofeheer', 30);
// console.log(user.getFullName());
class Admin extends User {
    getFullName() {
        return `Dr. ${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin('Ezequiel', 'Tzofeheer', 30);
console.log(admin.getFullName());
//# sourceMappingURL=classes.js.map