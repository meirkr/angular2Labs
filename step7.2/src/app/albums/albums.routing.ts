
import {Route, RouterModule} from "@angular/router";
import {AlbumsListContainer} from "./albumsListContainer.component";
import {NgModule} from "@angular/core";
import {AlbumDetailsComponent} from "./albumDetails.component";
const routes:Route[]=[
  {path:'albums', component:AlbumsListContainer},
  {path:'albums/:id', component:AlbumDetailsComponent}
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AlbumsRoutingModule{}
