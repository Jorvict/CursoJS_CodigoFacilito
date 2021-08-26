/* Está disponible recien a partir de ECMAScript 6, esto no es disponible
con versiones navegadores de navegadores, es parecido a un string pero
se definen con `` */

var template = `Hola mundo`;

/* Una característica de los template strings es que reconocen 
saltos de línea, es decir multilínea */
var salto = `Tiene
salto
de línea :0`;

console.log(template);
console.log(salto);

/*La siguiente caracteristica de los template es la INTERPOLACION.
Su síntaxis es colocar un símbolo de peso y luego unas llaves "${}"
dentro de la interpolación puede ir una expresión de javascript, esto 
incluye variables, funciones, etc*/

// Método sin template strings
var nombre = "Jorvict";
var saludo = "Hola " + nombre + " buen día";
console.log(saludo);

// Método con la interpolación de los template strings

var nombre2 = "Enrique";
var saludo2 = `Hola ${nombre2} buen día`;
console.log(saludo2);

function func_nombre() {
    return 2 + 3;
}

var saludo3 = `Hola ${func_nombre()} buen día`;
console.log(saludo3);

// Dentro de la interpolación tambien se puede concatenar
var saludo4 = `Hola ${nombre + " " + nombre2} buen día`;
console.log(saludo4);


/* Otra caracteristica importante son los TAGGED TEMPLATES */
/* Estos reciben 2 parámetros, las cadenas y los valores,
esto nos permitirá reconstruir el template */
/* Las cadenas es un arreglo de todos los strings que hemos utilizado 
en el template, en éste caso sería "Hola " y " buen día" */
/* Los valores son las expresiones que nosotros hemos pasado, en éste
caso sería "nombre3" y "nombre" */

var nombre3 = "Javier";
function tagged(cadenas, valores) {
    console.log(cadenas);
    console.log(valores);
}
tagged `Hola ${nombre3} soy ${nombre} buen día`;