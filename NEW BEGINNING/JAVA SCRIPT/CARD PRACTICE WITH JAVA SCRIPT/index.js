/* function loadcard(title, name, views, time) {
  let num_views = views + "k";
  let html = `<div class="card">
            <div class="image">
                <img src="images/thumbnail.jpeg" alt="Image not found">
            </div>
            <div class="text">
                <h3>${title}</h3>
                <p>${name}. ${num_views} views. ${time} months ago</p>
            </div>
        </div>`;

  for (i = 0; i < 10; i++) {
    document.querySelector(".container").innerHTML += html;
  }
} */

function loadcard(title, name, views, time) {
  let num_views = views + "k";
  let html = `<div class="card">
              <div class="image">
                  <img src="images/thumbnail.jpeg" alt="Image not found">
              </div>
              <div class="text">
                  <h3>${title}</h3>
                  <p>${name}. ${num_views} views. ${time} months ago</p>
              </div>
          </div>`;

  document.querySelector(".container").innerHTML += html;
}

/* function loadcard(title, name, views, time) {
  // Create the main card div
  let card = document.createElement("div");
  card.className = "card";

  // Create the image container div
  let imageDiv = document.createElement("div");
  imageDiv.className = "image";
  let img = document.createElement("img");
  img.src = "images/thumbnail.jpeg";
  img.alt = "Image not found";
  imageDiv.appendChild(img);

  // Create the text container div
  let textDiv = document.createElement("div");
  textDiv.className = "text";
  let h3 = document.createElement("h3");
  h3.textContent = title;
  let p = document.createElement("p");
  p.textContent = `${name}. ${views}k views. ${time} months ago`;

  // Append h3 and p to the text div
  textDiv.appendChild(h3);
  textDiv.appendChild(p);

  // Append imageDiv and textDiv to the main card div
  card.appendChild(imageDiv);
  card.appendChild(textDiv);

  // Append the card to the container
  document.querySelector(".container").appendChild(card);
}
 */
function hell(t) {
  let div = document.createElement("div");
  div.innerHTML = t;

  div.setAttribute("class", "new");

  document
    .querySelector(".container")
    .insertAdjacentElement("beforebegin", div);
}

/* loadcard(
  "welrjwer asdlfjasdf asdf asdfasdfasdf assdfgsdfgasdf asdf asdf asdf aasdfasdf asdf asdf asdf asdf asdf asdf asdf asd fasdf asdf asdf assdf asdf asdf asdf asddf asdf as | asdfh",
  "code with tishat",
  1233,
  10
);
 */
hell("hello");
