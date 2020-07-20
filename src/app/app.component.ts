import { Component, VERSION } from '@angular/core';
export interface Contact{
      name:string;
  phone:string;

}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  contacts: Contact[] = [
    {
      name:'baljot',
      phone:'9878814207'
    }
  ]
}
