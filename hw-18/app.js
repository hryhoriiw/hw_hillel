

const table = document.createElement('table');
table.setAttribute('id' , 'dynamicTable');

for ( let i = 1; i <= 10; i++) {

  const row = document.createElement('tr')

  for ( let j = 1; j <= 10; j++) {

    const calcValue = ( (i - 1) * 10 + j);

    const cell = document.createElement('td')

    cell.textContent = calcValue;

    row.appendChild(cell);

  }

  table.appendChild(row);

}

document.body.appendChild(table);