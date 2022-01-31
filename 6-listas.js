console.log(`Tranlhando com listas`);
// const salvador = `salvador`;
// const saoPaulo = ` São Paulo`;
// const rioDejaneiro = `Rio de Janiero`;

const listaDeDestinos = new Array(
    `salvador`,
    ` São Paulo`,
    `Rio de Janiero`
);

listaDeDestinos.push(`Curitiba`) // adcionando um item na lista
console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDejaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);