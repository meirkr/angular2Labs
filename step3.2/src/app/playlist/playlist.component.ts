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

    albums = [
      {
        "name": "Abbey Road",
        "playcount": 40393427,
        "mbid": "e12f53a3-e912-321d-bdc7-ed17ec525ec0",
        "url": "https://www.last.fm/music/The+Beatles/Abbey+Road",
        "artist": {
          "name": "The Beatles",
          "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
          "url": "https://www.last.fm/music/The+Beatles"
        },
        "image":
          {
            "src": "https://lastfm-img2.akamaized.net/i/u/174s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
          }     
      },
      {
        "name": "Sgt. Pepper's Lonely Hearts Club Band",
        "playcount": 23643299,
        "mbid": "44b7cab1-0ce1-404e-9089-b458eb3fa530",
        "url": "https://www.last.fm/music/The+Beatles/Sgt.+Pepper%27s+Lonely+Hearts+Club+Band",
        "artist": {
          "name": "The Beatles",
          "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
          "url": "https://www.last.fm/music/The+Beatles"
        },
        "image": 
          {
            "src": "https://lastfm-img2.akamaized.net/i/u/174s/5a63743f4ba244678b74d90ad868504f.png",
          }
      },
      {
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
    ]
}