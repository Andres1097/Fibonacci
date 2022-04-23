export const listaNumeros = () => {

    var listaFibonacci = [{   
        "radio": 0,
        "cuadrante": 2,
        "x": 250,
        "y": 250
    },{
        "radio": 10,
        "cuadrante": 3,
        "x": 250,
        "y": 250
    },{
        "radio": 10,
        "cuadrante": 4,
        "x": 250,
        "y": 250
    }];

    var contador = listaFibonacci.length-1;
    
    while(contador<20){
        contador++;
        var nuevo = {
            "radio": defFormula(listaFibonacci, contador),
            "cuadrante": defCuadrante(listaFibonacci, contador),
            "x": defX(listaFibonacci, contador),
            "y": defY(listaFibonacci, contador)
        }
        listaFibonacci.push(nuevo);
    }
    return listaFibonacci;
}

const defFormula = (lista, indice) => {
    var resultadoFormula = 0;
    resultadoFormula = lista[indice-1].radio + lista[indice-2].radio;
    return resultadoFormula;
}

const defCuadrante = (lista, indice) => {
    var resultadoCuadrante = 0;
    switch(lista[indice-1].cuadrante){
        case 1: resultadoCuadrante = 2; break;
        case 2: resultadoCuadrante = 3; break;
        case 3: resultadoCuadrante = 4; break;
        case 4: resultadoCuadrante = 1; break;
        default: break;
    }
    return resultadoCuadrante;
}

const defX = (lista, indice) => {
    var auxCuadrante = defCuadrante(lista, indice);     // Cuadrantes 1 y 3 modifican X
    var resultadoX = lista[indice-1].x;
    var radioX = lista[indice-2].radio;

    switch(auxCuadrante){
        case 1: resultadoX -= radioX; break;
        case 3: resultadoX += radioX; break;
        default: break;
    }
    return resultadoX;
}

const defY = (lista, indice) => {
    var auxCuadrante = defCuadrante(lista, indice);     // Cuadrantes 2 y 4 modifican Y
    var resultadoY = lista[indice-1].y;
    var radioY = lista[indice-2].radio;

    switch(auxCuadrante){
        case 2: resultadoY += radioY; break;
        case 4: resultadoY -= radioY; break;
        default: break;
    }

    return resultadoY;
}