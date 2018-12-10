
import {Component, Input, Output} from '@angular/core';
import { Album } from '../model/Album';
import { jsonpFactory } from '@angular/http/src/http_module';
import { concat } from 'rxjs/operator/concat';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
})
export class AlbumsComponent {

  @Input() albums: Album[];
  @Output() albumClicked: EventEmitter<Album>;

  constructor() {
    this.albumClicked = new EventEmitter();
  }

  notifyAlbumClicked(album: Album) {
    this.albumClicked.emit(album);
  }

  
}
