/// <reference path="BienRaiz.ts" />

class Parser{
    public datos:BienRaiz[];     
    public decode = (params:Array<BienRaiz>):BienRaiz[] => {
        
        params.forEach(element => {
            let bienRaiz = new BienRaiz(element.Id,element.Titulo,
                            element.Descripcion,element.Precio,element.Baños,
                            element.Estacionamiento,element.Dormitorio,element.ETransaccion);
            this.datos.push(bienRaiz);
        });
        return this.datos;
    }
    
    constructor() {
        this.datos = Array();
    }
}