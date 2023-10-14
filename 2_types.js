var doyi = {
    name: "doyi",
    age: 23
};
function playerdong(name) {
    return {
        name: name
    };
}
var a = playerdong("dong");
console.log(a);
a.age;
var playerdan = function (name) { return ({ name: name }); };
var b = playerdan("sss");
b.age;
