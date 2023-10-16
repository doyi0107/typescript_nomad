"use strict";
const doyi = {
    name: "doyi",
    age: 23
};
function playerdong(name) {
    return {
        name
    };
}
const a = playerdong("dong");
console.log(a);
a.age;
const playerdan = (name) => ({ name });
const b = playerdan("sss");
b.age;
