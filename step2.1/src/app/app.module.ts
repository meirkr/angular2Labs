import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumsComponent } from '../albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
