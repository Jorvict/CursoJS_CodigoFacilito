function numero_par(inputnumero){
    if(inputnumero % 2 === 0){
        return "Es par";
    }
    else{
        return "Es impar";
    }
}

console.log(numero_par(7));