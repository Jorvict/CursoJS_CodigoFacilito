// var arreglo = ["carlos", "Manuel", "Aron"];
var arreglo = [2, 5, 10, 1, 20];

/* compareFunction es un parametro opcional de .sort, es una función
que define el modo de ordenamiento */
function Comparacion(a, b) {
    if (a > b){return 1;}
    else if (a < b){return -1;}
    if (a == b){return 0;}
    
    // return a - b;
}

arreglo.sort(Comparacion);

arreglo.reverse();

console.log(arreglo);

/* Convertir una cadena en un arreglo */
var arreglo2 = "a, b, c, 2".split(",");
console.log(arreglo2);

/* Convertir un arreglo a una cadena */
arreglo3 = arreglo.join(",");
console.log(arreglo3);
