console.log("Hello Opi");
console.log("Hello Tishat");

setTimeout(() => {
  console.log("I am inside set time out");
}, 6000);

console.log("this is done");

const another = (e) => {
  console.log("another");
};

const callback = (arg, another) => {
  console.log("arg");
  another();
};

const loadScript = (src, callback) => {
  let sc = document.createElement("Script");
  sc.src = src;
  sc.onload = callback("Tishat", another);
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
