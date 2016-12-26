import {NgModule} from "@angular/core";
import {EllipsisPipe} from "./ellipsis.pipe";
import {RouterModule} from "@angular/router";
import {NavMenuComponent} from "../navMenu/navMenu.component";

@NgModule({
  imports:[RouterModule],
  declarations:[EllipsisPipe,NavMenuComponent],
  exports:[EllipsisPipe,NavMenuComponent]
})
export class SharedModule{};
