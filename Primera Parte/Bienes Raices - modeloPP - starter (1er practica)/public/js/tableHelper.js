function crearTabla(array) {
    var tabla = document.createElement("table");

    tabla.setAttribute('border', '1px solid black');
    tabla.setAttribute('style', 'border-collapse:collapse');
    tabla.setAttribute('width', '700px');

    let cabecera = document.createElement("tr");

    for(atributo in array[0]) {
        let th = document.createElement("th");
        th.textContent = atributo;
        if(atributo != "active"){
            cabecera.appendChild(th);
        }
    }

    tabla.appendChild(cabecera);

    for(var i in array) {
        var row = document.createElement("tr");
        var unObjeto = array[i];

        for(j in unObjeto) {
            if(unObjeto[j]==unObjeto["active"])
                continue;
            let td = document.createElement("td");
            td.setAttribute('style', 'text-align:center');
            var dato = document.createTextNode(unObjeto[j]);
            td.appendChild(dato);
            row.appendChild(td);
        }

        tabla.appendChild(row);
    }

    console.log(tabla);
    return tabla;
}