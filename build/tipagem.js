"use strict";
// tipagem no TypeScript
// tipagem implícita
let username = 'rafael_dk';
username = 'isadora_pinto';
// tipagem explicita 
//  : USADA APENAS EM TIPAGEM EXPLICITA
let pi = 3.1415;
let logado = true;
// union types
let rg = 09878909987;
rg = '09878909987';
// DA PRA USAR TODOS OS TIPOS EM   ANY 
let generico = [];
generico = {
    a: '',
    b: 8,
    c: true
};
generico = 'eu sou genérico';
generico = 6.89;
// GUARDANDO UMA LISTA DE STRINGS
const listaDeNomes = ['João Pedro', 'César', 'Vitor', 'Claudia', 'Rafael', 'Lucas'];
// GUARDA UMA LISTA DE NUMBER
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//notas.push('iajoil')
// <>  GENERICO
const valores = ['rafael', 883, 'ola', 909, 'nunes',];
const array = [true, false, false, true, true, true, true, false];
const list = [true, 'd', '1', 332, [], {}, 988];
