import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];
  lastDeletedHero: string = '';
  firstHero: string = this.heroes[0];

  // Delete the last hero of the array and save it on 'lastDeletedHero'
  // If all heroes were deleted, 'lastDeletedHero' will be the 'firstHero'
  deleteHero() {
    this.lastDeletedHero =  this.heroes.pop() || this.firstHero;
  }

}
