namespace personas
{
   export  class Alumno extends Persona{   // si animal fuera una clase lo puedo heredar asi
        legajo:number; 

        constructor(name:string,apellido:string,leg:number)
        { super(name,apellido); 
            
            this.legajo=leg;
        }

    } 

}