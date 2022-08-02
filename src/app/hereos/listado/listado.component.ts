import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroeBorrados: string[] = [];
  heroes: string[] = [
    'Ironman',
    'Capitan America',
    'Hulk',
    'Thor',
    'Black Widow',
  ];
  borrarHeroe(i: number): void {
    this.heroeBorrados.push(this.heroes[i]);
    this.heroes.splice(i, 1);
  }
}
