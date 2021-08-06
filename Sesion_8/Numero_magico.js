// Número maximo
var max = 80;

// Número mínimo
var min = 75;

// Número aleatorio dentro de un rango
var numero_secreto = Math.random() * (max - min) + min;
// Recordar que math.random() genera número aleatorio en el rango de 0 a 1
/* Para que el número aleatorio esté ubicado entre el rango de max y min
se debe aplicar la formula previamente estipulada */

/* El valor retornado por el math.random() cuenta con números decimales
por lo cual lo transformaremos en un entero para eliminar esos decimales*/
numero_secreto = parseInt(numero_secreto);
/* Nota: El parseInt permite transformar el dato en un entero, esto se
puede aplicar a cadenas, siempre y cuando la cadena sea una
cadena con un valor númerico */

console.log(numero_secreto);

var mensaje = "Ingresa un número para adivinar el número mágico";

while(true){

    /*Prompt sirve para imprimir un mensaje y puede recibir un dato
    ingresado por el usuario. En el primer parametro ingresamos el mensaje
    que debe imprimir, en el segundo parametro ingresamos el valor por default.
    Es decir, en este caso, si el usuario no ingresa ningun número,
    se considerará que quiso registrar 0 por lo cual finalizará la ejecución
    del bucle*/
    var numero_del_usuario = prompt(mensaje, "Mensaje por default/defecto");

    numero_del_usuario = parseInt(numero_del_usuario);

    if(numero_del_usuario === numero_secreto){
        alert("Ganaste! 🥳");
        break
    }
    else if( numero_del_usuario === 0){
        break
    }
    else if(numero_del_usuario > numero_secreto){
        mensaje = "Ups!, el número que ingresaste es mayor al número secreto";
    }
    else if(numero_del_usuario < numero_secreto){
        mensaje = "Yikes!, el número ingresado es menor al número secreto";
    }
}