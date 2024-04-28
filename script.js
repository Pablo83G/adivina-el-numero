// El juego selecciona un numero al azar
let numeroAzar = Math.floor(Math.random()*100)+ 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

// Esta accion se va a ejecutar cuando tecleamos el boton
function comprobarResultados(){
    intentos ++
    intento.textContent = intentos
    // Utilizamos el parseInt por que los input siempre devuelven 
    //un string value= es el valor que devuelve el input
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
       //textContent es un atributo de parrafo <p></p>
        mensaje.textContent = 'Por favor, ingtroduce un número valido entre 1 y 100 '
        mensaje.style.color = 'red'
        return
    }

    if(numeroIngresado == numeroAzar){
        mensaje.textContent = 'Felicidades, has ACERTADO!!';
     //.style nos permite entrar en css para poner estilos  
        mensaje.style.color = 'green';
     //numeroEntrada.disabled = true, ya no queremos que se vuelva a introducir numeros   
        numeroEntrada.disabled = true
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas ALTO! El numero es mayor al que has introducido';
        mensaje.style.color = 'black';
    }else{
        mensaje.textContent = 'Mas BAJO! El numero es menor al que has introducido';
        mensaje.style.color = 'black';
    }
}