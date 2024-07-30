/* let a = 6;
let b = 8;
let c = a + b;
let n = "hello";
let nn = "world";
function hello(name) {
    console.log(name);

}
function sum(a,b){
    console.log(a+b);
}
console.log(c);
console.log(n + " " + nn);
let name = prompt("Enter a name");
hello(name);
sum(10,20); */
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);