// Ejercicio 4

var valores = [true, 5, false, "adios","hola", 2];

var maxstringlength = 0;
var maxstring = "";

var numeros = [];
var suma = 0;
var resta = 0;
var multiplicacion = 0;
var division = 0;
var modulo = 0;

var i = valores.length - 1;
for(; i>= 0; i--){
    if(typeof valores[i] === "string" && valores[i].length > maxstringlength){
        maxstringlength = valores[i].length;
        maxstring = valores[i];
    }

    else if (typeof valores[i] === "number"){
        numeros.push(valores[i]);
        // console.log(valores[i]);
    }

}

suma = numeros[0] + numeros[1];
resta = numeros[0] - numeros[1];
multiplicacion = numeros[0] * numeros[1];
division = numeros[0] / numeros[1];
modulo = numeros[0] % numeros[1];

console.log("El texto mas grande es " + maxstring);
console.log("Total de suma es " + suma);
console.log("Total de resta es " + resta);
console.log("Total de multiplicacion es " + multiplicacion);
console.log("Total de division es " + division);
console.log("Total de modulo es " + modulo);
