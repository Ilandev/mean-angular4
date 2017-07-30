import { Component } from '@angular/core';
import {ContactService} from './contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent {
  title = 'App';
  ara:any[];
  private uname : string;
  private email : string;
  constructor (private con :ContactService,private router:Router){
	  console.log('ere')
	  this.con.getContact().subscribe(res=>{
			
			this.ara=res;
			
		  
	})
  }
  addContact(){
	  this.con.addContact({name:this.uname,email:this.email}).subscribe(res=>{
		  console.log(JSON.stringify(res));
		  if(res[0].success=='1')
		  {
			  this.con.getContact().subscribe(res=>{
			
			this.ara=res;
			
		  
	})
		  }

	  })
	  
  }
}
