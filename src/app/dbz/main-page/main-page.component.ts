import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  personajes: Personaje[] = [];

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

  agregar(personaje: any) {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
    console.log('ver', personaje);

    return this.nuevo;
  }
}
