import {NgModule} from "@angular/core";
import {AlbumsListComponent} from "./albumslist.component";
import {CommonModule} from "@angular/common";
import {AlbumDetailsComponent} from "./albumDetails.component";
import {AlbumService} from "../common/albums.service";

@NgModule({
  declarations:[AlbumsListComponent,AlbumDetailsComponent],
  imports:[CommonModule],
  exports:[AlbumsListComponent,AlbumDetailsComponent],
  providers:[AlbumService]
})
export class AlbumsModule{}
