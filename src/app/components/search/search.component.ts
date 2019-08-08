import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
termino:string="";
artistas:any[];
  constructor(private _sptifyService:SpotifyService) { }

  ngOnInit() {


  }

buscar(){
  console.log(this.termino);
this._sptifyService.getArtistas(this.termino).subscribe();
}
}
