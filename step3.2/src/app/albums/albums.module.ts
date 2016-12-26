import {NgModule} from "@angular/core";
import {AlbumsListComponent} from "./albumslist.component";
import {CommonModule} from "@angular/common";
import {AlbumDetailsComponent} from "./albumDetails.component";

@NgModule({
  declarations:[AlbumsListComponent,AlbumDetailsComponent],
  imports:[CommonModule],
  exports:[AlbumsListComponent,AlbumDetailsComponent]

})
export class AlbumsModule{}
