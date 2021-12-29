import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [ HeroComponent, ListComponent  ],
    exports: [ ListComponent ],
    imports: [ CommonModule ]

})

export class HeroesModule {}