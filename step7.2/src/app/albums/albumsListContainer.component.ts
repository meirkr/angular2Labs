import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Album} from "../common/album.model";
import {AlbumService} from "../common/albums.service";
import {Router} from "@angular/router";

@Component({
  selector:'albums-list-container',
  templateUrl:'./albumsListContainer.component.html'
})
export class AlbumsListContainer implements OnInit{
  private albums$:Observable<Album[]>;
  private selectedAlbum:Album;

  constructor(private albumService:AlbumService,private router:Router) {
  }

  onAlbumClicked(album:Album) {
    //this.selectedAlbum = album;
    this.router.navigate(['/albums',album.mbid])
  }

  ngOnInit() {
    this.albums$ = this.albumService.getAlbums();
  }
}
