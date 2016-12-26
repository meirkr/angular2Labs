import {Component, Input, EventEmitter, OnInit, Output} from "@angular/core";
import {Album} from "../common/album.model";


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

  constructor(){
      this.albums=[];
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
