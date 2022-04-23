export const dibujar = (arco) => {

    var canvas = document.querySelector("canvas");
    var pincel = canvas.getContext("2d");

    const inicioAngulo = buscarInicioAngulo(arco.cuadrante);
    const finAngulo = buscarFinAngulo(arco.cuadrante);
    const descenso = 0.01;

    var auxInicio = inicioAngulo;               // auxiliar para ir modificando y no tener que cambiar el minimo establecido
    var auxFin = auxInicio - descenso;          // ... el maximo establecido
     
    const intervalo = setInterval(() => {       // Animacion de trazado
    
    auxInicio -= descenso,                      // Al ser en sentido contrario del reloj, el angulo va descenciendo
    auxFin -= descenso,
        
    pincel.beginPath(),
    pincel.strokeStyle = "red",
    pincel.arc(arco.x, arco.y, arco.radio, auxInicio, auxFin, true),

    pincel.stroke();

    if(auxFin < finAngulo) clearInterval(intervalo);        // En caso de que alcance el maximo, se cancela

    });

}

const buscarInicioAngulo = (cuadrante) => {                 // Cuadrante inicial
    var resultado = 0;
    switch(cuadrante){
        case 1: resultado = 6.28; break;    // 360°
        case 2: resultado = 4.71; break;    // 270°
        case 3: resultado = 3.14; break;    // 180°
        case 4: resultado = 1.57; break;    // 90°
        default: break;
    }
    return resultado;
}

const buscarFinAngulo = (cuadrante) => {                    // Cuadrante Final
    var resultado = 0;
    switch(cuadrante){
        case 1: resultado = 4.71; break;    // 270°
        case 2: resultado = 3.14; break;    // 180°
        case 3: resultado = 1.57; break;    // 90°
        case 4: resultado = 0; break;       // 0°
        default: break;
    }
    return resultado;
}

export const rectanguloDorado = (lista) => {
    var canvas = document.querySelector("canvas");
    var pincel = canvas.getContext("2d");
    var rectangulo = crearArregloRectangulo(lista);
    const arregloTexto = crearArregloTexto(lista);

    pincel.beginPath(),
    pincel.strokeStyle = "lightcoral",

    pincel.moveTo(lista.x, lista.y);                // Inicia en el centro
    pincel.lineTo(rectangulo[0], lista.y);          // 1ra esquina
    pincel.lineTo(rectangulo[0], rectangulo[1]);    // 2da esquina
    pincel.lineTo(lista.x, rectangulo[1]);          // 3ra esquina
    pincel.lineTo(lista.x, lista.y);                // cierro

    pincel.fillText(lista.radio/10, arregloTexto[0], arregloTexto[1], lista.radio/5);

    pincel.stroke();

}

const crearArregloRectangulo = (lista) => {
    var arregloResultante = [];
    const x = lista.x;
    const y = lista.y;
    const radio = lista.radio;

    switch(lista.cuadrante){    // Depende el cuadrante es la direccion a donde se movera el pincel
        case 1: arregloResultante = [x + radio, y - radio]; break;   // → ↓ ← ↑
        case 2: arregloResultante = [x - radio, y - radio]; break;   // ← ↓ → ↑
        case 3: arregloResultante = [x - radio, y + radio]; break;   // ← ↑ → ↓
        case 4: arregloResultante = [x + radio, y + radio]; break;   // → ↑ ← ↓ 
    }                                                                // Fatality
    return arregloResultante;
}

const crearArregloTexto = (lista) => {
    var arregloResultante = [];
    const x = lista.x;
    const y = lista.y;
    const radio = lista.radio/2;

    switch(lista.cuadrante){    // Depende el cuadrante es la direccion a donde se movera el pincel
        case 1: arregloResultante = [x + radio, y - radio]; break;
        case 2: arregloResultante = [x - radio, y - radio]; break;
        case 3: arregloResultante = [x - radio, y + radio]; break;
        case 4: arregloResultante = [x + radio, y + radio]; break; 
    }                                                             
    return arregloResultante;
}