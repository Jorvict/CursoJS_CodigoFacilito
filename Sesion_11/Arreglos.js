/* En JS como en muchos lenguajes dinámicos los arrays no tienen tipo
por lo cual podemos almacenar datos de distintos tipos, puedes tener
números, cadenas y otros arrays (para matrices), dentro de un mismo array */
var arreglotest = [20, "hola mundo", {}, []];

var arreglo = [20, 10, 8];

console.log(arreglo[0]);
console.log(arreglo.length); // Muestra la cantidad de espacios ocupados del array

arreglo.push(10); // Este metodo sirve para insertar un dato al final del arreglo
console.log(arreglo);

arreglo.unshift(5); // Inserta un dato al inicio del array
console.log(arreglo);

/* Estos 2 métodos cuentan con un inverso */

// Inverso de unshift(shift): Elimina el primer elemento del arreglo
arreglo.shift();
console.log(arreglo);

// Inverso de push(pop): Elimina el ultimo elemento del arreglo
arreglo.pop();
console.log(arreglo);

/* Para iterar un array se utiliza un ciclo for */
// for(var i = 0; i < arreglo.length; i++){
//     console.log(arreglo[i]);
// }
// NOTA: Este ciclo funciona pero no es un ciclo optimizado


/* Para iterar un ciclo de forma optimizada debe ser de la siguiente manera */
/* En este caso la i es declarada fuera del for para que cada vez que
se repita el ciclo, el depurador no tenga que calcular nuevamente la
longitud del arreglo, solo se calculará una vez y será antes de iniciar
el ciclo for */
var arreglo = [20, 10, 8];
var i = arreglo.length - 1;

for(; i >= 0 ; i--){
    console.log(arreglo[i]);
}

