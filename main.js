/*
let inputnumber=prompt("Introduce un numero");
let i=1;
let mulpofthefive=[];

while(isNaN(inputnumber)){
    inputnumber= prompt("Solo introduce numeros");
}

while(i<=inputnumber){
    let result= 5 * i;
    mulpofthefive.push(result);
    i++;
}

alert(mulpofthefive)

*/

/*

let firstinputnumber=validationOfRange(prompt("Introduce un numero en el rango de 1 al 50."));


let secondinputnumber=validationOfRange(prompt("Introduce otro numero en el rango de 1 a 50"));

let i=1;

let range=[];

while(i<=50){
    range.push(i);
    i++;
}

console.log(range)

let encontrenum=range.filter(function(numero) {
    return numero === firstinputnumber || numero === secondinputnumber}); 

console.log("Loteria encontre tus numeros " + encontrenum + ".")




function validationOfRange(a){
    a=parseInt(a);
    while(isNaN(a) || a > 50 || a < 1){
      let result=prompt("Introduce un numero valido.");
      a=parseInt(result);
    }
    return a;
}

*/


