/* El addEventListener recibe 3 parametros, 
-El primero sería el evento que va a escuchar (en este caso sería el click), 
-El segundo sería la función que va a ejecutar,
-El tercero es un parametro que define el orden en el cual se van
    a ejecutar los elementos que tienen un listener para el mismo evento
    y uno está dentro del otro, define quien se ejecutará primero, 
    es decir el orden, este puede ser en fase de BUBBLING (se ejecuta primero
    el que está mas adentro y va ejecutando hacia afuera) o puede ser
    en fase de CAPTURA (el elemento que está más afuera se ejecutará
    primero y se irán ejecutando en orden los de adentro)
    NOTA: Este tercer elemento no es necesario de colocar, ya que sí
        no se coloca, JS lo interpreta automaticamente como false,
        sí ambos están como false, se ejecutará como BUBBLING */


// BUBBLING (De adentro hacia fuera)
document.getElementById("mi_div").addEventListener("click", another_clic,false);
function another_clic(){
    alert("Esto fue disparado por el DIV")
}

var mi_btn = document.getElementById("mi_btn");
mi_btn.addEventListener("click", clic, true)

function clic(){
    alert("Esto fue disparado por el botón");
}


// CAPTURE (De afuera hacia adentro)
// document.getElementById("mi_div").addEventListener("click", another_clic,true);
// function another_clic(){
//     alert("Esto fue disparado por el DIV")
// }

// var mi_btn = document.getElementById("mi_btn");
// mi_btn.addEventListener("click", clic, false)

// function clic(){
//     alert("Esto fue disparado por el botón");
// }