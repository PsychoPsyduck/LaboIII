let arrayAnuncios;
let primeraVez = true;
let arrayBienesRaices = [];
$(function () {
    inicializarManejadores();
})

function inicializarManejadores() {
    $("#frm").submit(manejadorSubmit);
    $("#lblId").hide();
    $("#idBienRaiz").hide();
    $("#btnLimpiar").hide();
    $("#btnBorrar").hide();
    $("#btnBorrar").click(manejadorBorrar);
    $("#btnLimpiar").click(limpiarForm);
    arrayObjetos = JSON.parse(localStorage.getItem("BienesRaices"));
    if (arrayObjetos != null) {
        arrayObjetos.forEach(object => {
            let bienRaiz = new BienRaiz(object.Id,object.Titulo,object.Descripcion,
                                        object.Precio,object.Baños, object.Estacionamiento,object.Dormitorio,
                                        object.ETransaccion)
            arrayBienesRaices.push(bienRaiz);
        });

        calcularPrecio(arrayBienesRaices);
    }
    cargarGrilla(arrayBienesRaices);
}

function manejadorSubmit(e) {
    e.preventDefault();
    let nuevoBienRaiz = obtenerBienRaiz(e.target, false);
    arrayBienesRaices.push(nuevoBienRaiz);
    localStorage.setItem("BienesRaices", JSON.stringify(arrayBienesRaices));
    cargarGrilla(arrayBienesRaices);
    calcularPrecio(arrayBienesRaices);
    reestablecerBoxes();
    limpiarForm();

}

function manejadorModificar(e) {
    e.preventDefault();
    let bienRaiz = obtenerBienRaiz(e.target, true);
    for (i = 0; i < arrayBienesRaices.length; i++) {
        if (arrayBienesRaices[i].id === bienRaiz.id) {
            arrayBienesRaices.splice(i, 1, bienRaiz);
        }
    }
    localStorage.setItem("BienesRaices", JSON.stringify(arrayBienesRaices));
    reestablecerBoxes()
    limpiarForm();
    cargarGrilla(arrayBienesRaices);
    calcularPrecio(arrayBienesRaices);
}

function manejadorBorrar() {

    let id = $("#idBienRaiz").val();
    for (i = 0; i < arrayBienesRaices.length; i++) {
        if (arrayBienesRaices[i].id === id) {
            arrayBienesRaices.splice(i, 1);
        }
    }
    localStorage.setItem("BienesRaices", JSON.stringify(arrayBienesRaices));
    reestablecerBoxes()
    limpiarForm();
    cargarGrilla(arrayBienesRaices);
    calcularPrecio(arrayBienesRaices);
}

function cargarGrilla(array) {
    let tabla = $("#divTabla");
    let checkbox = $("divChk");
    tabla.html('');
    $('tbody', tabla);

    if (primeraVez === true) {
        crearBoxes(arrayBienesRaices, "divChk");
        primeraVez = false;
    }
    checkbox.html('');
    tabla.append(crearTabla(array));
    let tds = $("td");
    tds.on("click", setValues);
}
function filtrarDatos() {
    let opciones = ['id'];
    //Aca recorro uno por uno todos los checkbox
    $('.box input:checked').each(function () {
        if ($(this).prop('checked') == true) {
            ///Aca meto en un array todos los valores de los checkbox que esten tildados (titulo, descricion etc)
            opciones.push($(this).val());
        }
    });
    //Filtro por el valor del select
    let transaccion = $('#selTransaccion').val();
    let datosFiltradosSel = arrayBienesRaices;
    if (transaccion !== "Todos") {
        datosFiltradosSel = datosFiltradosSel.filter(obj => obj.transaccion === transaccion);
    }
    calcularPrecio(datosFiltradosSel);

    //Filtro por el valor de los checkbox
    let datosFiltradosChk = datosFiltradosSel.map(function (dato) {
        let retorno = new Object();

        opciones.forEach(elemento => {
            retorno[elemento] = dato[elemento];
        });
        return retorno;
    });
    //Vuelvo a cargar la tabla con los datos filtrados
    cargarGrilla(datosFiltradosChk);
}


