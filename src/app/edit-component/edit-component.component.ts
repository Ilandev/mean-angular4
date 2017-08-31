import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ContactService } from '../contact.service';

@Component({

  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
  providers: [ContactService]
})
export class EditComponentComponent implements OnInit {
uid : string;
arr : any[];
private email : string;
private uname : string;
  constructor(private activatedRoute: ActivatedRoute,private con :ContactService,private router:Router) {

  }

  ngOnInit() {
  this.activatedRoute.params.subscribe((params: Params) => {
        this.uid = params['id'];
        this.con.editcon(this.uid).subscribe(res=>{
        console.log(JSON.stringify(res));
        this.arr=res;
        this.uname = this.arr[0].name;
        this.email = this.arr[0].email;
        })
      });
  }


updateInfo(){
this.con.updateInfo({id:this.uid,name:this.uname,email:this.email}).subscribe(res=>{
console.log(JSON.stringify(res));
if(res[0].success == '1')
{
  this.router.navigate(['home']);
}
})

}


}
