import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    } 
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  regionActiva: string = ''
  countries: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if (region !== this.regionActiva) {
      this.regionActiva = region;
      this.countries = [];
      this.paisService.getCountriesByRegion(region)
        .subscribe(countries => {
          this.countries = countries
          console.log(countries)
        })
    }
  }

  getCSS(region: string): string {
    return region === this.regionActiva ? 'btn btn-primary': 'btn btn-outline-primary'
  }

}
