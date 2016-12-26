import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {AlbumsModule} from "./albums/albums.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AlbumsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
