"use strict";

// 1. Sukurti 5 HTML tekstinius elementus ir įrašyti tekstą
for (let i = 1; i <= 5; i++) {
    const textElement = document.createElement('p');
    textElement.textContent = `Teksto elementas ${i}`;
    textElement.id = `text-${i}`; // Pažymėta su id
    textElement.className = 'text-element'; // Pažymėta su klase
    document.getElementById('container').appendChild(textElement);
  }

 // 3. Pakeisti jų stilių su skirtingais metodais
    // Pavyzdys su ID
    document.getElementById('text-1').style.color = 'blue';

    // Pavyzdys su klase
    document.querySelector('.text-element').style.fontWeight = 'bold';

    // Pavyzdys su tag
    document.getElementsByTagName('p')[2].style.fontSize = '20px';

    // 4. Sukurti 6 <div> tagus ir nustatyti jų aukštį/plotį
for (let i = 1; i <= 6; i++) {
    const divElement = document.createElement('div');
    divElement.className = 'custom-div';
    divElement.style.backgroundColor = 'gray';
    divElement.style.width = '100px';
    divElement.style.height = '100px';
    document.getElementById('container').appendChild(divElement);
  }

      // 5. Sukurti mygtuką, kuris keičia visų <div> spalvas
      document.getElementById('colorButton').addEventListener('click', () => {
        const divElements = document.querySelectorAll('.custom-div');
        divElements.forEach(div => {
          div.style.backgroundColor = getRandomColor();
        });
  
        // Keisti mygtuko spalvą
        document.getElementById('colorButton').style.backgroundColor = getRandomColor();
      });

      // 6. Sukurti 6 <p> tagus su tekstu iš masyvo
const wordArray = ['Žodis1', 'Žodis2', 'Žodis3', 'Žodis4', 'Žodis5', 'Žodis6'];
for (let i = 0; i < 6; i++) {
  const pElement = document.createElement('p');
  pElement.className = 'p-element';
  pElement.textContent = wordArray[Math.floor(Math.random() * wordArray.length)];
  document.getElementById('container').appendChild(pElement);
}

// Random spalvos generatorius
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}  