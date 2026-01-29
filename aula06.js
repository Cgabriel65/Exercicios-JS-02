/* 
const bateria = 10;
if (bateria <= 20) {
    console.log("Bateria fraca");    
}
 */

// Exercicio: Radar de velocidade
/* 
let velocidade = 100

if (velocidade > 90) {
    console.log(`Velocidade ${velocidade} km/h. Acionar câmera do radar!`);
} else if (velocidade < 90) {
    console.log("Não acionar");
};


let saldo = 50;
let valorCompra = 80;

if (saldo >= valorCompra) {
    saldo -= valorCompra;  
    console.log("Compra realizada com sucesso! Novo saldo: " + saldo);
} else {
    console.log("Saldo insuficiente");
}
 */
// Exercicio: Use of if para verificar se é par ou impar 

// let num = 2;
// let num2 = 3;



// if (num % 2 === 0) {
//     console.log(num + " é Par");
// } else {
//     console.log(num + "é Impar");
// }

//Exercicio descontos
/* 
let categoria = "free";
let desconto 

if (categoria === "free") {
    desconto = 0;

} else if (categoria === "bronze") {
    desconto = 5;
    
} else if (categoria ==="silver") {
    desconto = 10;

} else if (categoria === "gold") {
    desconto = 15;
    }    
    
    console.log(`O utilizador com assinatura ${categoria} tem direito a ${desconto}%`);
    */
   
   
// Switch: n verifica caso a caso ao contrário de if else, mais eficiente
// como é que switch faz para ir direto ao valor que interessa?


//Exercicio: dias da semana
/* 
let diaSemana = 6;

switch (diaSemana) {
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

*/

// Operadores ternários
// condicao ? valorSeVerdadeiro : valorSeFalso   *é preciso guardar valor em variável

/* 
let idade = 20;
let msg = idade < 18 ? "Menor de idade" : "Maior de idade"; //quanto menos linhas, menor é o tempo de computação, n é só estético
console.log(msg);
 */


// Exercicio op.ternário:
/*
const notaMinima = 10; 
const notaAluno = 14;
const aprovado = notaAluno > notaMinima ? "Aprovado" : "Reprovado";
console.log(aprovado);
 */

// Array
//Em JS pode ter vários tipos;
//É iterável ao contrários dos objetos

/* 
let array1 = [1, "welele"];
console.log(array1);
console.log(array1[0]);
array1.push(3);
console.log(array1);
*/


//Exercicio
let produtos = ["Camisa", "Calça", "Meias", "Tenis"];
produtos.push("novo1");
produtos.push("novo2");
console.log(produtos);
produtos.pop();
console.log(produtos);

produtos.pop();
produtos.unshift("novo3");
produtos.shift();

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}


//While
let i = 10; 
while (i > 0) {
    console.log("Contagem descrescente: " + i);
    i--;
};
