"use strict";
// readonly
const peoplean = (name) => ({ name });
const c = peoplean("sss");
c.age;
c.name;
// tuple
const children = ["yoon", 23, true];
children[0] = "hi";
// any
const v = [1, 2, 3, 4, 5];
const e = true;
v + e;
// unknown
let d;
let f = d + 1;
if (typeof d === 'number') {
    let f = d + 1;
}
function hello() {
    console.log(xx);
}
// never
function bye(name) {
    if (typeof name === "string") {
    }
    else if (typeof name === "number") {
    }
    else {
        name;
    }
}
