var pablo = {
  nombre: 'Pablo',
  apellido: 'Ramírez',
  edad: 24,
  peso: 80
}

console.log(`Al inicio del año ${pablo.nombre} pesa ${pablo.peso} kg`);

const INCREMENTO_PESO = 0.200

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i=1; i<=365; i++){
  var random = Math.random()
  if (random < 0.25){
    //aumenta de peso
    aumentarDePeso(pablo)
  }else if(random < 0.5){
    //adelgazar
    adelgazar(pablo)

  }
}


console.log(`Al final del año ${pablo.nombre} pesa ${pablo.peso.toFixed(2)} kg`);
