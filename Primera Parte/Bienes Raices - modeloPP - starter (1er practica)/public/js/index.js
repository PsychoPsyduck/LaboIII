var frm;
var ids = 1
var botonAlta;
var botonEliminar;
var botonModificar;
var botonCancelar;
var divTabla;

window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
    divTabla = document.getElementById("divTabla");
    botonAlta = document.getElementById('btnAlta');
    botonEliminar = document.getElementById('btnBaja');
    botonModificar = document.getElementById('btnModificacion');
    botonCancelar = document.getElementById('btnCancelar');

    ArmarTabla();

    frm.addEventListener('submit', function (e) {
        e.preventDefault();
    })
    botonAlta.addEventListener('click', function (e) {
        let nuevoAnuncio = obtenerAnuncio(frm);
        AltaAnuncio(nuevoAnuncio);
    })
    botonCancelar.addEventListener('click', function (e) {
        CancelarAnuncio(frm);
        botonModificar.className = 'boton boton-verde oculto';
        botonCancelar.className = 'boton boton-amarillo oculto';
        botonEliminar.className = 'boton boton-rojo oculto';
    })
    botonEliminar.addEventListener('click', function () {
        let nuevoAnuncio = obtenerAnuncio(frm);
        BajaAnuncio(nuevoAnuncio);
        botonModificar.className = 'boton boton-verde oculto';
        botonCancelar.className = 'boton boton-amarillo oculto';
        botonEliminar.className = 'boton boton-rojo oculto';
        CancelarAnuncio(frm);
    })
    botonModificar.addEventListener('click',function(){
        let nuevoAnuncio= obtenerAnuncio(frm);
        ModificarAnuncio(nuevoAnuncio);
        botonModificar.className = 'boton boton-verde oculto';
        botonCancelar.className = 'boton boton-amarillo oculto';
        botonEliminar.className = 'boton boton-rojo oculto';
        CancelarAnuncios(frm);
    })
}

function obtenerAnuncio() {
    let id;
    let titulo;
    let transaccion;
    let descripcion; 
    let precio;
    let numBaño;
    let numEstacionamiento;
    let numDormitorio;
    let active = true;

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
            case "id":
                if (parseInt(elements.value) != null) {
                    id = parseInt(elements.value);
                }
                else {
                    id = ids;
                }
        }
    }
    ids++;
    return new Anuncio(id, titulo, transaccion, descripcion, precio, numBaño, numEstacionamiento, numDormitorio, active);
}

function CargarForm(frm, Anuncio) {
    for (elements of frm.elements) {
        switch (elements.name) {
            case "id":
                elements.value = Anuncio.id;
                break;
            case "Titulo":
                elements.value = Anuncio.titulo;
                break;
            case "Transaccion":
                elements.value = Anuncio.transaccion;
                break;
            case "Descripcion":
                elements.value = Anuncio.descripcion;
                break;
            case "Precio":
                elements.value = Anuncio.precio;
                break;
            case "numBaño":
                elements.value = Anuncio.numBaño;
                break;
            case "numEstacionamiento":
                elements.value = Anuncio.numEstacionamiento;
                break;
            case "numDormitorio":
                elements.value = Anuncio.numDormitorio;
                break;
        }
    }
}

function CancelarAnuncios(frm) {
    for (elements of frm.elements) {
        switch (elements.name) {
            case "Titulo":
                elements.value = "";
                break;
            case "Transaccion":
                elements.value = "";
                break;
            case "Descripcion":
                elements.value = "";
                break;
            case "Precio":
                elements.value = "";
                break;
            case "numBaño":
                elements.value = "";
                break;
            case "numEstacionamiento":
                elements.value = "";
                break;
            case "numDormitorio":
                elements.value = "";
                break;
        }
    }
}

function Spinner() {
    var spinner = document.createElement('img');
    spinner.setAttribute('src', './img/831.gif');
    spinner.setAttribute('alt', 'spinner');
    return spinner;
}