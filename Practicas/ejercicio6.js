var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 
            'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 
            'C', 'K', 'E', 'T'];

var DNI_Letra = prompt("Ingrese la letra de su DNI").toUpperCase();
var DNI_Numero = prompt("Ingrese su número de DNI");
var DNI_modulo = 0;
var DNI_LetraCalculada = "";

parseInt(DNI_Numero);

if(DNI_Numero < 0 || DNI_Numero > 99999999){
    alert("El número de DNI proporcionado no es válido");
}
else{

    // DNI_modulo = DNI_Numero % 23;

    // for(var i = 0; i <= DNI_modulo; i++){
    //     if(i === DNI_modulo){
    //         DNI_LetraCalculada = letras[i];
    //     }
    // }

    DNI_LetraCalculada = letras[DNI_Numero % 23];
    if(DNI_Letra === DNI_LetraCalculada){
        alert("Los datos son correctos")
    }
    else{
        alert("La letra del DNI registrada y la ingresada no coinciden");
    }
}

// if(DNI_Letra === DNI_LetraCalculada){
//     alert("Los datos son correctos")
// }
// else{
//     alert("La letra del DNI registrada y la ingresada no coinciden");
// }

console.log(DNI_Letra);
console.log(DNI_Numero);
console.log(DNI_LetraCalculada);

