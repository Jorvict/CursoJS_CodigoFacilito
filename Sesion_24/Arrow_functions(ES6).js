var numeros = [1, 2, 3, 4, 5];

var cuadrados = numeros.map(function (n) {
    return n*n;
});
console.log(cuadrados)

// Ejemplo utilizando arrow function

// SINTAXIS
/*En primer lugar no se necesita el keyword "FUNCTION" */
/*Cuando el bloque de código que está dentro de las llaves solo tiene
una instrucción, podemos quitar las llaves, pero si realizamos esto, 
también debemos eliminar el keyword RETURN ya que lo que viene después
de la flecha se retorna automáticamente*/
/*Cuando solo tenemos un parámetro podemos quitar los parentesis */
/*Cuando la función no tiene parámetros, tenemos que colocar los
parametros ¿?, y si tiene varios, debemos colocarlos dentro de parentesis
y separados por comas, ejemplo: (n,x) => */
var cuadrados2 = numeros.map( numero => numero*numero);
console.log(cuadrados2);

// Mas caracteristicas

// Ejemplo sin template
function Tutor(){
    
    this.nombre = "Jorvict";
    var self = this; /* Declaramos self ya que de lo contrario al hacer 
                    referencia como "this" dentro del "setTimeout" termina
                    haciendo referencia al objeto "Window" */
    
    setTimeout(function() {

        self.nombre = "Enrique"; // Self hace referencia a tutor
    }, 500);
}

var tutor = new Tutor();

setTimeout(function(){console.log(tutor.nombre);}, 1000);

// Ejemplo con arrow function
/* Al utilizar arrow function, heredan el scope del padre, es decir,
si en lugar de utilizar FUNCTION utilizamos un arrow => entonces
"this" va a valer lo que el scope de arriba le haya asignado a this,
por lo tanto, utilizamos arrow function cuando deseamos que el scope 
del padre se herede al scope del hijo*/

function Tutor(){
    this.nombre = "Jorvict";
    
    setTimeout(() => {
        this.nombre = "Enrique";
    }, 500);
}

var tutor2 = new Tutor();

setTimeout(function(){console.log(tutor2.nombre);}, 1000);