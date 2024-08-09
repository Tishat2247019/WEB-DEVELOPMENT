function getvalue() {
  let textarea = document.getElementById("input1");
  let value = textarea.value;
  let newitem = `<p>${value}</p>`;

  let textarea2 = document.getElementById("input2");
  let value2 = textarea2.value;
  let newitem2 = `<p>${value2}</p>`;

  let finalitem = newitem + newitem2;

  let div = document.createElement("div");
  div.style.border = "2px solid black";
  //   div.style.display = "flex";
  div.style.margin = "10px";
  //   div.style.backgroundColor = "red";
  //   div.sty  le.textAlign = "center";
  div.style.minWidth = "100px";
  div.innerHTML = finalitem;
  document.querySelector(".left").appendChild(div);
}

document.getElementById("button").addEventListener("click", getvalue);
