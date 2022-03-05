const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSec = document.createElement('section');
document.body.appendChild(newSec);

const title = document.createElement('h2');
title.innerText = "CSE 121b";
newSec.appendChild(title);

const p = document.createElement('p');
p.innerText = "Welcome to Javascript Language";
newSec.appendChild(p);