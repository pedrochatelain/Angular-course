import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  @Input() chars: Character[] = [];

}
