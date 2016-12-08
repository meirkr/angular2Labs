import { PlaylistComponent } from './playlist/playlist.component';
import { ContactComponent } from './contact/contact.component';

export const RouterConfig:any[] =
[
    { path:'', redirectTo:'/home', pathMatch:'full'},    
    { path:'home', component: PlaylistComponent},
    { path:'contact', component: ContactComponent}   
]

