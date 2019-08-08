import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista:any;
  canciones:any[];
  constructor(private activatedRoute:ActivatedRoute,private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map(parametros=>parametros['id'])
    .subscribe(id=>{
      console.log(id);
      this._spotifyService.getArtista(id).subscribe(
        data=>this.artista=data);

        this._spotifyService.getTopTracks(id).subscribe(
          data=>this.canciones=data);


       });


  }

}
