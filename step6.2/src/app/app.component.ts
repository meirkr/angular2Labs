import {Component, OnInit, OnDestroy} from '@angular/core';
import {Album} from "./common/album.model";
import {AlbumService} from "./common/albums.service";
import {Observable, Subscription} from "rxjs/Rx";



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {

  private albums$:Observable<Album[]>;
  private selectedAlbum:Album;

  constructor(private albumService:AlbumService) {
  }

  onAlbumClicked(album) {
    this.selectedAlbum = album;
  }

  ngOnInit() {
    this.albums$ = this.albumService.getAlbums();
  }
}
