let a = [
    Math.round(Math.random() * 100), 
    Math.round(Math.random() * 100), 
    Math.round(Math.random() * 100), 
    Math.round(Math.random() * 100), 
    Math.round(Math.random() * 100), 
    Math.round(Math.random() * 100), 
    Math.round(Math.random() * 100), 
    Math.round(Math.random() * 100)
];
let b = [];
console.log(a);
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      b.push(a[i]);
    }
}
console.log(b); 