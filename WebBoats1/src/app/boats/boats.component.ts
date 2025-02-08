import { Component, OnInit } from '@angular/core';
import { boats } from '../model/boats';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrl: './boats.component.css'
})

export class BoatsComponent implements OnInit{
  public Boats : boats[]=[];
  public filteredBoats: boats[] = [];
  private searchQuery: string = '';
  constructor(private service : ServicesService,private rout : Router,private route : ActivatedRoute){}
  ngOnInit(){
    this.getboat();
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      this.filterBoats();
    });
  }
  getboat():void{
    this.service.getboats().subscribe(
      (Response : boats[]) => {
        this.Boats = Response;
        this.filterBoats();
      },
      (error) => { 
        alert("GET OUT");
      }
    );
  }
  filterBoats(): void {
    if (this.searchQuery) {
      this.filteredBoats = this.Boats.filter(boat => boat.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    } 
    else {
      this.filteredBoats = this.Boats;
    }
  }
  deleteboat(id : number){
    const X= confirm("Are sure you want delete this ")
    if(X){
      this.service.deleteboats(id).subscribe(
        (Response) => {
          this.Boats.splice(id,1)
          this.getboat();
          this.service.showAlert("Boat deleted with succes");
        },
        (error)=>{
          alert("GET OUT AGIAN ")
        }
      );
    }
    else{
      console.log("DELETE CANCLED")
    }
  }
  
}
