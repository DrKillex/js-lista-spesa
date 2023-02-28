'use strict';

let listaSpesa = [];

for (let i = 0; i < 100; i++){
    listaSpesa.push(`elemento${i+1}`)
};

console.log(listaSpesa);

let listaElementi = [];

const htmlLista = document.getElementById('lista');

while (listaSpesa.length > listaElementi.length){
    const listItem = document.createElement('li');
    listItem.append(listaSpesa[listaElementi.length]);
    htmlLista.append(listItem);
    listaElementi = document.querySelectorAll('li');
};

console.log(listaElementi.length);
console.log(listaElementi);