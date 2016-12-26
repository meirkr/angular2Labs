import {Component, Input, EventEmitter, OnInit, Output} from "@angular/core";
import {Album} from "../common/album.model";
import {AlbumService} from "../common/albums.service";


@Component({
  selector:'albums-list',
  templateUrl:'./albumslist.component.html',
  styleUrls:['./albumslist.component.css']
})
export class AlbumsListComponent implements OnInit{

  @Input()
  private albums:Album[];

  @Output()
  private albumClicked:EventEmitter<Album>;

  constructor(private albumService:AlbumService){
      this.albums=[];
      this.albumClicked=new EventEmitter<Album>();
  }

  ngOnInit(){

  }
  onClick(album){
    this.albumClicked.emit(album);
  }






}
