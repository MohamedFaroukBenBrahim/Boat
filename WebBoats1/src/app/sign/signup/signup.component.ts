import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
     user = new User();
      constructor(private service : ServicesService,private rout : Router){}
      ngOnInit() : void{
      }
      invalid(): boolean{
        return ( !this.user.email?.trim() || !this.user.firstname?.trim() || !this.user.firstname?.trim() || !this.user.password?.trim() );
      }

      makeaccount(user: User){
        this.service.register(user).subscribe(
          (Response) => {
            console.log("GREAT SUCCES");
          },
          (error) =>{
            console.log("ERROR");
          }
        )
        this.rout.navigate(['/home'])
      }
}
