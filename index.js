class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;      
    }

    atacar(){
        let ataque

        if (this.tipo == "mago") {
            ataque =  "magia"
        }else if(this.tipo == "guerreiro"){
            ataque =  "espada"
        }else if(this.tipo == "monge"){
            ataque =  "artes marciais"
        }else{
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }   
}

let hero1 = new Hero("Felipao",23,"mago")
let hero2 = new Hero("Gabriel", 18, "guerreiro")
let hero3 = new Hero("Mendes", 20, "monge")
let hero4 = new Hero("Lucas", 23, "ninja")
hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
