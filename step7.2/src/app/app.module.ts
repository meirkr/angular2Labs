import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {AlbumsModule} from "./albums/albums.module";
import {HttpModule} from "@angular/http";
import {ContactModule} from "./contact/contact.module";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlbumsModule,
    HttpModule,
    ContactModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
