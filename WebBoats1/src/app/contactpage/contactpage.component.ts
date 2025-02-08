import { Component } from '@angular/core';
import { messagecontact } from '../model/message';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css'
})
export class ContactpageComponent {
  msg = new messagecontact();
  constructor(private service : ServicesService,private rout : Router){}
  invalid(): boolean{
    return ( !this.msg.email?.trim() || !this.msg.name?.trim() || !this.msg.phone?.trim() || !this.msg.message?.trim() );
  }

  send(msg : messagecontact){
    this.service.addmessagecontact(msg).subscribe(
      (Response)=>{
        this.service.showAlert("Contact message Sent");
      },
      (error)=>{
        console.log("ERROR")
      }
    )
    this.rout.navigate(['/home'])
  }
}

