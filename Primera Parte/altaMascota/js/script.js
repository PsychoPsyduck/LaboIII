var frm;

window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];

    frm.addEventListener('submit', manejadorSubmit);

    
}

function manejadorSubmit(event) {
    event.preventDefault();

    let nuevaMascota = obtenerMascota(event.target);
    mascotas.push(nuevaMascota);

    document.getElementById("divTabla").innerHTML = "";
    document.getElementById("divTabla").appendChild(crearTabla(mascotas));

    console.log(nuevaMascota);
}

function obtenerMascota() {
    let nombre;
    let edad;
    let tipo;
    let vacunado;
    let desparasitado;
    let castrado;
    let alimento;

    for(elemento of frm.elements) {
        switch (elemento.name) {
            case "nombre":
                nombre = elemento.value;
                break;
            case "edad":
                edad = parseInt(elemento.value);
                break;
            case "tipo":
                if(elemento.checked) {
                    tipo = elemento.value;
                }
                break;
            case "vacunado":
                vacunado = elemento.checked;
                break;
            case "desparasitado":
                desparasitado = elemento.checked;
                break;
            case "castrado":
                castrado = elemento.checked;
                break;
            case "alimento":
                alimento = elemento.value;
                break;
        }
    }
    return new Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento);
}