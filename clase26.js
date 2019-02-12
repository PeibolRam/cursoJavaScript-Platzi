class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        console.log(`Hola! me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre,this.apellido)
        }
    }

    soyAlto(){
        if (this.altura > 1.80)
        {
            console.log(`Soy alto mido ${this.altura} metros`)
        }else
        {
            console.log(`Soy bajo mido ${this.altura} metros`)
        }
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var {nombre,apellido} = this
        console.log(`Hola! me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}


function responderSaludo(nombre,apellido,esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console-log(`Ah mira, no sabía que eres desarrollador`)
    }
}

//var pablo = new Persona('Pablo','Ramirez',1.81)
