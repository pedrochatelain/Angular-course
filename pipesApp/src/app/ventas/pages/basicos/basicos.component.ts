import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  name: string = 'PeDrO CHatElaiN'
  fecha: Date = new Date() // Dia de hoy

}
