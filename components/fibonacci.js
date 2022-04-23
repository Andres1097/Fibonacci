export const listaNumeros = () => {

    var listaFibonacci = [{         // Es indiferente en que cuadrante empiece, pero elegi empezar del 2do porque
        "radio": 0,                 // es el mas conocido
        "cuadrante": 2,
        "x": 250,
        "y": 250
    },{
        "radio": 10,
        "cuadrante": 3,
        "x": 250,
        "y": 250
    }];

    var contador = listaFibonacci.length;
    
    //Limite el contador para que el programa no se rompa armando bucles infinitos y sea lo mas visible posible
    while(contador<15){             
        var nuevo = {                       // Creo un objeto nuevo
            "radio": defFormula(listaFibonacci, contador),
            "cuadrante": defCuadrante(listaFibonacci, contador),
            "x": defX(listaFibonacci, contador),
            "y": defY(listaFibonacci, contador)
        }
        listaFibonacci.push(nuevo);         // Agrego a la lista principal el objeto
        contador++;
    }
    return listaFibonacci;
}

const defFormula = (lista, indice) => {
    var resultadoFormula = 0;
    resultadoFormula = lista[indice-1].radio + lista[indice-2].radio;       // Formula:
    return resultadoFormula;                                                // m[n] = m[n-1] + m[n-2]
}

const defCuadrante = (lista, indice) => {       // Rotacion al cuadrante siguiente
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
    const auxCuadrante = defCuadrante(lista, indice);     // Cuadrantes 1 y 3 modifican X
    const radioX = lista[indice-2].radio;        // Es necesario el radio del cuadrante opuesto mas reciente
    var resultadoX = lista[indice-1].x;          // Y el centro X del arco anterior

    switch(auxCuadrante){                        // Depende del cuadrante sera la ecuacion
        case 1: resultadoX -= radioX; break;
        case 3: resultadoX += radioX; break;
        default: break;
    }
    return resultadoX;
}

const defY = (lista, indice) => {
    const auxCuadrante = defCuadrante(lista, indice);     // Cuadrantes 2 y 4 modifican Y
    const radioY = lista[indice-2].radio;       // Es necesario el radio del cuadrante opuesto mas reciente
    var resultadoY = lista[indice-1].y;         // Y el centro Y del arco anterior

    switch(auxCuadrante){
        case 2: resultadoY += radioY; break;
        case 4: resultadoY -= radioY; break;
        default: break;
    }
    return resultadoY;
}