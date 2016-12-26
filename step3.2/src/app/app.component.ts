import {Component} from '@angular/core';
import {Album} from "./common/album.model";

const ALBUMS:Album[] = [
  {
    "name": "Abbey Road",
    "playcount": 40393427,
    "mbid": "e12f53a3-e912-321d-bdc7-ed17ec525ec0",
    "url": "https://www.last.fm/music/The+Beatles/Abbey+Road",
    "artist": {
      "name": "The Beatles",
      "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
      "url": "https://www.last.fm/music/nnThe+Beatles"
    },
    "image": [
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
        "size": "small"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
        "size": "medium"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
        "size": "large"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
        "size": "extralarge"
      }
    ]
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
    "image": [
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/5a63743f4ba244678b74d90ad868504f.png",
        "size": "small"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/5a63743f4ba244678b74d90ad868504f.png",
        "size": "medium"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/5a63743f4ba244678b74d90ad868504f.png",
        "size": "large"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/5a63743f4ba244678b74d90ad868504f.png",
        "size": "extralarge"
      }
    ]
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
    "image": [
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/fafc74a8f45241acc10158be6e2d8270.png",
        "size": "small"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/fafc74a8f45241acc10158be6e2d8270.png",
        "size": "medium"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/fafc74a8f45241acc10158be6e2d8270.png",
        "size": "large"
      },
      {
        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/fafc74a8f45241acc10158be6e2d8270.png",
        "size": "extralarge"
      }
    ]
  }
]


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {

  private albums:Album[] = ALBUMS;
  private selectedAlbum:Album;


  onAlbumClicked(album){
    this.selectedAlbum=album;
  }
}
