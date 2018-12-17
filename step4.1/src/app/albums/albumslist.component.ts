import {Component, Input, EventEmitter, OnInit, Output} from "@angular/core";
import {Album} from "../common/album.model";
import { AlbumsService } from "./albums.service";


@Component({
  selector:'albums-list',
  templateUrl:'./albumslist.component.html',
  styleUrls:['./albumslist.component.css']
})
export class AlbumsListComponent implements OnInit{

  private albums:Album[];

  @Output()
  private albumClicked:EventEmitter<Album>;

  constructor(albumsService:AlbumsService){
      this.albums=albumsService.getAlbums();
      this.albumClicked=new EventEmitter<Album>();
  }

  ngOnInit(){

  }
  onClick(album){
    this.albumClicked.emit(album);
  }
  getImageUrl(album:Album,size:string='medium'):string {
    var image=album.image.find( (image) => {return image.size == size});
    return image["#text"] || '';
  }





}
