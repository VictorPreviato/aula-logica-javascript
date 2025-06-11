class Pessoa{
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }

    get nome(){
        return this._nome;
    }
    
    set nome(novoNome){
        this._nome = novoNome;
    }
}

let pessoa = new Pessoa("Victor", 22);
console.log(pessoa.nome);
pessoa.nome = "Victor Previato";
console.log(pessoa.nome);