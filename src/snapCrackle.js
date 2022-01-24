function snapCrackle(maxValue) {
    let resultado = "";
    for (let cont = 1; cont <= maxValue; cont++) {
        if ((cont % 2 != 0) && (cont % 5 === 0)) {
            resultado += "SnapCrakle, ";
            continue;
        }
        if (cont % 2 != 0) {
            resultado += "Snap, ";
            continue;
        }
        if (cont % 5 === 0) {
            resultado += "Crackle, ";
            continue;
        }
        resultado += cont + ", ";
    }
    console.log(resultado);
}
snapCrackle(12)
