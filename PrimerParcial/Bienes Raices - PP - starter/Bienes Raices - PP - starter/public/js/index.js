//ATRIBUTOS DE ANUNCIO
//id,titulo,transaccion,descripcion,precio,Wc,Estacionamiento,Dormitorio;

//////////////////////LLAMADAS AJAX/////////////////////////////////
var frm;
var botonAlta;
var botonBaja;
var botonModificar;
var botonCancelar;
var divTabla;

window.addEventListener('load', inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
    divTabla = document.getElementById("divTabla");
    botonAlta = document.getElementById('btnAlta');
    botonBaja = document.getElementById('btnBaja');
    botonModificar = document.getElementById('btnModificar');
    botonCancelar = document.getElementById('btnCancelar');

    cargarDatos();

    frm.addEventListener('submit', function (e) {
        e.preventDefault();
    })
    botonAlta.addEventListener('click', function (e) {
        let nuevoAnuncio = obtenerAnuncio(frm);
        AltaAnuncio(nuevoAnuncio);
    })
    botonCancelar.addEventListener('click', function (e) {
        CancelarAnuncio(frm);
        // botonModificar.className = 'boton boton-verde oculto';
        // botonCancelar.className = 'boton boton-amarillo oculto';
        // botonBaja.className = 'boton boton-rojo oculto';
    })
    botonBaja.addEventListener('click', function () {
        let nuevoAnuncio = obtenerAnuncio(frm);
        BajaAnuncio(nuevoAnuncio);
        // botonModificar.className = 'boton boton-verde oculto';
        // botonCancelar.className = 'boton boton-amarillo oculto';
        // botonBaja.className = 'boton boton-rojo oculto';
        CancelarAnuncio(frm);
    })
    botonModificar.addEventListener('click',function(){
        let nuevoAnuncio= obtenerAnuncio(frm);
        ModificarAnuncio(nuevoAnuncio);
        // botonModificar.className = 'boton boton-verde oculto';
        // botonCancelar.className = 'boton boton-amarillo oculto';
        // botonBaja.className = 'boton boton-rojo oculto';
        CancelarAnuncio(frm);
    })
}

function obtenerAnuncio(frm) {
    let id;
    let titulo;
    let transaccion;
    let descripcion; 
    let precio;
    let Wc;
    let Estacionamiento;
    let Dormitorio;
    let active = "active";

    for(elemento of frm.elements) {
        switch (elemento.name) {
            case "Titulo":
                titulo = elemento.value;
                break;
            case "Transaccion":
                transaccion = elemento.value;
                break;
            case "Descripcion":
                descripcion = elemento.value;
                break;
            case "Precio":
                precio = elemento.value;
                break;
            case "Wc":
                Wc = parseInt(elemento.value);
                break;
            case "Estacionamiento":
                Estacionamiento = parseInt(elemento.value);
                break;
            case "Dormitorio":
                Dormitorio = parseInt(elemento.value);
                break;
            case "Id":
                id = elemento.value;
        }
    }
    return new Anuncio(id, titulo, transaccion, descripcion, precio, Wc, Estacionamiento, Dormitorio, active);
}

function CargarForm(frm, Anuncio) {
    for (elements of frm.elements) {
        switch (elements.name) {
            case "Id":
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
            case "Wc":
                elements.value = parseInt(Anuncio.num_wc);
                break;
            case "Estacionamiento":
                elements.value = parseInt(Anuncio.num_estacionamiento);
                break;
            case "Dormitorio":
                elements.value = parseInt(Anuncio.num_dormitorio);
                break;
        }
    }
}

function CancelarAnuncio(frm) {
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
            case "Wc":
                elements.value = "";
                break;
            case "Estacionamiento":
                elements.value = "";
                break;
            case "Dormitorio":
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

