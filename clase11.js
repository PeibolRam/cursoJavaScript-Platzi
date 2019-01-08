var pablo = {
  nombre: 'Pablo',
  apellido: 'Ramírez',
  edad: 24,
  ingeniero: true,
}

var hector = {
  nombre: 'Hector',
  apellido: 'Hernández',
  edad: 13,
  ingeniero: false,
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function mayorDeEdad(persona){
  console.log(`${persona.nombre} es `);
  if(esMayorDeEdad(persona)){
    console.log(`mayor de edad y tiene ${persona.edad} años`);
  }else{
    console.log(`menor de edad y tiene ${persona.edad} años`);
  }
}
