/// <reference path="Anuncio.ts" />

class BienRaiz extends Anuncio{

    private transaccion:ETransaccion;

    constructor(id:any,titulo: string, descripcion: string, precio: number, baños: number, 
        estacionamiento: number, dormitorio: number, transaccion:ETransaccion){
        super(id,titulo,descripcion,precio,baños,estacionamiento,dormitorio);
        this.transaccion = transaccion;
    }

    get ETransaccion():ETransaccion{return this.transaccion;};
    set ETransaccion(e:ETransaccion){this.transaccion = e};
}