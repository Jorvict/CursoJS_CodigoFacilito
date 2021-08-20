
function Tutor(nombre, apellido) {
    this.nombre =   nombre;
    this.saludar =  function funcion_saludar() {
        console.log("Hola a todos soy " + this.nombre);
    }

    if(typeof apellido !== "undefined"){
        this.nombre_completo = nombre + " " + apellido;
    }

}
var jorvict = new Tutor("Jorvict", "Piña");
var enrique = new Tutor("Enrique", "Piña");

console.log(jorvict.prototype); 
/* Muestra undefined debido a que el atributo prototype de un objeto
es inlegible (no lo puedes imprimir normalmente), pero en google chrome
hay un objeto llamado __proto__ que nos devuelve el prototipo a partir
del cual fue creado */

console.log(jorvict.__proto__); // (En la consola se podra visualizar el constructor)
/* Prototype de "jorvict" es "Tutor", y tutor es la función con la cual
creamos el objeto */


console.log(jorvict.__proto__.__proto__); // Hace referencia al prototipo de Tutor
/* En este caso el prototipo de "Tutor" es "Object", algo a tener en
consideración es que todos los objetos en JS, los arrays, las fechas, 
tienen como prototipo padre "Object" */


/* Después de que ya sido definido el objeto, aún podemos declarar 
atributos y métodos para el objeto praviamente definido */

// jorvict.edad = 22; Se comento linea para que se reemplazara valor en linea 57

console.log(jorvict.edad);
console.log(enrique.edad); // Devolvera undefined ya que edad solo lo tiene definido "Jorvict"

// Tambien se le puede agregar métodos
jorvict.iniciar_tutorial = function () {
    console.log("Bienvenidos al tutorial");
}
jorvict.iniciar_tutorial();
//enrique.iniciar_tutorial(); // Devuelve error ya que esta función no existe para enrique


/* Lo que se puede validar es que otros objetos creados a partir del
mismo prototipo (en éste caso Tutor) no acceden a los métodos o atributos
que se han creado para el objeto especifico (jorvict), es decir, el
método iniciar_tutorial y el atributo edad solo se agregaron al objeto
"jorvict" y no a "enrique", para agregar un nuevo método o atributo
a un prototipo de un objeto que ya ha sido definido se debe realizar
lo siguiente */

Tutor.prototype.edad = 24;
/* Este nuevo atributo que acabamos de crear se lo va a agregar a
todos los objetos creados a partir del mismo prototipo, no importa si
los objetos ya han sido previamente definidos, le podemos agregar ese
nuevo atributo, aplica lo mismo para los métodos */

Tutor.prototype.despedida = function () {
    console.log("Hasta pronto! :)")
}

console.log(jorvict.edad);
console.log(enrique.edad);

jorvict.despedida();
enrique.despedida();