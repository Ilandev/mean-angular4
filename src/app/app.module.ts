import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { HomeComponent } from './home/home.component';


const routess=[{
	path:'added',component:AddcontactComponent},{path:'edit/:id',component:EditComponentComponent},{ path: '',   redirectTo: 'home', pathMatch: 'full' },{path:'home',component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddcontactComponent,
    EditComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(routess),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
