import { Component } from "@angular/core";

@Component ({
    selector: 'app-counter',
    template: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Angular course</title>
        </head>
        <body>
        
        <h1>{{ title }}</h1>
        <h3>Base is: <strong> {{ base }}</strong></h3>
        
        <button (click)='add(-base)'> - Subtract base</button>
        
        <span class="result-number">{{ result }}</span>
        
        <button (click)='add(base)'> + Add base</button>
        
        </body>
        </html>
    `
})

export class CounterComponent {
    title:  string = 'Contador app';
    result: number = 0;
    base:   number = 5;
  
    add(n: number):void {
      this.result += n;
    }
}