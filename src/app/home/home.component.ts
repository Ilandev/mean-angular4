import { Component, OnInit } from '@angular/core';

import {ContactService} from '../contact.service';
import { Router } from '@angular/router';

@Component({

templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ContactService]
})
export class HomeComponent {

title = 'App';
ara:any[];
private uname : string;
private email : string;
private id : string;
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

editContact(id){
alert(id)
  this.id = id;
  this.router.navigate(['edit',id]);

}
deleteContact(id){
this.id = id;
console.log(this.id);
this.con.deleteContact(this.id).subscribe(res=>{
  console.log(JSON.stringify(res));
  console.log(res);
  if(res.success == '1')
  {
  console.log('dfffsa')
  this.con.getContact().subscribe(res=>{

    this.ara=res;


})
    }


})
  }


}
