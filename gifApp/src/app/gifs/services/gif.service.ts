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

  constructor(private http: HttpClient) { }

  addGif(query: string) {

    query = query.trim().toLowerCase();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rZv3fc9ynSDux64ltgXmucrPeEbd5NuZ&q=${query}&limit=10&offset=0&rating=g&lang=en`


    if (query.trim().length !== 0) {
      if (!this._historial.includes(query)) {
        this._historial.unshift(query);
        this._historial = this._historial.splice(0, 10);
      }
      this.http.get<SearchGIFResponse>(url).subscribe(res => {
        console.log(res);
        this.resultados = res.data;
      });
    }

  }

}
