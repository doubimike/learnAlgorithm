// var x = 0;

// function test() {
//     console.log(this.x);
// }

// var o = {};
// o.x = 1;
// o.m = test;

// // o.m.apply(o);


// var a = {
//     v: 0,
//     f: function(x) {
//         this.v = x;
//     }
// }

// a.f(5)

// console.log(a.v)


// function ff(x) {
//     this.x = x;
// }
// ff(5)
// console.log(this.x)


// function c(xx) {
//     this.m = xx;
// }

// var b = new c(5)
// console.log(b)

// function a(xx) {
//     this.b = xx;
// }

// var o = {}
// a.apply(o, [5])
// console.log(a.b)
// console.log(o.b)


function a(xx, yy) {
    console.log(arguments);
}

a.apply(null, [5, 55])
a.call(null, 5, 55)
