import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo:Personaje={
    nombre:'',
    poder:0
  }

  @Output()nuevoPersonaje : EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbzService:DbzService){}

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbzService.agregarNuevoPersonaje(this.nuevo);

    this.nuevo={
      nombre: '',
      poder: 0
    }
  }

}
