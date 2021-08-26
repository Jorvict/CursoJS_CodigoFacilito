/* Son funciones a través de las cuales podemos leer o modificar un
atributo del objeto de manera segura */

var curso = {

    titulo :        "Curso javascript",
    videos:         19,
    tutor_value:          "Jorvict",
    get tutor() {
        return this.tutor_value.toUpperCase();
    },
    set tutor(tutor) {
        if(tutor === "" || typeof tutor === "undefined"){
            /* En caso se cumpla la condición, el setTutor retornará el
            valor previo de tutor, es de "Jorvict" */

            return;
        }
        this.tutor_value = tutor;
    }

};

// console.log(curso.getTutor());

curso.tutor ="Javier";
console.log(curso.tutor);