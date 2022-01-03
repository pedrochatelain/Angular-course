import { Component } from '@angular/core';
import { Character } from '../dbz.interface'
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  new: Character = {
    name: 'Pedro',
    power: 3000
  }

  addNewCharacter(c: Character) {
    console.log(c)
    this.characters.push(c)
  }

  constructor(private dbzService: DbzService) { }

}
