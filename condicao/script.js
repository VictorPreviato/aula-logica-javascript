// if (se condição for verdadeira)
const numerico = 7;

if(numerico > 8){
    console.log("O numero informado é maior que 8");
} else{
    console.log("O número é menor que 8");
}

// else(se condiçao for falsa)
// estrutura aninhada e complexa

const nomealuno = "Maria";

if(nomealuno === "Juliano"){
    console.log("Olá " + nomealuno);
} else if(nomealuno === "Maria"){
    console.log("Olá Maria");
} else {
    console.log("O nome não é Juliano nem Maria");
}

// encadeamento de condição
let idade = 16;
let temRG = false;

if(idade >= 18 && temRG){
    console.log("Você pode votar");
} else{
    console.log("Você não pode votar");
}

// switch

let novaidade = 18;

switch(novaidade){
    case 18:
        console.log("o usuário tem 18.");
        break;
        case 17:
            console.log("O usuário tem 17.");
            break;
            default:
                console.log("Idade inválida");
                break
}