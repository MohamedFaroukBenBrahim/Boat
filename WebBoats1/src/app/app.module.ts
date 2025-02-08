import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { BoatsComponent } from './boats/boats.component';
import { provideHttpClient } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditboatComponent } from './editboat/editboat.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './boats/details/details.component';
import { SignupComponent } from './sign/signup/signup.component';
import { LoginComponent } from './sign/login/login.component';
import { MessagesComponent } from './contactpage/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FootComponent,
    BoatsComponent,
    AddComponent,
    EditboatComponent,
    ContactpageComponent,
    AboutusComponent,
    DetailsComponent,
    SignupComponent,
    LoginComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
