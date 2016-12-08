import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './playlist/playlist.service';
import { EllipsisPipe } from './playlist/ellipsis.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
