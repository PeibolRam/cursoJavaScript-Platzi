var x = 4, y = '4'
/*
    x == y True porque agarra el '4' y '4'
    x === y false porque x es # y Y es str
    siempre a que usar el ===
*/

var pablo = {
  nombre:'Pablo'
}

var otraPersona= {
  ...pablo
}

/*
    pablo == otraPersona false, porque no es el mismo objeto
    si otropablo = pablo
    ahora el pablo == otraPersona True
*/


/*
Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String

*/
