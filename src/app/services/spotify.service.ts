import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import  'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
urlBusqueda:string="https://api.spotify.com/v1/search";
urlArtista:string="https://api.spotify.com/v1/artists/";
artistas:any[];
token:string='Bearer BQAR_knUn7Zy1_80zkHOAjWMMTGS3djw2E34CYc_AZMsoNIcv-UM32zYU6MN6JK8iN0msdWrd528_e5cfeXgpQ';
  constructor(private http:Http) { }

getArtistas(termino:string){
  let urlParams:string=`?q=${termino}&type=artist`;
  let url=this.urlBusqueda+urlParams;

  let headers=new Headers();
  headers.append('authorization',this.token);
  //devuelve un observable
  return this.http.get(url,{headers}).map(resp=>{
    console.log(resp.json().artists.items);
      this.artistas=resp.json().artists.items;
  });
}

getArtista(id:string){


  let headers=new Headers();
  let url=this.urlArtista+id;
  headers.append('authorization',this.token);
  //devuelve un observable
  return this.http.get(url,{headers}).map(resp=>{
    console.log(resp.json());
    return resp.json();

  });
}

getTopTracks(id:string){


  let headers=new Headers();
  let url=`${this.urlArtista+id}/top-tracks?country=US`;;
  headers.append('authorization',this.token);
  //devuelve un observable
  return this.http.get(url,{headers}).map(resp=>{
    console.log(resp.json().tracks);
    return resp.json().tracks;

  });
}
}
