import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent {

  termino:  string = '';
  hayError: boolean = false;
  paises:   Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe(
        resp => {
          console.log(resp)
          this.paises = resp;
        },
        err  => this.hayError = true
      );
  }

}
