/* Closures es un patrón en el que declaramaos una función dentro de
otra función, una recomendación al escribir JS es que no debemos
contaminar el scope global, es decir, no debemos declarar variables
que estén fuera de una función, se recomienda que todas las variables
que declaremos deben estar dentro de alguna función, ya que de lo
contrario las variables se irán al scope global del javascript */

/* Para realizar ello podemos agrupar el código dentro de una función
que se llamará a sí misma, la sintáxis es la siguiente*/

(function funcion1() {

    // Ejemplo de Closure, función dentro de otra función
    document.getElementById("btn").addEventListener("click", function funcion2() {
        console.log("Me hizo click");
    })

    setTimeout(function funcion3() {
        console.log("Hola mundo")
        console.log(hola_mundo("Jorvict"));
    }, 1000);

})(); //Los dos parentesis es para que la función se llame a si misma



function hola_mundo(nombre) {
    function construct() {
        nombre = "Enrique"; /* Reemplaza valor original de la variable */
        return "Hola " + nombre;
    }

    return construct();
    // console.log(nombre);
}

/* Los closures tienen acceso a las variables de la función padre,
por ejemplo la funcion construct tiene acceso a las variables de la
funcion hola_mundo */

/* Otro detalle a considerar es que los closures reciben una referencia
de la variable y no un valor, ¿cuál es la diferencia?, la diferencia es
que sí nosotros modificamos una variable dentro del closure también
se modifica dentro de la función padre*/
// En otras palabras, reemplaza el valor original establecido en la función padre