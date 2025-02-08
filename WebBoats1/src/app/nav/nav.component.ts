import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { boats } from '../model/boats';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  sea : any = "";
  public Boats : boats[]=[];
  constructor(private service : ServicesService,private rout : Router){}
  ngOnInit(){
    this.getboat();
  }
  getboat():void{
    this.service.getboats().subscribe(
      (Response : boats[]) => {
        this.Boats = Response;
      },
      (error) => { 
        alert("GET OUT");
      }
    );
  }
  search(sea: string): void {
    this.rout.navigate(['/boats'],{
       queryParams: {
         search: sea 
        }
      });
  }
}
