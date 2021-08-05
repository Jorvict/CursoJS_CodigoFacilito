// typeof : Nos permite identificar el tipo de dato de una variable
var number = 0;
var cadena = "Hola";
var array = [];
var json = {};

console.log(typeof number);
console.log(typeof cadena);
console.log(typeof array);
console.log(typeof json);

/* A veces podemos utilizar typeof para definir si esta o no declarada*/
// var hola = null;
if(typeof hola == "undefined"){
    console.log("La variable hola no está declarada");
}


/* Null es un keyword reservada por el lenguaje que indica la ausencia
de valor, es decir cuando nosotros asignamos un valor nulo a una variable
o si no le asignamos valor, la variable tomará un valor null que significa
que está vacía*/

/* Undefined es una variable global (no es una palabra reservada), 
unicamente la puedes leer, no le puedes asignar un valor, éste valor
se devuelve cuando una variable no está definida, es decir no existe
una declaración de la variable */

/* Una curiosidad es que si realizamos la comparación
if(null == undefined){} esta comparación retornará verdadero porque
al hacer la conversión a booleano tanto de null como de undefined,
ambos retornaran falso, y como falso == falso entonces la condicional
retornará verdadero y se ejecutará la estructura condicional, sin embargo
sí comparamos if(null === undefined){} en este caso el tipo de dato
ya no sera el mismo ya que no se está realizando la conversión a booleano
*/

var hello = null;
if(hello == null){
    hello = "hello";
}
console.log(hello);