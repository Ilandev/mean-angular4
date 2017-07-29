import { Component } from '@angular/core';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent {
  title = 'App';
  ara:any[];
  constructor (private con :ContactService){
	  console.log('ere')
	  this.con.getContact().subscribe(res=>{
			
			this.ara=res;
			
		  
	})
  }
}
