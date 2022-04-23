import { dibujar, rectanguloDorado } from './components/canvas.js';
import { listaNumeros } from './components/fibonacci.js';

const arcoFib = listaNumeros();
const display = document.querySelector(".header--display");
const btnIniciar = document.querySelector(".main--inicio");
    
const iniciar = () => {
    btnIniciar.style.display = "none"; 
    
    const fin = arcoFib.length;
    var i = 0;
    const intervaloDibujo = setInterval(() => {     

        // el dibujo inicia con 10px de radio, porque con 1px la diferencia no seria notoria
        display.value += "\nN° " + (i+1) + ": " + (arcoFib[i].radio/10);  
          
        dibujar(arcoFib[i]),
        rectanguloDorado(arcoFib[i]),       // Este es el resultante que crea el arco de esquina a esquina
        i++

        if(i === fin) clearInterval(intervaloDibujo);       
    }, 900);
}

btnIniciar.onclick= iniciar;