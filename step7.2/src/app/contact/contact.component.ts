import { Component, OnInit } from '@angular/core';
import { Contact } from '../common/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  model:Contact = new Contact();
  successMessage:String = '';
  isSubmitted: boolean = false;
  constructor() {}


  submitForm(): void {
      this.successMessage = "Thank you " + this.model.name +   ", we will contact you soon!!!";
      this.isSubmitted = true;
  }
}
