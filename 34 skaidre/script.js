"use strict";
 
const h1 = document.getElementsByTagName("h1");
console.log(h1);
 
const p1 = document.getElementsByClassName("p1");
console.log(p1);
 
const myDiv = document.getElementById("myDiv");
console.log(myDiv)
 
console.log("=======================================")
 
const universalSingle = document.querySelector("h1");
const universalSingle1 = document.querySelector(".p1");
const universalSingle2 = document.querySelector("#myDiv")
 
console.log(universalSingle);
console.log(universalSingle1);
console.log(universalSingle2);
 
const universalAll = document.querySelectorAll("p");
console.log(universalAll);
 
 
console.log("========================")
 
 
universalSingle.setAttribute("class", "h1");
universalSingle.id = "mainHeading";
 
universalAll.forEach((el) => console.log(el.getAttribute("class")));
 
console.log("=============================")
 
universalSingle2.classList.add("myDiv");
 
universalSingle2.classList.replace("myDiv", "kitoksDiv");
const checkIsContaining = universalSingle2.classList.contains("kitoksDiv");
console.log(checkIsContaining);
 
function changeColor() {
    if(window.innerWidth < 400){
        universalSingle2.classList.add("klase2");
        universalSingle2.classList.remove("klase1");
    } else{
        universalSingle2.classList.add("klase1");
        universalSingle2.classList.remove("klase2");
    }
}
// window.addEventListener("resize", changeColor)
 
console.log("=======================================")
 
const changeP2Color = document.querySelector(".p2")
changeP2Color.style.color = "#f6ff0";
changeP2Color.style.backgroundColor = "brown"
changeP2Color.style.padding = "20px"
 
console.log("========================================")
 
const containerDiv = document.getElementById("containerDiv");
const myImage =  document.createElement("Img");
myImage.setAttribute("src",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCat_training&psig=AOvVaw3ZUJYCulO8z5ft0BFV2p9k&ust=1737102528047000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiO5qvp-YoDFQAAAAAdAAAAABAE");
myImage.alt = "cat";
myImage.style.width = "300px";
containerDiv.appendChild(myImage);
 
const textNode = document.createElement("p");
textNode.innerText = "Cia yra katinas";
textNode.textContent = "Cia yra katinas";
 
containerDiv.append(myImage, textNode);
 
console.log("===========================")
 
textNode.addEventListener("click", () => {
    textNode.classList.toggle("klase1");
    textNode.classList.toggle("klase2");
});
console.log("===========================")
///// 1-2 uzd
const divNode = document.createElement("div")
containerDiv.appendChild(divNode)
 
const textNode1 = document.createElement("p");
textNode1.innerText = "Man I love Latinas";
textNode1.textContent = "Man I love Latinas";
 
divNode.append(textNode1)

console.log("=============================")
// 3 uzd
// a. Klasė "myClass"
const divElement = document.getElementById("myDiv");
divElement.classList.add("myClass");
// b. ID "myId"
divElement.id = "myId";
// c. <a> ir <img> 
// 3. c. <a> ir <img> tagų atributai su reikšmėmis.
const newLink = document.createElement("a");
newLink.href = "https://vm.tiktok.com/ZNeKwVwHY/";
newLink.textContent = "Click on me please :)";
document.body.appendChild(newLink);

const newImage = document.createElement("img");
newImage.src = "https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"; // Priskiriamas paveikslėlio šaltinis.
newImage.alt = "Orange kitty"; 
newImage.width = 200; 
newImage.height = 150; 
containerDiv.appendChild(newImage);

console.log("=============================")

// 4. 
const styledDiv = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = `Elementas ${i}`;
  if (i % 2 === 0) {
    p.style.color = "white";
    p.style.backgroundColor = "black";
  } else {
    p.style.color = "black";
    p.style.backgroundColor = "purple";
  }
  styledDiv.appendChild(p);
}
document.body.appendChild(styledDiv);

// 5. 
const inputField = document.createElement("input");
inputField.placeholder = "Įveskite tekstą...";
const inputButton = document.createElement("button");
inputButton.textContent = "Spausti";
const inputDisplay = document.createElement("p");
inputButton.addEventListener("click", () => {
  const value = inputField.value;
  inputDisplay.textContent = `Įvestas tekstas: ${value}`;
  console.log(value);
});
document.body.append(inputField, inputButton, inputDisplay);

console.log("=============================")
// 6. 
const createButton = document.createElement("button");
createButton.textContent = "Sukurti elementą";
const removeButton = document.createElement("button");
removeButton.textContent = "Pašalinti elementą";
const dynamicDiv = document.createElement("div");

createButton.addEventListener("click", () => {
  const dynamicElement = document.createElement("p");
  dynamicElement.textContent = "Naujas elementas";
  dynamicDiv.appendChild(dynamicElement);
});

removeButton.addEventListener("click", () => {
  if (dynamicDiv.lastChild) {
    dynamicDiv.removeChild(dynamicDiv.lastChild);
  }
});

document.body.append(createButton, removeButton, dynamicDiv);

console.log("=============================")
// 7. 
const counterButton = document.createElement("button");
counterButton.textContent = "Click for Latinas";
let counter = 0;
const counterDisplay = document.createElement("span");
counterDisplay.textContent = ` Paspaudimai: ${counter}`;

counterButton.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = ` Paspaudimai: ${counter}`;
});

document.body.append(counterButton, counterDisplay);

console.log("=============================")