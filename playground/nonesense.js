const add = (a, b) => a + b;

let a = 0
setTimeout((callback) => {
    a = a + add(1, 5)
    console.log(a);
    callback(a);
}, 2000);



setTimeout(() => {
    console.log(a);
}, 3000);