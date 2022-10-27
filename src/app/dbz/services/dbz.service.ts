import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor() {}

  agregarPersonaje(p: Personaje) {
    this._personajes.push(p);
  }
}
