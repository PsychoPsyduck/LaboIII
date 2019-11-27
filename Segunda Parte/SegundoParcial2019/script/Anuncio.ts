class Anuncio
{
    protected id:any;
    protected titulo:string;
    protected descripcion:string;
    protected precio:number;
    protected baños:number;
    protected estacionamiento:number;
    protected dormitorio:number;
    
    constructor(id:any,titulo: string, descripcion: string, precio: number, baños: number, 
        estacionamiento: number, dormitorio: number) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.baños = baños;
        this.estacionamiento = estacionamiento;
        this.dormitorio = dormitorio;
    }
    
    // Setters & Getters
    get Titulo():string{return this.titulo;};
    set Titulo(e:string){this.titulo = e};

    get Descripcion():string{return this.descripcion;};
    set Descripcion(e:string){this.descripcion = e};

    get Precio():number{return this.precio;};
    set Precio(e:number){this.precio = e};

    get Baños():number{return this.baños;};
    set Baños(e:number){this.baños = e};

    get Estacionamiento():number{return this.estacionamiento;};
    set Estacionamiento(e:number){this.estacionamiento = e};

    get Dormitorio():number{return this.dormitorio;};
    set Dormitorio(e:number){this.dormitorio = e};

    get Id():string{return this.id;};
    set Id(e:string){this.id = e};


}

enum ETransaccion{
    Alquiler,
    Venta
}

