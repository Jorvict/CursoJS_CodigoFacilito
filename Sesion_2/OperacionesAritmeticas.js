var edad = 19;
edad++;

console.log(edad+3);

var punto_flotantes = 12.5;

/*En Javascript se pueden sumar variables de distinto tipo, 
es decir, se puede sumar un entero (int) con un decimal (float) */

/*Operadores aritméticos
Division: /
Multiplicacion: *
Suma: +
Resta: -
Módulo: %
*/

var resultado_suma = edad + punto_flotantes;

console.log(resultado_suma);

function es_par(numero){
    if(numero % 2 == 0){
        return true;
    }
    return false;
}
console.log(es_par(5));

console.log(Math.pow(2,2)); // Elevar a la potencia
console.log(Math.round(1.9)); // Redondea al entero mas cercano
console.log(Math.ceil(0.1)); // Redondea al entero superior mas cercano
console.log(Math.floor(0.9)); // Redondea al entero inferior mas cercano
console.log(Math.PI); // Muestra valor de PI
console.log(Math.random()); // Muestra valor random entre 0 y 1
console.log(Math.sqrt(7)); // Muestra la raiz cuadrada del número que se le está enviando

