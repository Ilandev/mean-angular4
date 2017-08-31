import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

  constructor(private http: Http) {

	  }
getContact(){
	console.log('request came');
	return this.http.get('http://localhost:3000/api').map(res => res.json());
}
addContact(body)
{
	return this.http.post('http://localhost:3000/addcontact',body).map((resp)=>resp.json());
}
editcon(id)
{
return this.http.get('http://localhost:3000/getOne?id='+id).map((resp)=>resp.json());
}
}
