// readonly
var peoplean = function (name) { return ({ name: name }); };
var c = peoplean("sss");
c.age;
c.name;
// tuple
var children = ["yoon", 23, true];
children[0] = "hi";
// any
var v = [1, 2, 3, 4, 5];
var e = true;
v + e;
// unknown
var d;
var f = d + 1;
if (typeof d === 'number') {
    var f_1 = d + 1;
}
function hello() {
    console.log(xx);
}
