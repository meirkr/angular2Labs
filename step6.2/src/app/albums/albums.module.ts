import {NgModule} from "@angular/core";
import {AlbumsListComponent} from "./albumslist.component";
import {CommonModule} from "@angular/common";
import {AlbumDetailsComponent} from "./albumDetails.component";
import {AlbumService} from "../common/albums.service";
import {SharedModule} from "../common/shared.module";

@NgModule({
  declarations:[AlbumsListComponent,AlbumDetailsComponent],
  imports:[CommonModule,SharedModule],
  exports:[AlbumsListComponent,AlbumDetailsComponent,SharedModule],
  providers:[AlbumService]
})
export class AlbumsModule{}
