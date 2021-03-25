import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()

export class DbzService {
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 10000
        },
        {
          nombre: 'Vegeta',
          poder: 7000
        },
        {
          nombre: 'Trunks',
          poder: 30000
        }
      ];

      get pesonajes(): Personaje[]{
          return [...this._personajes];
      }

    constructor(){
    }

    agregarNuevoPersonaje(personaje :Personaje){
        this._personajes.push(personaje)
      }
}