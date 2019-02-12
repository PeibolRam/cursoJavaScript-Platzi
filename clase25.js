class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`Hola! me llamo ${this.nombre} ${this.apellido}`)
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
    saludar(){
        console.log(`Hola! me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

//var pablo = new Persona('Pablo','Ramirez',1.81)
