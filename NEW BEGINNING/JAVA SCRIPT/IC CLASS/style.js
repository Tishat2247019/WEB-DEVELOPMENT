console.log("Hello Opi");

document.querySelector(".box").style.backgroundColor = "green";
document.getElementById("box3").style.backgroundColor = "red";

let div = document.createElement("div");
div.innerHTML = "Hel<b>f</b>lo";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

let info = document.getElementById("btn");

info.addEventListener("click", () => {
  document.body.children[0].children[0].innerHTML = "asdf";
});

document.addEventListener("keydown", (e) => {
  console.log(e.key, e.code);
});
