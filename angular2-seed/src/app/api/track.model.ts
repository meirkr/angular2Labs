import { Artist } from './artist.model';

export class Track{
    mbid: string;   
    name: string;
    url: string;
    artist: Artist;
    image: ImageObject[];
    albumImgUrl: string;
}


export class ImageObject {
    "#text": string;
    size: string;
}

export class Album {
    mbid: string;   
    name: string;
    url: string;
    artist: Artist;
    image: ImageObject[];
    albumImgUrl: string;
}