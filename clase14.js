var pablo = {
  nombre: 'Pablo',
  apellido: 'Ramírez',
  edad: 24,
  peso: 80
}

console.log(`Al inicio del año ${pablo.nombre} pesa ${pablo.peso} kg`);

const INCREMENTO_PESO = 0.300

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = pablo.peso -3
var dias = 0

while (pablo.peso > META) {
  if (comeMucho()) {
    //aumenta de peso
    aumentarDePeso(pablo)
  }
  if (realizaDeporte()) {
    //adelgazar
    adelgazar(pablo)
  }
  dias += 1
}
 console.log(`Pasaron ${dias} días para que ${pablo.nombre} pesara ${pablo.peso.toFixed(2)} kg`);
