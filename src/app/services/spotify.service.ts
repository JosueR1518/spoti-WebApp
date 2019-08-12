import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
urlBusqueda= "https://api.spotify.com/v1/search";
urlArtista= "https://api.spotify.com/v1/artists/";
artistas: any[];

/**
 * Token vence cada hora, Spotify solo acepta peticiones desde un servidor para generar token, se guardó en postman
 */
token= 'Bearer BQCWMeovWO10llASn0CSSrv9jor-Nga9hbkdCl2_9ckh908BMlHYy-7Uau-oq-33RIdhex9V90uxiauuavs';
  constructor(private http: Http) { }

getArtistas(termino: string){
  const urlParams= `?q=${termino}&type=artist`;
  const url = this.urlBusqueda + urlParams;

  const headers = new Headers();
  headers.append('authorization', this.token);
  //devuelve un observable
  return this.http.get(url, {headers}).map(resp => {
    console.log(resp.json().artists.items);
      this.artistas = resp.json().artists.items;

      return this.artistas;
  });
}

getArtista(id: string){


  const headers = new Headers();
  const url = this.urlArtista + id;
  headers.append('authorization', this.token);
  //devuelve un observable
  return this.http.get(url, {headers}).map(resp => {
    console.log(resp.json());
    return resp.json();

  });
}

getTopTracks(id: string){


  const headers = new Headers();
  const url = `${this.urlArtista + id}/top-tracks?country=US`; ;
  headers.append('authorization', this.token);
  //devuelve un observable
  return this.http.get(url, {headers}).map(resp => {
    console.log(resp.json().tracks);
    return resp.json().tracks;

  });
}


getNewReleases() {

  let headers = new Headers();
  headers.append('authorization', this.token);
  return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).map(resp => {
    console.log(resp.json().albums);
    return resp.json().albums.items;

  });;
}
}
