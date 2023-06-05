
// Ejercicio 1

/* Este código solicita al usuario que ingrese un número. Si el usuario ingresa un valor no numérico, seguirá solicitando al usuario que 
ingrese un número hasta que se ingrese un valor numérico. Una vez que se ingresa un valor numérico, el código calculará los múltiplos 
de 5 desde 1 hasta el número ingresado y los almacenará en una matriz llamada mulpofthefive. 
Finalmente, mostrará una alerta con la matriz de múltiplos de 5.*/

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


/*

// Ejercicio 2

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

/*

let haveNumber= validarinputnumber(prompt("Dame un numero"));

let arrayNumbersInput=[];

while(haveNumber!==0){

    arrayNumbersInput.push(haveNumber);

    haveNumber = validarinputnumber(prompt("Dame otro numero o 0 para terminar"));
}

alert("Estos son tus numeros? " + arrayNumbersInput + ".")










function validarinputnumber(a){
    let convertir= parseInt(a);
    while(isNaN(convertir)){

        let haveNumber= prompt("Solo se permiten numeros, introduce uno.");

        convertir=parseInt(haveNumber);
    }

    return (convertir)

}

*/

/*

let inputStrings= contieneSoloLetras(prompt("Introduce letras o palabras."));

let arrayStrings=[];

while(inputStrings!==""){

    arrayStrings.push(inputStrings);

    inputStrings= contieneSoloLetras(prompt("Introduce letras, palabras o termina el ciclo simplemente dejando de escribir."));

}

alert("Tu escribiste esto " + arrayStrings + ".")




    function contieneSoloLetras(a) {

        let ValidarString= /^([a-zA-Z]*)$/.test(a);

        let b=a;

        while(ValidarString!==true){

            let b= prompt("Introduce valores validos(Letras o palabras).");


            ValidarString=/^([a-zA-Z]*)$/.test(b);

        }

        return b;
     
      }

      */


    // Ejercicio 5

    let DayOfTheWeek=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

    let inputDayOfTheWeek= validationOfInformation(prompt("Dame un dia de la semana.").toLowerCase());

    while(inputDayOfTheWeek !== "domingo"){

       switch(inputDayOfTheWeek){
        case"lunes":
        alert("Si no te gustan los lunes, no crees en las segundas oportunidades para ti.");
        break;
        case "martes":
        alert(" “El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito.” - Albert Schweitzer. ");
        break;
       }      

       inputDayOfTheWeek= prompt("Dame un dia de la semana.(ej: lunes, jueves, domingo, etc).").toLowerCase();

    }


    if(inputDayOfTheWeek==="domingo"){
        alert("Ve a descansar.")
    }

    else{
        alert("Introduce valores validos, vuelve a intentarlo");
    }






    function validationOfInformation(a){

        while(!DayOfTheWeek.includes(a)){

            a= prompt("Dame un dia de la semana.").toLowerCase();

        }

        return a; 
        }

      
    