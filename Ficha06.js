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
let mes = 8;

switch(mes) {
    case 12:
    case 1:
    case 2:
        console.log("Inverno");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    
    case 6:
    case 7:
    case 8:
        console.log("Verão");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Outono");
        break;

    default:
        console.log("Inválido");
        break;       
}

//Operador Ternário

//9
let valorCompra = 200;
let valorFinal = valorCompra > 100 ? valorCompra * 0.90 : valorCompra;
console.log(valorFinal);


//10
let notaAluno = 7;
let statusAluno = notaAluno >= 10 ? "Aprovado" : "Reprovado";
console.log(statusAluno);


//Arrays

// 11
let arrayFrutas = ["Maçã", "Pêra", "Laranja", "Ananás", "Banana"];
console.log(arrayFrutas[0]);
console.log(arrayFrutas[4]);


// 12
let numeros = [];
numeros.push(10, 20, 30);
console.log(numeros);

numeros.pop();
console.log(numeros);

// loops For



