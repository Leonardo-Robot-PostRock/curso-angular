import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent {
  constructor() {}

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> =
    new EventEmitter<Personaje>();

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

  agregar(personaje: any) {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log('Nuevo', this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };

    return this.nuevo;
  }
}
