import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { Album } from './album';

let albumsUrl = 'app/resources/beatles-albums.json';

@Injectable()
export class PlaylistService {

    constructor(private http: Http) { }

    getAlbums(): Observable<Album[]> {
        return (this.http.get(albumsUrl)
            .map((res: Response) => <Album[]>res.json()));
    }
}