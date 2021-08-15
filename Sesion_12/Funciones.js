/* Primero colocamos la palabra reservada function, luego colocamos
el nombre de la función, seguido de ellos colocaremos unos paréntesis ()
en los cuales irán los argumentos que deseemos pasarle a la función,
luego vendrá el bloque de código definido por las llaves {}*/
function suma(a,b){
    // Código que se va a ejecutar al llamar la función
    b = b || 0;
    /* Sí B no tiene valor asignado, le asigna 0 para no se muestre
    como undefined o no truthy, de esta manera puede procesar la suma
    con solo un argumento establecido y no mostrara NaN como resultado */

    return a + b;
    /* La palabra reservada Return nos permite retornar un valor de la
    función. Sí nosotros no especificamos esplicitamente que va retornar
    la función, entonces retornará undefined*/
}

var resultado = suma (2);

console.log(suma(2,3));
console.log(resultado);

/* -----------------------------------------------------------*/

/* Las funciones también se pueden pasar como parámetros */
var funcion_suma = suma;

/* Este ejemplo retorna NaN (Not a Number) debido a que al ejecutar la
función, no se le están ingresando argumentos para que realice la suma */

function ejecutar(funcion) {
    return funcion();
}

resultado = ejecutar(funcion_suma);

console.log(resultado);

