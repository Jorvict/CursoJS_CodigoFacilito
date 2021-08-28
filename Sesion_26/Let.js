/* Es un pariente cercano de VAR, hacen cosas muy similares, que es
declarar variables, sin embargo tienen una diferencia la cual es el SCOPE,
Let es Block Scoping y Var es function Scoping, esto quiere decir que
Let es una variable que se declara unicamente para el alcance de un
bloque y Var se declara para el alcance de una función*/


// En el scope global, let y var hacen lo mismo
// Puedes acceder a ella en cualquier función, si esta en el scope globlal
let nombre = "Jorvict";
console.log(nombre);


// Let y Var también realizan lo mismo cuando están dentro de una function
function init() {
    let nombre2 = "Enrique";
    console.log(nombre2);
}
init();


// La diferencia empieza en lo siguiente
function init2() {
    if(true){
        let nombre3 = "Enrique";
        console.log(nombre3);
    }

    // console.log(nombre3);

    /* Al utilizar LET aquí mostrará un mensaje de error mencionando que 
    nombre3 no está definida, esto es debido a que se ha definido la 
    variable dentro del bloque condicional IF y estamos tratando de
    acceder a ella desde fuera del condicional*/
    /* En caso de utilizar VAR, si podremos acceder al nombre, esto debido
    a que VAR no toma en cuenta sí está dentro de un bloque o no, solo
    toma en cuenta sí está dentro de una función o no, sí está dentro de
    una función, las variables declaradas con VAR las puedes utilizar
    dentro de cualquier lugar de la función en la cual se declaro la
    variable (en éste caso la funcion es init) */
    /* Por otro lado LET no es function scoping sino block scoping, es
    decir a LET si le importa estar dentro de un bloque como lo puede
    ser un IF, un FOR o un WHILE, en éste caso el LET declarado está
    dentro de un bloque IF, por lo cual solo podremos utilizarlo en ese
    mismo bloque IF */
}
init2();

function init3() {
    var name ="Javier";
    if(true){
        let name = "Enriq";
        console.log(name); // Imprime primero Enriq
    }
    console.log(name); 
    /* Pero luego imprime Javier debido al scoping, es como si la variable
    nunca se le hubiera aplicado el cambio de valor */
}
init3();