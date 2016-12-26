import {Component, Input} from "@angular/core";
import {Album} from "../common/album.model";
import {AlbumService} from "../common/albums.service";

@Component({
  selector:'album-details',
  templateUrl:'./albumDetails.component.html',
  styleUrls:['./albumDetails.component.css']
})
export class AlbumDetailsComponent{

  @Input()
  private selectedAlbum:Album

  constructor(private albumService:AlbumService){}

}
