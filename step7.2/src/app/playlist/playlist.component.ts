import { Album } from './album';
import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';

//Step 1: Creating the component
@Component({
  selector: 'play-list',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  albums: Album[];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getAlbums();
  }

  private getAlbums() {
    this.playlistService.getAlbums()
      .subscribe(
      albums => this.albums = albums,
      error => this.logError(error),
      () => {
        console.log("Get Albums Completed")
        this.getImages(this.albums);
      }
      );
  }

  logError(err) {
    console.log("Oops, something went wrong when getting tracks: " + err);
  }

  //Get the image Url from the Json out in the track/album object
  getImages(list) {
    list.forEach(listObj => {
      if (listObj.image[2]['#text']) {
        let imageUrl = listObj.image[2]['#text'];
        listObj.albumImgUrl = imageUrl;
      }
    });
  }
}