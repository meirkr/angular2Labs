import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {AlbumsModule} from "./albums/albums.module";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AlbumsModule,HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
