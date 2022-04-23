export const dibujar = (arco) => {

    var canvas = document.querySelector("canvas");
    var pincel = canvas.getContext("2d");

    const inicioAngulo = buscarInicioAngulo(arco.cuadrante);
    const finAngulo = buscarFinAngulo(arco.cuadrante);
    const descenso = 0.01;

    var auxInicio = inicioAngulo;
    var auxFin = auxInicio - descenso;
     
    const intervalo = setInterval(() => {
    
    auxInicio -= descenso,
    auxFin -= descenso,
        
    pincel.beginPath(),
    pincel.strokeStyle = "red",
    pincel.arc(arco.x, arco.y, arco.radio, auxInicio, auxFin, true),

    pincel.stroke();

    if(auxFin < finAngulo) clearInterval(intervalo);

    });

}

const buscarInicioAngulo = (cuadrante) => {
    var resultado = 0;
    switch(cuadrante){
        case 1: resultado = 6.28; break;
        case 2: resultado = 4.71; break;
        case 3: resultado = 3.14; break;
        case 4: resultado = 1.57; break;
        default: break;
    }
    return resultado;
}

const buscarFinAngulo = (cuadrante) => {
    var resultado = 0;
    switch(cuadrante){
        case 1: resultado = 4.71; break;
        case 2: resultado = 3.14; break;
        case 3: resultado = 1.57; break;
        case 4: resultado = 0; break;
        default: break;
    }
    return resultado;
}