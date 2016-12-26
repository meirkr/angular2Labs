import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
const routes: Route[] =[
  {
    path:'', redirectTo:'albums', pathMatch:'full'
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
