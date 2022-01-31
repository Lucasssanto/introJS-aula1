console.log(`Tranlhando com codicionais`);

const listaDeDestinos = new Array(
    `salvador`,
    ` São Paulo`,
    `Rio de Janiero`
);

const idadeComprador = 17;
console.log(" Destiinos possíveis");
console.log(listaDeDestinos);

if (maiorDeIdade >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item 
} else {

    console.log("Não é maior de Idade e não  é possível a venda");
}


console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);