import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!)
      this.resultados = JSON.parse(localStorage.getItem('resultados')!)
    }
  }

  addGif(query: string) {

    query = query.trim().toLowerCase();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rZv3fc9ynSDux64ltgXmucrPeEbd5NuZ&q=${query}&limit=10&offset=0&rating=g&lang=en`


    if (query.trim().length !== 0) {
      if (!this._historial.includes(query)) {
        this._historial.unshift(query);
        this._historial = this._historial.splice(0, 10);
        localStorage.setItem('historial', JSON.stringify(this._historial));
      }
      this.http.get<SearchGIFResponse>(url).subscribe(res => {
        this.resultados = res.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
    }

  }

}
