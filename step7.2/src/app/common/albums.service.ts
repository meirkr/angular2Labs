import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Album } from './album.model';

@Injectable()
export class AlbumService {

  private AlbumsUrl:string = 'app/resources/beatles-albums.json';

  constructor(private http: Http) { }

  getAlbums(): Observable<Album[]> {
    return (this.http.get(this.AlbumsUrl)
      .map((res:Response) => <Album[]>res.json()));
  }
  getAlbum(id:string): Observable<Album> {
    return this.getAlbums()
      .map((albums:Album[]) => { return albums.find((album)=>{return album.mbid==id})});
  }

  getImageUrl(album:Album,size:string='medium'):string {
    var image=album.image.find( (image) => {return image.size == size});
    return image["#text"] || '';
  }
}
