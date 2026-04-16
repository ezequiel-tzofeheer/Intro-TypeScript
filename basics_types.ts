// Number
let name_var: number = 321;
name_var = 1.2;
name_var = 0XFA;
console.log(name_var);

// Boolean
let active: boolean = true

// String
let first_name = 'Ezequiel'
let last_name: string = 'Tzofeheer'
let fullname = `${first_name} ${last_name}`

// Enums
enum ROLES {
    MANAGER = 'Manager',
    ADMIN = 'Admin',
    CEO = 'CEO',
    CTO = 'CTO'
}

function setRole(role: ROLES): void {}

setRole(ROLES.CEO);

// Array
let names = ['Ezequiel', 'Tzofeheer', 'Tzheer', true, 1];
let names1: string[] = ['Ezequiel', 'Tzofeheer', 'Tzheer'];
let names2: Array<string> = ['Ezequiel', 'Tzofeheer', 'Tzheer'];
let names3: Array<any> = ['Ezequiel', 'Tzofeheer', 'Tzheer', true, 0xFA];
