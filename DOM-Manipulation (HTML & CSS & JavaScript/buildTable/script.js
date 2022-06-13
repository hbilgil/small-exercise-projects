const container = document.getElementById('mountains');

const table = document.createElement('table');
table.classList.add('content');
container.appendChild(table);

const headerRow = document.createElement('tr');
headerRow.classList.add('headers');


const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];


for (let key in MOUNTAINS[0]){

    table.appendChild(headerRow);
    const header = document.createElement('th');
    headerRow.appendChild(header);
    header.textContent = key;
}

for (let i = 0; i<= 6; i++) {

    const datumRow = document.createElement('tr');
    datumRow.classList.add('data');
    table.appendChild(datumRow);

    for (let key in MOUNTAINS[i]){
        const datum = document.createElement('td');
        datumRow.appendChild(datum);
        datum.textContent = MOUNTAINS[i][key];
    }
    
}