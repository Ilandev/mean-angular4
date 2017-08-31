import { Component } from '@angular/core';
import {ContactService} from './contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
    <h1>
  Contact
    </h1>

  </div>
  <h2></h2>
  <router-outlet></router-outlet>`

})
export class AppComponent {

}
