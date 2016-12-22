import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RouterConfig } from './routerConfig';

import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ContactComponent } from './contact/contact.component';
import { PlaylistService } from './playlist/playlist.service';
import { EllipsisPipe } from './playlist/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    NavbarComponent,
    ContactComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
