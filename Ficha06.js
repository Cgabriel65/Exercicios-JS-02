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

// 13
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 14
let numTabuada = 3;

for (let i = 1; i <= 10; i++) {
    console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}

// 15
let soma = 0
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);


// 16
let arrayNomes = ["Cláudio", "João", "Pedro", "Rui", "Zé"];
for (let i = 0; i < arrayNomes.length; i++) {
    console.log(`${arrayNomes[i]}: posição: ${i}`);
}

// Loops While e do-While

// 17
let numContagem = 10;

do {
    console.log(numContagem);
    numContagem--;

} while (numContagem >= 0);


// 18
let numContagemPares = 20;

while(numContagemPares >= 0) {
    if (numContagemPares % 2 === 0) {
        console.log(`número: ${numContagemPares} é par`);
    }
    numContagemPares--;
}

// 19
//19.1 
let arrayNotas = [10, 3, 15, 18, 20];
let maiorNota = arrayNotas[0];
let menorNota = arrayNotas[0];

let somaNotas = 0;
let media = 0;

let qtdExcelente = 0;
let qtdBom = 0;
let qtdSuficiente = 0;
let qtdInsuficiente = 0;

let iNotas = arrayNotas.length - 1

while (iNotas >= 0) {
    
    
    if (arrayNotas[iNotas] > maiorNota) {
        maiorNota = arrayNotas[iNotas];
    }
    else if (arrayNotas[iNotas] < menorNota) {
        menorNota = arrayNotas[iNotas];
    }

    somaNotas += arrayNotas[iNotas];

    if (arrayNotas[iNotas] >= 18) {
        qtdExcelente++
        console.log(`${arrayNotas[iNotas]} tem Excelente`);
    }

    
    if (arrayNotas[iNotas] >= 15 && arrayNotas[iNotas] < 18) {
        qtdBom++
        console.log(`${arrayNotas[iNotas]} tem Bom`);
    }

    
    if (arrayNotas[iNotas] >= 10  && arrayNotas[iNotas] < 15) {
        qtdSuficiente++
        console.log(`${arrayNotas[iNotas]} tem Suficiente`);
    }

    
    if (arrayNotas[iNotas] < 10) {
        qtdInsuficiente++
        console.log(`${arrayNotas[iNotas]} tem Insuficiente`);
    }

    iNotas--;
}


media = somaNotas/arrayNotas.length;
console.log("Média: ", media);
console.log("Quantidade Excelente: ", qtdExcelente);
console.log("Quantidade Bom: ", qtdBom);
console.log("Quantidade Suficiente: ", qtdSuficiente);
console.log("Quantidade Insuficiente: ", qtdInsuficiente);

//Exercicios Lógica

//Exercicio 1:
let numerosFizz = 20;

for(let i = 1; i <= 20; i++) {
    console.log(i)
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5) {
        console.log("Fizz");
    } else if (i % 3) {
        console.log("Buzz");
    }
}

//Exercicio2:
let num = 5
let fatorial = 1
for (let i = num; i > 0; i--) {
    fatorial *= i;
}

console.log("Fatorial: ", fatorial);

