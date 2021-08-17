var letras = ["H", "o", "l", "a"];
console.log(letras.join(""));

var palabra = letras.reduce(function nombreFuncion(valor_anterior_retornado, valor_actual, index, arreglo) {
    return valor_anterior_retornado + valor_actual;

    /* Explicación paso por paso de funcionamiento de Reduce
        La primera iteracion de reduce es sobre el primer elemento del arreglo
        Es decir, en la primera iteración valor_anterior_retornado = "" (nada) 
            y valor_actual = H. Si concatemos, "" + "H" = "H"
        En la segunda iteración valor_anterior_retornado = "H"
            y valor_actual = o. Si concatemos, "H" + "o" = "Ho"
        En la tercera iteración valor_anterior_retornado = "Ho"
            y valor_actual = l. Si concatemos, "Ho" + "l" = "Hol"
        En la cuarta iteración valor_anterior_retornado = "Hol"
            y valor_actual = a. Si concatemos, "Hol" + "a" = "Hola"
        De esta manera, una vez hayan finalizado todas las itetaciones
        el resultado final será "Hola"*/
})
console.log(palabra);


/*Otro caso practico para reduce es sumar todos los números de un array*/
var numeros = [20, 1, 23, 1, 5];
var suma = numeros.reduce(function nombreFuncion(valor_anterior_retornado, valor_actual, index, arreglo){
    return valor_anterior_retornado + valor_actual;
})
console.log(suma);


/* Otra forma pero solamente usando For*/
var suma = 0;
for(var i = 0; i<numeros.length; i++){
    suma += numeros[i];
}
console.log(suma);


/* Al utilizar reduce, tambien le podría agregar un valor inicial
a valor_anterior_retornado, de esta manera valor_anterior_retornado puede
tener un valor asignado en la primera iteracion, el el siguiente ejemplo
se le da un valor inicial de "5", por ello la suma total da 55 */
var numeros = [20, 1, 23, 1, 5];
var suma = numeros.reduce(function nombreFuncion(valor_anterior_retornado, valor_actual, index, arreglo){
    return valor_anterior_retornado + valor_actual;
}, 5)
console.log(suma);
