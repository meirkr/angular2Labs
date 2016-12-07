import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { Track, Album } from './../api/track.model';

let tracksUrl = 'app/api/beatles-tracks.json';
let albumsUrl = 'app/api/beatles-albums.json';

@Injectable()
export class ArtistService {

  constructor(private http: Http) { }

  getTracks(): Observable<Track[]> {
    return (this.http.get(tracksUrl)
      .map((res: Response) => <Track[]>res.json().track));     
  }

  getAlbums(): Observable<Album[]> {
    return (this.http.get(albumsUrl)
      .map((res: Response) => <Album[]>res.json().album));     
  }
}

