import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Pedro';
  genero: string = 'm'

  welcomeMap = {
    'm': 'Bienvenido',
    'f': 'Bienvenida'
  }

  //i18nPlural
  clientes: string[] = ['Florencia', 'Pedro', 'Pablo', 'Juan']

  clientesMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'hay 1 cliente esperando',
    '=2': 'hay dos clientes esperando',
    'other': 'hay # clientes esperando'
  }

  changeName(): void {
    if (this.nombre === 'Pedro') {
      this.nombre = 'Florencia'
      this.genero = 'f'
    } else {
      this.nombre = 'Pedro'
      this.genero = 'm'
    }
  }

  deleteClient(): void {
    this.clientes.pop()
  }

}
