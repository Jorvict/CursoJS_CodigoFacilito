var numeros = [2, 4, 6, 8];

/* forEach es parecido a map pero este no retorna un nuevo arreglo construido,
simplemente nos permite iterar cada uno de los elementos del arreglo.
Es muy paarecido a un ciclo For, con la diferencia en que lugar de
utilizar un ciclo, utilizamos un callback*/

/* Esta función recibe 3 parámetros:
  El Elemento al cual se está accediendo.
  El Index del elemento al que se está accediendo
  Y el Arreglo del cual se están obteniendo estos datos*/
numeros.forEach(function nombreFuncion(Elemento, Index, Arreglo) {
    console.log(Elemento);
    console.log(Index);
    console.log(Arreglo);
})

//Un ejemplo de calcular la raiz cuadrara de cada número pero con forEach
numeros.forEach(function nombreFuncion(Elemento, Index, Arreglo) {
    Arreglo[Index] = Math.pow(Elemento, 2);
})
console.log(numeros)