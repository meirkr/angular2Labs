import {Component, Input, OnInit} from "@angular/core";
import {Album} from "../common/album.model";
import {AlbumService} from "../common/albums.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap'

@Component({
  selector:'album-details',
  templateUrl:'./albumDetails.component.html',
  styleUrls:['./albumDetails.component.css']
})
export class AlbumDetailsComponent implements OnInit{

  @Input()
  private selectedAlbum:Album

  constructor(private albumService:AlbumService,private route:ActivatedRoute){}

  ngOnInit(){

    this.route.params
      .switchMap((params: Params) => this.albumService.getAlbum(params['id']))
      .subscribe((album: Album) => {console.log(album); this.selectedAlbum= album });
  }

}
