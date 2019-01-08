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

function imprimirNombreEnMayusculas({ nombre }){
  console.log(nombre.toUpperCase());
}


imprimirNombreEnMayusculas(pablo);
imprimirNombreEnMayusculas(oscar);

imprimirNombreEnMayusculas({ nombre: 'Chiquito' });
