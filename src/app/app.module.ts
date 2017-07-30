import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

const routess=[{
	path:'added',component:AddcontactComponent
},{path:'home',component:AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddcontactComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(routess),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
