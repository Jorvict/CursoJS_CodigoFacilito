/* Filter es un metodo que toma como parametro un callback o una función
y construye un nuevo arreglo a partir de aquellos elementos que al
ejecutar la función esta devuelve verdadero */


var numeros = [10, 2, 3, 5, 9, 20, 22];
/*
var numeros_pares = [];

for(var i = numeros.length; i>= 0; i--){
    var numero = numeros[i];
    if(numero % 2 == 0){
        numeros_pares.push(numero);
    }
}
*/

var numeros_pares = numeros.filter(function pares(numero){
   return numero % 2 === 0; 
});

var numeros_impares=numeros.filter(function impares(numero) {
    return numero % 2 === 1;
})

console.log(numeros_pares);
console.log(numeros_impares);