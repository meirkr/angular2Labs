import {Component} from '@angular/core';
import {Album} from "./common/album.model";



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {

  private selectedAlbum:Album;


  onAlbumClicked(album){
    this.selectedAlbum=album;
  }
}
