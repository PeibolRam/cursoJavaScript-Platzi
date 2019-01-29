function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola! me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    if (this.altura > 1.80)
    {
        console.log(`Soy alto mido ${this.altura} metros`)
    }else
    {
        console.log(`Soy bajo mido ${this.altura} metros`)
    }
    
}

var pablo = new Persona('Pablo','Ramirez',1.81)