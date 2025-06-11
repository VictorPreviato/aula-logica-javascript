// superclasse

class Ave{
    
    // método
    voar(){
        console.log("A ave voa");
    }
}

class Pinguin extends Ave {
    // polimorfismo
    voar(){
        console.log("Pinguins não podem voar");
    }
}

let ave = new Ave();
let pinguin = new Pinguin();

ave.voar();
pinguin.voar();
