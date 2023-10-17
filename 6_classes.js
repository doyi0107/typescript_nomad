"use strict";
class User {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Man extends User {
    getNickName() {
        console.log(this.nickname);
    }
}
const sevin = new Man("lee", "se", "vin");
sevin.getFullName;
