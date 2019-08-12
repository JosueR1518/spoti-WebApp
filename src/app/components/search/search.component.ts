import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
termino:string = "";
artistas: any[]= [];
loading = false;
  constructor(private _sptifyService:SpotifyService) { }

  ngOnInit() {


  }

buscar(){

  this.loading = true;
  console.log(this.termino);

  if (this.termino === '') {
    this.loading= false;
    return false;
  }
this._sptifyService.getArtistas(this.termino).subscribe((resp: any) => {

  this.artistas = resp;
  this.loading = false;
});
}
}
