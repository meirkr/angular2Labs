import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../common/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations:[ContactComponent],
  imports:[FormsModule,CommonModule,SharedModule],
  exports:[SharedModule,ContactComponent]
})
export class ContactModule{}
