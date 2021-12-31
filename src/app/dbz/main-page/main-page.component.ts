import { Component } from '@angular/core';

interface Character {
  name: string,
  power: number
}

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
    name: '',
    power: 0
  }

 add() {
  if (this.new.name.trim().length === 0) {
    return;
  }
  console.log(this.new)
 }

 changeName(e:any) {
   console.log(e.target.value)
 }

}
