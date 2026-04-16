"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Number
let name_var = 321;
name_var = 1.2;
name_var = 0XFA;
console.log(name_var);
// Boolean
let active = true;
// String
let first_name = 'Ezequiel';
let last_name = 'Tzofeheer';
let fullname = `${first_name} ${last_name}`;
// Enums
var ROLES;
(function (ROLES) {
    ROLES["MANAGER"] = "Manager";
    ROLES["ADMIN"] = "Admin";
    ROLES["CEO"] = "CEO";
    ROLES["CTO"] = "CTO";
})(ROLES || (ROLES = {}));
function setRole(role) { }
setRole(ROLES.CEO);
// Array
let names = ['Ezequiel', 'Tzofeheer', 'Tzheer', true, 1];
let names1 = ['Ezequiel', 'Tzofeheer', 'Tzheer'];
let names2 = ['Ezequiel', 'Tzofeheer', 'Tzheer'];
let names3 = ['Ezequiel', 'Tzofeheer', 'Tzheer', true, 0xFA];
//# sourceMappingURL=basics_types.js.map