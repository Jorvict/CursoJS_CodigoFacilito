// Declarar prototipos (¿objetos?) utilizando funciones
/* Esta funcion tambien funge la parte de ser un constructor */
function Tutor(nombre, apellido) {
    this.nombre =   nombre;
    this.saludar =  function funcion_saludar() {
        console.log("Hola a todos soy " + this.nombre);
    }

    if(typeof apellido !== "undefined"){
        this.nombre_completo = nombre + " " + apellido;
    }

}
var jorvict = new Tutor("Jorvict", "Piña"); // Con esto creamos un nuevo objeto
jorvict.saludar();
console.log(jorvict.nombre_completo);

/* La ventaja de utilizar esto sobre JSON es que podemos crear varios
objetos utilizando la misma declaración, es decir lo que creamos es
una nueva variable */
var enrique = new Tutor("Enrique");
enrique.saludar();
console.log(enrique.nombre_completo);

/* El keyword "new" permite pasar un prototipo y a partir de ese prototipo
va a construir un nuevo objeto, en este caso el prototipo es Tutor */