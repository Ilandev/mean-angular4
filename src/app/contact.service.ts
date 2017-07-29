import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) {
	  
	  }
getContact(){
	console.log('request came');
	return this.http.get('http://localhost:3000/api').map(res => res.json());
}
}
