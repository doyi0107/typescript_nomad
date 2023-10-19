"use strict";
class firstPlayer {
    constructor(firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    fullName() {
        return `${this.fullName} ${this.lastName}`;
    }
    sayHi(name) {
        return `Hello ${name} My name is ${this.fullName}`;
    }
}
function makeUser(user) {
    return {
        firstName: "doyi",
        lastName: "le",
        fullName: () => "xxx",
        sayHi: (name) => "string"
    };
}
makeUser({
    firstName: "doyi",
    lastName: "le",
    fullName: () => "xxx",
    sayHi: (name) => "string"
});
