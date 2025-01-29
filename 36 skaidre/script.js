"use strict";

document.getElementById('generateTable').addEventListener('click', () => {
    // Paimame vartotojo įvestas reikšmes
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);

    // Patikriname, ar įvestos reikšmės yra teisingos
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
      alert('Įveskite teisingą eilučių ir stulpelių skaičių.');
      return;
    }

    // Sukuriame lentelę
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Išvalome ankstesnį turinį

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < columns; j++) {
        const cell = document.createElement('td');
        cell.textContent = `R${i + 1}C${j + 1}`; // Įrašome celės tekstą
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    tableContainer.appendChild(table); // Pridedame lentelę į DOM
  });