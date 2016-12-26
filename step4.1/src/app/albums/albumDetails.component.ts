import {Component, Input} from "@angular/core";
import {Album} from "../common/album.model";

@Component({
  selector:'album-details',
  templateUrl:'./albumDetails.component.html',
  styleUrls:['./albumDetails.component.css']
})
export class AlbumDetailsComponent{

  @Input()
  private selectedAlbum:Album

  constructor(){}

  getImageUrl(album:Album,size:string='medium'):string {
    var image=album.image.find( (image) => {return image.size == size});
    return image["#text"] || '';
  }

}
