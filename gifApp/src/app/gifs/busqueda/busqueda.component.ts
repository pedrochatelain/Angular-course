import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  constructor(private gifService: GifService) { }

  buscar() {
    const value = this.txtBuscar.nativeElement.value
    this.txtBuscar.nativeElement.value = '';
    this.gifService.searchGif(value);
  }

}
