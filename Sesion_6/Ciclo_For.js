/* El bloque de codigo dentro del for se ejecutará siempre que se cumplan
las condiciones establecidad. El ciclo for recibe 3 parametros
- Inicialización
- Condición
- Incremento

El ciclo For se utiliza mucho para iterar un array
*/
// for(Inicialización; Condición; Incremento){

// }

for(var i = 0; i < 10; i++){
    console.log(i);
}

var arreglo = ["hola", "mundo"];
for(var i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

for(var i = 0; i < arreglo.length; i++){
    if(i >= 1){break;}
    console.log(arreglo[i]);
}

for(var i = 0; i < 10; i++){
    if(i%2 !== 0){continue;}
    console.log(i);
}