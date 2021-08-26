'use strict';

class Human {
    constructor(etnia){
        this.etnia = etnia;
    }
}

/* Utilizando extends podemos crear una clase que herede de la otra */

class Tutor extends Human{
    constructor(nombre, apellido, etnia){
        super(etnia);
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Método
    full_name(){
        return this.nombre + " " + this.apellido + " .Etnia: " + this.etnia;
    }
}
var tutor = new Tutor("Jorvict", "Piña", "Latino");

console.log(tutor.full_name());