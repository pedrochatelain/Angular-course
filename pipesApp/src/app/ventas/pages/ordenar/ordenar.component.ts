import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  myName: string = 'Pedro Chatelain'
  uppercaseBoolean: boolean = false;

  toggleUppercase(): void {
    this.uppercaseBoolean = ! this.uppercaseBoolean
  }

  cambiar(): void {}

}
