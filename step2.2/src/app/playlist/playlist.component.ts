import { Component } from '@angular/core';

//Step 1: Creating the component
@Component({
    selector: 'play-list',
    templateUrl:'./playlist.component.html',
    styleUrls:['./playlist.component.css']
})
export class PlaylistComponent{
    contructor(){

    }

    album = {
        "name": "Revolver",
        "playcount": 24324498,
        "mbid": "c7f648e2-9c6d-32df-b5ee-ccab3e696a51",
        "url": "https://www.last.fm/music/The+Beatles/Revolver",
        "artist": {
          "name": "The Beatles",
          "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
          "url": "https://www.last.fm/music/The+Beatles"
        },
        "image": 
          {
            "src": "https://lastfm-img2.akamaized.net/i/u/174s/fafc74a8f45241acc10158be6e2d8270.png",
          }
        
      }
}