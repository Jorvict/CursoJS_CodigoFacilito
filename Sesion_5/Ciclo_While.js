/* Crea un bucle el cual se ejecutará sí la condición se cumple, y se
se repetirá N veces hasta que la condición deje de cumplirse*/

var contador = 0;
while(contador < 10){
    contador++;
    if(contador % 2 == 0){
        // console.log(contador);
    }
}

// Continue
/* Termina la ejecución de las sentencias de la iteración actual
del bucle actual y continua la ejecucion del bucle con la proxima
iteración, es decir "finaliza esa ronda del bucle e inicia con la 
siguiente ronda del bucle ignorando por completo el código que viene
despues del continue durante esa ronda" */
var contador = 0;
while(contador < 10){
    contador++;
    if(contador % 2 !== 0){
        continue;
    }
    console.log(contador);
}

// Break
/* Sirve para romper el bucle y salir del ciclo while, es decir
al estar ejecutando un código en bucle se puede finalizar automaticamente
sí le especificamos un break */
var contador = 0;
while(true){
    contador++;
    console.log(contador);

    if(contador >= 10){
        break
    }
}
/* Este ciclo while al recibir un valor true por defecto, sería un bucle 
infinito ya que la condición al ser siempre verdadera no habría forma 
de salir del bucle, sin embargo, como hay un "break" que se ejecutará 
solamente cuando se cumpla la condición estipulada, esto hará que 
el bucle se rompa y se pueda salir del ciclo While satisfactoriamente*/

// Do While
/* Es un ciclo repetitivo parecido al While, la diferencia está en su
sintaxis, en la cual en primer bloque (En el Do) colocaremos las 
instrucciones a ejecutar, y en el segundo bloque (En el While)
colocaremos la condición que debe cumplirse para que se siga
ejecutando el bucle. 
Sin embargo existe otra diferencia la cual es bastante relevante, 
una diferencia mas entre el While y Do While es que en el Do While 
SIEMPRE ejecutará el ciclo al menos una vez aunque la condicional 
del segundo bloque While sea falsa. Existen casos es lo que necesitamos
que al menos una vez se ejecute el ciclo, para esos casos especificos
usaremos el Do While */
do{
    contador++;
    console.log(contador);

    if(contador >= 10){
        break
    }
}while(true)