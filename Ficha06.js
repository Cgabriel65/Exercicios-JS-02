//Estruturas Condicionais (if/else)

//1
let idade = 19;
const idadeLimite = 18;

if (idade >= idadeLimite) {
    console.log("Maior de idade");
} else if (idade < idadeLimite) {
    console.log("Menor de idade");
}

//2
let nota = 15;

if (nota >= 16) {
    console.log("Excelente");
} else if (nota >= 14) {
    console.log("Bom");
} else if (nota >= 10) {
    console.log("Suficiente");
} else if (nota < 10) {
    console.log("Insuficiente");
}


//3
let numero = 3;

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

//4

let num1 = 4;
let num2 = 7;

if (num1 > num2) {
    console.log(`num 1: ${num1} é maior`);
} else if (num1 < num2) {
    console.log(`num2: ${num2} é maior`);
} else if (num1 === num2) {
    console.log(`num1: ${num1} é igual a num2: ${num2}`);
}



//Truthy e Falsy

// 5

let nome = "";
let nome2 = "Cláudio";

if (nome) {
    console.log("Nome preenchido");    
} else {
    console.log("Nome vazio");
}

// 6

let varTeste = 0;
let varTeste1 = "";
let varTeste2 = undefined;
let varTeste3 = "texto";

if (varTeste3) {
    console.log("valor Truthy");
} else {
    console.log("valor Falsy");
}

//Switch Case

// 7
let dia = 3;

switch (dia) {
    case 1 : 
        console.log("Segunda");
        break;
    case 2: 
        console.log("Terça");
        break;

    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;

    case 5: 
        console.log("Sexta");
        break;

    case 6:
        console.log("Sábado");
        break;

    case 7:
        console.log("Domingo");                         
        break;

    default:
        console.log("Não encontrado");

}


// 8
