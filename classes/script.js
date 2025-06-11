// declarando a classe

class Pessoa{

    // atributos da classe
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    // declarando um método
    saudar(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }

}

// Instanciando
const pessoa1 = new Pessoa("Victor", 22);
console.log(pessoa1.saudar());

const pessoa2 = new Pessoa ("Richard", 20);
console.log(pessoa2.saudar());

// nova classe

class carro{
    // atributos
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    // método
    exibirInfo(){
        return `Carro: ${this.marca} ${this.modelo}`;
    }

}
    // instância
    const meuCarro = new carro("Fusca", "1974");
    console.log(meuCarro.exibirInfo());