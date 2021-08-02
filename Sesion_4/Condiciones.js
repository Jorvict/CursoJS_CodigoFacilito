if(!true){
    console.log("La condifición fue verdadera");
}
// Bool -> true / false

/* Operadores lógicos*/
// > Mayor que
// < Menor que
// || OR
// && AND
// == === Igual a
// != !== Diferente de
// ! Operador No


var numero_uno = 23;
var numero_dos = 30;

if(numero_dos > numero_uno){
    console.log("Entre al bloque");
}

if(numero_uno < numero_dos ){
    console.log("Entre al bloque 2");
}

if(!(numero_dos < numero_uno)){
    console.log("Entre al bloque 3");
}

/* Si en la condicional solamente colocamos el nombre de una variable,
la condicional se ejecutará sí esa misma variable ha 
sido definida previamente (Es decir, que haya sido declarada y se le
haya asignado un valor)*/
var numero_tres;
numero_tres = 3;
if(numero_tres){
    console.log("La variable ha sido definida correctamente");
}

// ---------------------------------------------------------------------
/*Operador AND &&, consiste en que se pasan varias condiciones, y 
si se cumplen TODAS, la estructura condicional se cumpliera,pero
sí algunas de las condiciones son falsas, el bloque condicional
no se ejecutará */
if(numero_uno && true){
    console.log("Entre al condicional uno && true");
}

/* Operador OR ||, consiste en que se pasan varias condiciones,
pero basta con que se cumpla alguna de ellas para que se ejecute
el bloque condicional */
if(numero_tres || false){
    console.log("Entre al condicional tres || false");
}

var numero_cuatro;
if(numero_cuatro || true){
    console.log("Entre al condicional cuatro || true");
}

if(false || false){
    console.log("Entre al condicional false || false"); // No ejecutará
}

var numero_cinco = 5;
var numero_seis = "5";

// ---------------------------------------------------------------------
/* El operador == antes de comparar los valores convierte ambos valores 
en un mismo tipo de dato, por ejemplo numero_seis que es una cadena 
debido a que es valor numerico se transformara su tipo de dato a numerico 
y luego de ello recien se realizará la comparación, por lo cual 
devuelve TRUE a pesar de que uno es cadena y otro es numerico */
if (numero_cinco == numero_seis){
    console.log("Entre al bloque cinco == seis"); // Recordar que seis es string
}

/* El operador === se diferencia del == en que no convierte los datos
a comparar es decir, así como ha sido definido, así se compara*/
if (numero_cinco === numero_seis){
    console.log("Entre al bloque cinco === seis"); // 5 cadena !== 5 numerico
}
/* NOTA: Se recomienda siempre utilizar el === a menos que explicitamente
deseemos que se realice una conversión de los datos antes de realizar
la comparación. El === es mas eficiente y mas rapido que el ==
ya que el == debe convertir los datos antes de compararlos, a diferencia
de === que los compara directamente */

// ---------------------------------------------------------------------
/* El operador != y !== es "Diferente de" y es el inverso 
de == y === respectivamente */

/* El siguiente ejemplo retorna falso debido a que se esta realizando
la conversión del numero_seis de cadena a numerico por lo cual al
compararlos el resultado es true */
if (numero_cinco != numero_seis){
    console.log("Devuelve falso"); // Como no son diferentes, retorna false
}

/* En este ejemplo al colocar el !== evita que se haga la conversión
de datos antes de realizar la comparación, por lo cual ahora si retorna
TRUE, ya que cinco numerico y seis cadena son distintos */
if (numero_cinco !== numero_seis){
    console.log("Devuelve verdadero en cinco !=== seis");
}


if (false){
    // Si esta condicion fuera falsa, se ejecuta siguiente condicion
    // En decir el Else if
}
else if(false){
    // Si esta condicion tambien es falsa, se ejecuta la siguiente
    // Y asi sucesivament ehasta dar con un else
}
else{
    console.log("Se ejecutó el else");
    // Sí todas las condiciones previas no se cumplieron, se ejecutara
    // El bloque condicionall del else
}
/* NOTA: Se pueden colocar tantos else if como queramos pero no es
recomendable usar este tipo de condicionales cuando se presentan
una gran cantidad de condiciones ya que afecctan al rendimiento.
Sí lo deseamos, no es necesario colocar el else, pero lo que si no se
puede realizar es colocar un else if o un else sin haber colocado primero
un if */