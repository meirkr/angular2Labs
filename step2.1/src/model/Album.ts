

export class Album {
    name: string;
    playcount: number;
    mbid?: string;
    url: string;
    artist: Artist;
    image: AlbumImage[];
    
}

// export enum ImageSize {
//     small = "small",
//     medium = "medium",
//     large = "large",
//     extralarge = "extralarge",
// }

class AlbumImage
{    
    text : string;
    size: "small" | "medium" |  "large" | "extralarge";

}

class Artist
{
    name: string;
    mbid?: string;
    url: string;
}