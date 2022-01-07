import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  addGif(query: string) {

    query = query.trim().toLowerCase();

    if (query.trim().length !== 0) {
      if ( ! this._historial.includes(query) ) {
        this._historial.unshift(query); 
      }
      this._historial = this._historial.splice(0, 10);
    }
    console.log(this.historial);
  }


  constructor() { }
}
