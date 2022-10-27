import { Component,Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent {
  constructor(private dbzService: DbzService) {}

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar(personaje: any) {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
