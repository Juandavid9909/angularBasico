import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ["Spider-Man", "Iron Man", "Hulk", "Thor", "Capitán América"];
  heroeBorrado: string = "";

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
