import { Component } from '@angular/core';
import { boats } from '../model/boats';
import { ServicesService } from '../services/services.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  boat = new boats();
  constructor(private service : ServicesService,private rout : Router){}
  ngOnInit() : void{
  }
  addboat(){
    this.service.addboats(this.boat).subscribe(
      (Response) => {
        console.log("GREAT SUCCES");
      },
      (error) =>{
        console.log("ERROR");
      }
    )
    this.rout.navigate(['/boats'])
  }
}