function obtenerBienRaiz(frm, tieneId) {
    
    let id;
    let titulo;
    let descripcion;
    let precio;
    let baños;
    let estacionamiento;
    let dormitorio;
    let radioTransaccion;

    for (element of frm.elements) {
        switch (element.name) {
            case "titulo":
                titulo = element.value;
                break;
            case "descripcion":
                descripcion = element.value;
                break;
            case "precio":
                precio = element.value;
                break;
            case "baños":
                baños = element.value;
                break;
            case "estacionamiento":
                estacionamiento = element.value;
                break;
            case "dormitorio":
                dormitorio = element.value;
                break;
            case "radioTransaccion":
                if (element.checked === true) {
                    radioTransaccion = element.value;
                }
                break;
            case "idBienRaiz":
                if (tieneId === true) {
                    id = element.value;
                } else {
                    arrayObjetos = JSON.parse(localStorage.getItem("BienesRaices"));
                    if (arrayObjetos != null && arrayObjetos.length !== 0) {
                        ids = arrayObjetos.map(element => element.id).sort(function (a, b) { return a - b; });
                        ultimoId = ids[ids.length - 1];
                        ultimoId++;
                        id = ultimoId.toString();
                    }
                    else {
                        id = "1";
                    }
                }
                break;
        }
    }
    let bienRaiz = new BienRaiz(id, titulo, descripcion, precio, baños, estacionamiento, dormitorio, radioTransaccion);
    return bienRaiz;
}

function setValues(e) {
    let tr = e.target.parentElement;
    let nodos = tr.childNodes;
    let dato = arrayBienesRaices.filter(obj => obj.id === nodos[0].innerText);
    //ID
    $("#idBienRaiz").val(dato[0].id);
    $("#idBienRaiz").show();
    $("#lblId").show();
    //Titulo
    $("#txtTitulo").val(dato[0].titulo);
    //Descripcion
    $("#txtDescripcion").val(dato[0].descripcion);
    //Precio
    $("#precio").val(dato[0].precio);
    //Banos
    $("#banos").val(dato[0].baños);
    //Estacionamiento
    $("#estacionamiento").val(dato[0].estacionamiento);
    //Dormitorio
    $("#dormitorio").val(dato[0].dormitorio);
    //Transaccion
    if (dato[0].sexo == "Alquiler") {
        $('#Alquiler').prop('checked', true);
    } else {
        $('#Venta').prop('checked', true);
    }

    $("#btnCrearModificar").text("Modificar");
    $("#btnBorrar").show();
    $("#frm").off('submit', manejadorSubmit);
    $("#frm").submit(manejadorModificar);
    $("#btnLimpiar").show();

}

function limpiarForm() {
    $("#idBienRaiz").hide();
    $("#lblId").hide()
    $("#txtTitulo").val("");
    $("#txtDescripcion").val("");
    $("#numPrecio").val(1);
    $("#numBanos").val(1);
    $("#numEstacionamiento").val(0);
    $("#numDormitorio").val(1);
    $('#Alquiler').prop('checked', true);

    $("#btnCrearModificar").text("Crear");
    $("#btnLimpiar").hide();
    $("#btnBorrar").hide();
    $("#frm").off('submit', manejadorModificar);
    $("#frm").submit(manejadorSubmit);

}

function reestablecerBoxes() {
    let checkboxs = $('.box input');
    checkboxs.prop("checked", true);
}

function calcularPrecio(arr) {
    let promedio = arr.map(obj => parseInt(obj.precio))
        .reduce((prev, curr) => (prev + curr) / arr.length);
    $('#txtInfoPrecio').val(promedio) ;
}


