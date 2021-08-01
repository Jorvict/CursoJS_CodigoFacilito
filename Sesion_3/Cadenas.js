var nombre = "Jorvict";

var cadena = "Hola mundo";
var cadena2 = "Hola"

var concatenacion = cadena + " soy " + nombre;

var resultado = concatenacion.indexOf("Jorvict"); // La posición inicial es 0, el índice será la posición donde se incluye el caracter - 1
console.log(concatenacion); // Imprime el índice donde se ubica el texto buscado


console.log(cadena);
console.log(cadena2);
// console.log(cadena.length); Imprime la cantidad de caracteres de un arreglo
console.log(resultado)

if(nombre.indexOf("Carlos") != -1){
    console.log("Hola jolbi");
}else{
    console.log("No eres jolbi 🥺")
}

console.log(nombre[nombre.length - 1]); // Permite imprimir el ultimo caracter de un arreglo
console.log(nombre.charAt(1)); // Obtener el caracter según la posición indicada

nombre = nombre.replace("v", "b"); //Reemplaza el caracter del primer parametro con el caracter del segundo parametro
console.log(nombre)

console.log(concatenacion.slice(4,11)); // Extrae los caracteres desde la primera posición expecificada hasta el caracter de la segunda posición expecificada (no incluído)

console.log(nombre.toUpperCase()); //Convertir cadenas en mayusculas
console.log(nombre.toLowerCase()); //Convertir cadenas en minusculas