"use strict";
var Esporte;
(function (Esporte) {
    Esporte[Esporte["Basquete"] = 0] = "Basquete";
    Esporte[Esporte["Footebal"] = 1] = "Footebal";
    Esporte[Esporte["Xadrez"] = 2] = "Xadrez";
    Esporte[Esporte["Volei"] = 3] = "Volei";
})(Esporte || (Esporte = {}));
const Ze = {
    nome: 'Flaus',
    materias: ['frontend', 'backend'],
    praticaEsporte: Esporte.Basquete,
};
const Flaus = {
    nome: 'Flaus',
    materias: ['frontend', 'backend'],
    praticaEsporte: Esporte.Xadrez
};
const Bangos = {
    nome: 'Bangos',
    materias: ['frontend', 'backend'],
    praticaEsporte: Esporte.Footebal
};
const Hoolen = {
    nome: 'Flaus',
    materias: ['frontend', 'backend'],
};
function dizNome(lista) {
    console.log(`Meu nome é ${lista}`);
}
function dizMateria(lista) {
    console.log(`Eu estudo ${lista[0]} e ${lista[1]}`);
}
const apresentacao = () => {
    dizNome(Flaus.nome);
    dizMateria(Flaus.materias);
};
console.log(apresentacao());
