import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { boats } from '../model/boats';


@Component({
  selector: 'app-editboat',
  templateUrl: './editboat.component.html',
  styleUrl: './editboat.component.css'
})
export class EditboatComponent implements OnInit{
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
  };
  constructor(private service : ServicesService,private route :Router, private activate : ActivatedRoute){}
  ngOnInit(): void {
    const index = this.activate.snapshot.params['id'];
    const mainboat = this.service.findboat(index).subscribe(
      (Response)=>{
        this.boat = Response
      },
      (error)=>{
        console.log("ERROR")
      }
    );
  }
  editboat(){
    this.service.showAlert("Boat edit Saved");
    this.service.updateboats(this.boat).subscribe(
      (Response)=>{
        console.log("SUCCESS")
      },
      (error)=>{
        console.log("ERROR")
      }
    )
    this.route.navigate(['/boats'])
  }
}
