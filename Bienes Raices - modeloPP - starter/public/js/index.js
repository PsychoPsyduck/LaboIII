var frm;

window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];

    frm.addEventListener('submit', manejadorSubmit);
}

function manejadorSubmit(event) {
    event.preventDefault();

    let nuevoInmueble = obtenerInmueble(event.target);
    inmuebles.push(nuevoInmueble);

    document.getElementById("divTabla").innerHTML = "";
    document.getElementById("divTabla").appendChild(crearTabla(inmuebles));

    console.log(nuevoInmueble);
}

function obtenerInmueble() {
    let titulo;
    let transaccion;
    let descripcion; 
    let precio;
    let numBaño;
    let numEstacionamiento;
    let numDormitorio;
    let active;

    for(elemento of frm.elements) {
        switch (elemento.name) {
            case "titulo":
                titulo = elemento.value;
                break;
            case "transaccion":
                transaccion = elemento.value;
                break;
            case "descripcion":
                descripcion = elemento.value;
                break;
            case "precio":
                precio = parseInt(elemento.value);
                break;
            case "numBaño":
                numBaño = parseInt(elemento.value);
                break;
            case "numEstacionamiento":
                numEstacionamiento = parseInt(elemento.value);
                break;
            case "numDormitorio":
                numDormitorio = parseInt(elemento.value);
                break;
            case "active":
                active = elemento.value;
                break;

        }
    }
    return new Inmueble(titulo, transaccion, descripcion, precio, numBaño, numEstacionamiento, numDormitorio, active);
}