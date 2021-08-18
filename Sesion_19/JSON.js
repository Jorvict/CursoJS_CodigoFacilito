/* JSON son las siglas de Javascript Object Notation*/
/* Funciona de manera similar a una clase, era utilizado con un fin similar
antes de ES6, es muy parecido a lo que en otros lenguajes se conoce como
Diccionarios o Hashes pero también se puede comportar como un objeto*/

var curso = {
    // Conjunto clave : valor
    // La clave puede estar en string o no, ejemplo, titulo esta en string
    // Cada clave : valor se separa con comas "," el ultimo de ellos no lleva

    "titulo" :      "Curso javascript",
    videos:         19,
    tutor:          "Jorvict",

    // Tambien podemos pasar funciones como valor a una clave
    introduccion:   function name() {
        console.log("Bienvenido al cuso: " + this.titulo +
        " que tiene " + this.videos + " videos" +
        ", dictado por el tutor " + this.tutor);
        this.otra_funcion();
    },

    /* La palabra reservada THIS en el caso de un JSON permite acceder
    a los dem+as atributos del mismo JSON, por ejemplo puede acceder
    a la funcion name2 a través de la clave otra_funcion*/

    otra_funcion:   function name2() {
        console.log("Imprime funcion 2");
    }

}

console.log(curso["titulo"]);

// Similar a como se accede a las propiedades de un objeto en otros lenguajes
console.log(curso.tutor); 
console.log(curso.introduccion()); 