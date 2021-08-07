// Buscamos un elemento según el ID que ingresemos
// var div = document.getElementById("mi_div");

/* classList es una API de HTML5 que permite agregar la clase especificada
al elemento previamente especificado */
// div.classList.add("mi_clase");

/* --------------------------------------------------------- */
// Filtrar elemento por clases
/* En HTML varios elementos pueden compartir la misma clase, el metodo
cambia a getElementsByClassName */
// var div = document.getElementsByClassName("mi_clase");

/* Al usar getelementsbyclassname estaremos lidiando con un arreglo de
elementos*/
// console.log(div);

/* --------------------------------------------------------- */
/* Otra forma en como podemos seleccionar los elementos es con
getElementsByTagName, este metodo nos sirve para encontrar todos los
elementos que comparten una misma etiqueta */

// var div = document.getElementsByTagName("div");
// console.log(div);

/* --------------------------------------------------------- */
/* A partir de las ultimas versiones de JS tenemos algo que se llama
document.querySelector(); con esto podemos buscar por clases utilizando
el punto "." o por ID utilizando el hash "#" */
// var mi_clase = document.querySelector(".mi_clase");
// console.log(mi_clase);


/* Sin embargo este selector se diferencia de getElementsByClassName
es que querySelector solo retorna un elemento (el primero en el flujo 
del DOM), si quisiera obtener todas las clases tendría que utilizar
querySelectorAll */

// var mi_clase = document.querySelectorAll(".mi_clase");
// console.log(mi_clase);
/* Esto lo retornará en forma de arreglos aunque el valor devuelto
solo sea uno */

/* --------------------------------------------------------- */
//  Ejemplo de un selector hecho con un mini jquery
// El simbolo de $ en jquery significa busqueda
function $(selector){
    return document.querySelector(selector);
}
var mi_clase = $(".mi_clase");

console.log(mi_clase);