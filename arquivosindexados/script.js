// Abrindo um banco de dados IndexdDB

const request = indexedDB.open("clienteDB", 1);

request.onupgradeneeded = function(event){
    const db = event.target.result;
    const store = db.createObjectStore("clientes" , {keyPath:"id"});
    store.createIndex("nome", "nome", {unique:false});
}

request.onsuccess = function(event){
    const db = event.target.result;
    const transaction = db.transaction("clientes", "readwrite");
    const store = transaction.createObjectStore("clientes");


// Adicionando um novo cliente
store.add({ id: 1, nome: "Maria Eduarda", email: "maria@email.com"});

// Lendo um cliente pelo nome
const index = store.index("nome");
const nomeIndex = index.g("Maria Eduarda");

nomeIndex.onsuccess = function(){
    console.log(nomeIndex.result);
}
}