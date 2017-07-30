import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
  providers: [ContactService]
})
export class AddcontactComponent implements OnInit {
title = 'App';
  ara:any[];
  private uname : string;
  private email : string;
  constructor(private con:ContactService) { 
   this.con.getContact().subscribe(res=>{
			
			this.ara=res;
			
		  
	})
  }

  ngOnInit() {
	  	 
  }

}
