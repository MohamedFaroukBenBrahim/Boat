import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoatsComponent } from './boats/boats.component';
import { AddComponent } from './add/add.component';
import { EditboatComponent } from './editboat/editboat.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { DetailsComponent } from './boats/details/details.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './sign/signup/signup.component';
import { LoginComponent } from './sign/login/login.component';
import { messagecontact } from './model/message';
import { MessagesComponent } from './contactpage/messages/messages.component';

const routes: Routes = [
  {path:"",component :HomeComponent},
  {path:"home",component :HomeComponent},
  {path:"boats",component : BoatsComponent},
  {path:"add",component : AddComponent},
  {path:"editboat/:id",component:EditboatComponent},
  {path:"contact",component:ContactpageComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"messages",component:MessagesComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
