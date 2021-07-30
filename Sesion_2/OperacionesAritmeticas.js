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
