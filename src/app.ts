interface Estudantes {
    nome: string,
    materias: string[],
    praticaEsporte?: Esporte,
}

enum Esporte {
    Basquete,
    Footebal,
    Xadrez,
    Volei,
}

const Ze: Estudantes  = {
    nome: 'Flaus',
    materias: ['frontend', 'backend'],
    praticaEsporte: Esporte.Basquete,
}

const Flaus: Estudantes  = {
    nome: 'Flaus',
    materias: ['frontend', 'backend'],
    praticaEsporte: Esporte.Xadrez
}

const Bangos: Estudantes  = {
    nome: 'Bangos',
    materias: ['frontend', 'backend'],
    praticaEsporte: Esporte.Footebal
}

const Hoolen: Estudantes  = {
    nome: 'Flaus',
    materias: ['frontend', 'backend'],
}

function dizNome (lista: string) {
    console.log(`Meu nome é ${lista}`);
}

function dizMateria (lista: string[]) {
    console.log(`Eu estudo ${lista[0]} e ${lista[1]}`);
}

const apresentacao = () => {
    dizNome(Flaus.nome);
    dizMateria(Flaus.materias);
}

console.log(apresentacao());