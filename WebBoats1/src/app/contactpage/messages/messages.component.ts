import { Component, OnInit } from '@angular/core';
import { messagecontact } from '../../model/message';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{
  public contact : messagecontact[]= [];
  constructor(private service : ServicesService){}
  ngOnInit(): void {
    this.service.allmessages().subscribe(
      (Response : messagecontact[])=>{
        this.contact = Response;
      },
      (error)=>{
        this.service.showAlert("Error");
      }
    )
  }
}
