import {NgModule} from "@angular/core";
import {AlbumsListComponent} from "./albumslist.component";
import {CommonModule} from "@angular/common";
import {AlbumDetailsComponent} from "./albumDetails.component";
import {AlbumService} from "../common/albums.service";
import {SharedModule} from "../common/shared.module";
import {AlbumsRoutingModule} from "./albums.routing";
import {AlbumsListContainer} from "./albumsListContainer.component";

@NgModule({
  declarations:[AlbumsListComponent,AlbumDetailsComponent,AlbumsListContainer],
  imports:[CommonModule,SharedModule,AlbumsRoutingModule],
  exports:[AlbumsListComponent,AlbumDetailsComponent,SharedModule],
  providers:[AlbumService]
})
export class AlbumsModule{}
