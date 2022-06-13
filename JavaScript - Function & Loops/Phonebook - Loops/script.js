
const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
    ]

for (const contact of phonebook) {
const name = 'Mustafa';
const para = document.createElement('p');

    if (contact.name !== name) {
        continue;
    } else {
        para.textContent = contact.name + '\'s number is ' + contact.number + '.';
    }
    
const section = document.querySelector('.preview');
section.appendChild(para);
}
