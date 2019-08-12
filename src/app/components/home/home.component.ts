import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading = true;

  constructor(private spotiService: SpotifyService) {


    this.spotiService.getNewReleases().subscribe((items:any) => {

      console.log(items);

      this.newSongs = items;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

}
