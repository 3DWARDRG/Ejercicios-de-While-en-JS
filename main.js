
// Ejercicio 1

/* Este código solicita al usuario que ingrese un número. Si el usuario ingresa un valor no numérico, seguirá solicitando al usuario que 
ingrese un número hasta que se ingrese un valor numérico. Una vez que se ingresa un valor numérico, el código calculará los múltiplos 
de 5 desde 1 hasta el número ingresado y los almacenará en una matriz llamada mulpOfTheFive. 
Finalmente, mostrará una alerta con la matriz de múltiplos de 5.*/

/*


let inputNumber=prompt("Introduce un numero");
let i=1;
let mulpOfTheFive=[];

while(isNaN(inputNumber)){
    inputNumber= prompt("Solo introduce numeros");
}

while(i<=inputNumber){
    let result= 5 * i;
    mulpOfTheFive.push(result);
    i++;
}

alert(mulpOfTheFive)

*/


/*




// Ejercicio 2

/* Solicita al usuario que ingrese dos números dentro del rango de 1 a 50. Luego, el código crea una matriz de números del 1 al 50
 y filtra la matriz para encontrar los dos números ingresados por el usuario. Finalmente, registra un mensaje en la consola con 
 los dos números encontrados. */

/*

let firstInputNumber=validationOfRange(prompt("Introduce un numero en el rango de 1 al 50."));


let secondInputNumber=validationOfRange(prompt("Introduce otro numero en el rango de 1 a 50"));

let i=1;

let range=[];

while(i<=50){
    range.push(i);
    i++;
}

console.log(range)

let findNum=range.filter(function(numero) {
    return num === firstInputNumber || num === secondInputNumber}); 

console.log("Loteria encontre tus numeros " + findNum + ".")




function validationOfRange(a){
    a=parseInt(a);
    while(isNaN(a) || a > 50 || a < 1){
      let result=prompt("Introduce un numero valido.");
      a=parseInt(result);
    }
    return a;
}

*/

// Ejercicio 3

/*  Solicita al usuario que ingrese un número y lo almacena en una matriz. Luego, el código continúa solicitando al usuario 
que ingrese más números hasta que el usuario ingresa 0. Una vez que el usuario ingresa 0, el código deja de solicitar más números 
y muestra una alerta con todos los números ingresados por el usuario. La función validarinputnumber se utiliza para validar que la 
entrada del usuario sea un número.*/

/*

let haveNumber= validarInputNumber(prompt("Dame un numero"));

let arrayNumbersInput=[];

while(haveNumber!==0){

    arrayNumbersInput.push(haveNumber);

    haveNumber = validarInputNumber(prompt("Dame otro numero o 0 para terminar"));
}

alert("Estos son tus numeros? " + arrayNumbersInput + ".")


function validarInputNumber(a){
    let convert= parseInt(a);
    while(isNaN(convert)){

        let haveNumber= prompt("Solo se permiten numeros, introduce uno.");

        convert=parseInt(haveNumber);
    }

    return (convert)

}

*/

// Ejercicio 4

/*  Solicita al usuario que ingrese una cadena de letras o palabras y la almacena en una matriz. Luego, el código continúa solicitando
 al usuario que ingrese más cadenas hasta que el usuario ingresa una cadena vacía. Una vez que el usuario ingresa una cadena vacía, 
 el código deja de solicitar más cadenas y muestra una alerta con todas las cadenas ingresadas por el usuario. La función contieneSoloLetras 
 se utiliza para validar que la entrada del usuario contenga solo letras*/

/*

let inputStrings= containsOnlyLetters(prompt("Introduce letras o palabras."));

let arrayStrings=[];

while(inputStrings!==""){

    arrayStrings.push(inputStrings);

    inputStrings= containsOnlyLetters(prompt("Introduce letras, palabras o termina el ciclo simplemente dejando de escribir."));

}

alert("Tu escribiste esto " + arrayStrings + ".")




    function containsOnlyLetters(a) {

        let ValidateString= /^([a-zA-Z]*)$/.test(a);

        let b=a;

        while(ValidateString!==true){

            let b= prompt("Introduce valores validos(Letras o palabras).");


            ValidateString=/^([a-zA-Z]*)$/.test(b);

        }

        return b;
     
      }

      */


    // Ejercicio 5

    /*   Solicita al usuario que ingrese un día de la semana y muestra una alerta con un mensaje relacionado con el día ingresado. 
    El código continúa solicitando al usuario que ingrese más días hasta que el usuario ingresa “domingo”. Una vez que el usuario 
    ingresa “domingo”, el código deja de solicitar más días y muestra una alerta que dice “Ve a descansar”. La función validationOfInformation
     se utiliza para validar que la entrada del usuario sea un día de la semana válido.*/

 /*

    let DayOfTheWeek=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

    let inputDayOfTheWeek= validateOfInformation(prompt("Dame un dia de la semana.").toLowerCase());

    while(inputDayOfTheWeek !== "domingo"){

       switch(inputDayOfTheWeek){
        case"lunes":
        alert(" Si puedes imaginarlo puedes lograrlo, si puedes soñarlo, puedes hacerlo realidad. (William Arthur Ward)");
        break;
        case "martes":
        alert("  Suerte es lo que sucede cuando la preparación y la oportunidad se encuentran y fusionan. (Voltaire)");
        break;
        case "miercoles":
        alert("No juzgues cada día por lo que cosechas, sino por las semillas que plantas. (Robert Louis Stevenson)");
        break;
        case "jueves":
        alert("La vida es 10 por ciento lo que me pasa y 90 por ciento cómo reacciono a ello. (Charles Swindoll)");
        break;
        case "viernes":
        alert("La vida empieza cada cinco minutos. (Andreu Buenafuente)");
        break;
        case "sabado":
        alert("Fueron semillas mis errores. (Alejandro Jodorowsky)");
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


    function validateOfInformation(a){

        while(!DayOfTheWeek.includes(a)){

            a= prompt("Dame un dia de la semana.").toLowerCase();

        }

        return a; 
        }

      */
    