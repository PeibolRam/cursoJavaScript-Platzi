var pablo = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}
var personas = [pablo, alan, martin, dario, vicky, paula]

const esAlta = persona =>  persona.altura > 1.8
const esBaja = persona =>  persona.altura < 1.8

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona => {
  
  return {
    ...persona,
    altura: persona.altura * 100
  }
}

var personasCms = personas.map(pasarAlturaACms)

console.log(personasAltas);
console.log(personasBajas);
console.log(personasCms);
