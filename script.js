import { dibujar } from './components/canvas.js';
import { listaNumeros } from './components/fibonacci.js';

const arcoFib = listaNumeros();
const btnIniciar = document.querySelector(".inicio");
const canvas = document.querySelector(".canvas");
const display = document.querySelector(".display");
    
const iniciar = () => {
    btnIniciar.style.display = "none";
    canvas.classList.add("active");
    
    const fin = arcoFib.length;
    var i = 0;
    const intervaloDibujo = setInterval(() => {
        display.value += "\nN°: " + (arcoFib[i].radio/10);
        dibujar(arcoFib[i]),
        i++
        if(i === fin) clearInterval(intervaloDibujo);
    }, 750);
}

btnIniciar.onclick= iniciar;