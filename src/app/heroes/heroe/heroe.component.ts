import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre : string = 'IronMan';
    edad : number = 45;

    get nombreCapitalizado() : String{
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string{

        return `${this.nombre} - ${this.edad}`
    }

    //Concepto de One Way Data Binding -- Enlazado de una sola via
    cambiarNombre() : void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad() : void{
        this.edad = 30;
    }


}
