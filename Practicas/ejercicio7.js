var NumeroFactorial = prompt("Ingrese el número del cual desea el factorial");
parseInt(NumeroFactorial);

var Total = 1;

for(i = 1; i <= NumeroFactorial; i++){
    Total *= i;
}
alert("El resultado es " + Total);