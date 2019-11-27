

$(function () {
    selTransaccion = document.getElementById("selTransaccion");
    cargarSelect(selTransaccion, obtenerTransaccion(arrayBienesRaices));
    console.log(obtenerTransaccion(arrayBienesRaices));
    selTransaccion.addEventListener('change', filtrarDatos);
});

function obtenerTransaccion(arr) {
    return arr.map(obj => obj.transaccion)
        .unique()
        .sort();
}

function cargarSelect(sel, arr) {
    limpiarSelect(sel);
    let option = document.createElement('option');
    option.value = "Todos";
    option.textContent = "Todos";
    sel.appendChild(option);
    // let option2 = document.createElement('option');
    // option2.value = "Alquiler";
    // option2.textContent = "Alquiler";
    // sel.appendChild(option2);
    // let option3 = document.createElement('option');
    // option3.value = "Venta";
    // option3.textContent = "Venta";
    // sel.appendChild(option3);
    arr.forEach(element => {
        let option = document.createElement('option');
        option.value = element;
        option.textContent = element;
        sel.appendChild(option);
    });
}

function limpiarSelect(sel) {
    //sel.options.length = 0;
    while (sel.hasChildNodes()) {
        sel.removeChild(sel.firstElementChild);
    }
}

Array.prototype.unique = function() {
    return [...new Set(this)];
}