import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { Track } from './../api/track.model';

let artistsUrl = 'app/api/beatles-tracks.json';

@Injectable()
export class ArtistService {

  constructor(private http: Http) { }

  getTracks(): Observable<Track[]> {
    return (this.http.get(artistsUrl)
      .map((res: Response) => <Track[]>res.json().track));     
  }
}

