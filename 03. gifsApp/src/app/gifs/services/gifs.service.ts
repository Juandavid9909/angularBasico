import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "vEmAun7hz139ZepjaqvY0y8qwkWNdulX";
  private servicioUrl: string = "https://api.giphy.com/v1/gifs";
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // if(localStorage.getItem("historial")) {
    //   this._historial = JSON.parse(localStorage.getItem("historial")!);
    // }

    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this.resultados = JSON.parse(localStorage.getItem("resultados")!) || [];
  }

  buscarGifs(query: string = "") {
    query = query.trim().toLowerCase();
    
    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem("historial", JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", query)
      .set("limit", "10");

    // Con HTTP
    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;

        localStorage.setItem("resultados", JSON.stringify(this.resultados));
      });

    // Con fetch
    // fetch("https://api.giphy.com/v1/gifs/search?api_key=vEmAun7hz139ZepjaqvY0y8qwkWNdulX&q=dragon ball z&limit=10")
    //   .then(resp => {
    //     resp.json().then(data => console.log(data))
    //   });

    // Con async await
    // const resp = await fetch("https://api.giphy.com/v1/gifs/search?api_key=vEmAun7hz139ZepjaqvY0y8qwkWNdulX&q=dragon ball z&limit=10");
    // const data = await resp.json();
    // console.log(data);
  }
}
