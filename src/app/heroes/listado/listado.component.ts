import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent{
  
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', "C. America"]

  heroeBorrado : string = "";

  borrarHeroe() : void {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
