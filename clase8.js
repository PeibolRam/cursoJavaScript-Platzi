var pablo = {
  nombre: 'Pablo',
  apellido: 'Ramírez',
  edad: 24
}

var oscar = {
  nombre: 'Oscar',
  apellido: 'Rangel',
  edad: 25
}

function imprimirNombreEnMayusculas(persona){
 var  { nombre } = persona // <- var nombre = persona.nombre
  console.log(nombre.toUpperCase());
}


imprimirNombreEnMayusculas(pablo);
imprimirNombreEnMayusculas(oscar);

imprimirNombreEnMayusculas({ nombre: 'Chiquito' });


function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

cumpleanos();
