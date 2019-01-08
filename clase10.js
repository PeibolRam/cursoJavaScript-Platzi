var pablo = {
  nombre: 'Pablo',
  apellido: 'Ramírez',
  edad: 24,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  consultor: true
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `);
  if(persona.ingeniero)
  {
      console.log('Ingeniero');
  }else {
    console.log('No es ingeniero');
  }
  if(persona.cocinero)
  {
    console.log('cocinero');
  }else {
    console.log('No es cocinero');
  }
  if(persona.cantante)
  {
    console.log('Cantante');
  }else {
    console.log('No es cantante');
  }
  if(persona.dj)
  {
    console.log('dj');
  } else {
    console.log('No es dj');
  }
  if(persona.guitarrista)
  {
    console.log('guitarrista');
  }else {
    console.log('No es guitarrista');
  }
  if(persona.consultor)
  {
    console.log(' es consultor');
  }else {
    console.log('No es consultor');
  }
}
imprimirProfesiones(pablo)


//Desafio

function mayorDeEdad(persona){
  console.log(`${persona.nombre} es `);
  if(persona.edad>=18){
    console.log(`mayor de edad y tiene ${persona.edad} años`);
  }else{
    console.log(`menor de edad y tiene ${persona.edad} años`);
  }
}

mayorDeEdad(pablo)
