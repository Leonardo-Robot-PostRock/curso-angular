import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroeBorrado: string = '';
  heroes: string[] = [
    'Ironman',
    'Capitan America',
    'Hulk',
    'Thor',
    'Black Widow',
  ];
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
    
  }
}
