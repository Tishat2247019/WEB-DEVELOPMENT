let a = 5;
let b = 6;

let c;
c = a + b;

c > 10 ? console.log("greater") : console.log("less");

if (c > 10) {
  console.log("The value of c is greater than 10");
} else {
  console.log("The value of c is less than 10");
}
/* 
I am  a 
multi line 
comment 

Here, I can write as 
many lines
as I wish to be

  */

//loops

for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

let Tishat = {
  name: "tishat",
  University: "AIUB",
  Age: 23,
};

let opi = {
  name: "Farja Yesmin Opi",
  age: 23,
  Department: "Cse",
  Address: "Sylhet",
};

for (const key in opi) {
  const element = opi[key];
  console.log(key, element);
}

for (const i in Tishat) {
  console.log(i, Tishat[i]);
}

let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

let do_while = 0;

do {
  console.log(do_while);
  do_while++;
} while (do_while < 20);

console.log(c);

//funtion

function nice(name) {
  console.log("hello " + name);
}

nice("tishat");
nice("Opi");
nice("Rabab");

function sum(a, b, c = 10) {
  console.log(a + b + c);
}
sum(5, 6, 1);

let aa = "hello";
console.log("The value of a  is ", aa);

let named = "tiShat";
console.log(named.toUpperCase());
console.log(named.length);
console.log(named.slice(1, 4));
console.log(named, "loves", "opi");
