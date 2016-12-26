import {Component, OnInit, OnDestroy} from '@angular/core';
import {Album} from "./common/album.model";
import {AlbumService} from "./common/albums.service";
import {Observable, Subscription} from "rxjs/Rx";



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  private albums:Album[]=[];
  private selectedAlbum:Album;
  private albumsSubscriber:Subscription;

  constructor(private albumService:AlbumService){}

  onAlbumClicked(album){
    this.selectedAlbum=album;
  }

  ngOnInit(){
    this.albumsSubscriber=this.albumService.getAlbums().subscribe(albumsData => {
      this.albums=albumsData;
    });
  }

  ngOnDestroy(){
    this.albumsSubscriber.unsubscribe();
  }
}
