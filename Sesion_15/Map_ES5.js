/* Funciona de manera similar que Filter pero retorna todos los valores,
incluyendo aquellos que no retornan true (a diferencia de filter que
solo retorna los valores true) */

var numeros = [1, 5, 6, 8];

/*La sintaxis de maps es la siguiente, sebes colocar el metodo map y 
como argumento debes pasarle un callback o una funcion, dicha
función se va a ejecutar sobre cada uno de los elementos del arreglo */
// numero.map(callback);

/* Problema: Calcular el cuadrado de cada uno de los elementos del array */

// Sin MAP
var cuadrados = [];
for(var i = numeros.length - 1; i >= 0; i--){
    var numero = numeros[i];
    cuadrados.push(Math.pow(numero,2));
}
console.log(cuadrados);

// Con MAP
var cuadrados2 = numeros.map(function cuadradosmap(numero) {
    // return numero * numero;
    return Math.pow(numero,2);
})
console.log(cuadrados2);
