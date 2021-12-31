import { Component } from '@angular/core';
import { Character } from '../dbz.interface'


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

  newCharacter: Character = {
    name: '',
    power: 0
  }

  add() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    console.log(this.newCharacter)
    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0
    }
    console.log(this.characters);
  }

  changeName(e: any) {
    console.log(e.target.value)
  }

}
