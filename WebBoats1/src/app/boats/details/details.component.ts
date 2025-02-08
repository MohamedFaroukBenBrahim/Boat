import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { boats } from '../../model/boats';
import { style } from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  /* boat ! : boats; */
  boat: boats = {
    id: 0,
    name: '',
    price: 0,
    type: '',
    manufacturing: new Date(),
    available: false,
    powersource: '',
    features: '',
    cleancapacity: 0,
    range: 0,
    imgUrl: ''
  }
  constructor(private service : ServicesService,private route :Router, private activate : ActivatedRoute){}
     ngOnInit(): void {
      const index = this.activate.snapshot.params['id'];
      const mainboat = this.service.findboat(index).subscribe(
        (Response)=>{
          console.log(boats)
          this.boat = Response
        },
        (error)=>{
          console.log("ERROR")
        }
      );
      if(this.boat.available){
      }
    } 
    

}
